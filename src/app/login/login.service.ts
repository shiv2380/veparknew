import { Injectable } from '@angular/core';
import { ILoginUser, IGoogleUser } from '../register/register';
import { Observable } from 'rxjs/rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()

export class LoginService {
    private _customerUrl = 'http://localhost:50684/token';
    private url = 'http://localhost:50684/api/Account/UserInfo';
    private registerExternalUserUrl = 'http://localhost:50684/api/Account/RegisterExternal';
    googleAccessToken: string;

    constructor(private http: Http) {
    }

    login(user: ILoginUser): Observable<ILoginUser> {


        let body: string = 'username=' + user.Username + '&password=' + user.Password + '&grant_type=password';
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this._customerUrl, body, options)
            .map(this.extractData)
            //.do(data => console.log(JSON.stringify(data)))
            .catch(this.handleError);
    }


    getAccessToken(toregister: boolean = true) {
        if (location.hash) {
            if (location.hash.split('access_token=')) {
                this.googleAccessToken = location.hash.split('access_token=')[1].split('&')[0];
                if (this.googleAccessToken && toregister) {
                    this.isUserRegistered(this.googleAccessToken)
                    .subscribe(response => this.extractGoogleData(response));
                }
            }
        }
    }

    isUserRegistered(accessToken: string): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', 'Bearer ' + this.googleAccessToken)
        //let headers = new Headers({ 'Authorization': 'Bearer ' + this.googleAccessToken});
        let options = new RequestOptions({ headers: headers });

        return this.http.get(this.url, options)
            //.map(this.extractGoogleData)
            //.do(data => console.log(JSON.stringify(data)))
            .catch(error => Observable.throw(error));
    }




    private handleError(error: Response) {
        return Observable.throw(error.json().error || 'Server error');
    }

    private extractGoogleData(response: Response) {
        let body = response.json();
        if (body.HasRegistered) {
            sessionStorage.setItem('accesstoken', this.googleAccessToken);
            sessionStorage.setItem('userName', body.Email);
            window.location.href = "http://localhost:4200/customer";
        }
        else {            
            if (location.hash) {
                if (location.hash.split('access_token=')) {
                    this.googleAccessToken = location.hash.split('access_token=')[1].split('&')[0];
                }
                this.signupExternalUser(body.Email).
                subscribe(response => this.extractExternalUserData(body.LoginProvider));
            }
        }
    }

    private signupExternalUser(email: string): Observable<IGoogleUser> {
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        headers.append('Authorization', 'Bearer ' + this.googleAccessToken)
        let options = new RequestOptions({ headers: headers });

        let body: string = 'email=' + email;

        return this.http.post(this.registerExternalUserUrl, body, options)
            //.map(this.extractExternalUserData)
            //.do(data => console.log(JSON.stringify(data)))
            .catch(error => Observable.throw(error));
    }

    private extractExternalUserData(provider: string) {
        window.location.href = "http://localhost:50684/api/Account/ExternalLogin?provider=" + provider + "&response_type=token&client_id=self&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Flogin&state=S0EYod4o1of3UWCfneXfwHHOBK1BnM7SHzF6Xzfkp6g1";
    }

    private extractData(response: Response) {
        let body = response.json();
        sessionStorage.setItem('accesstoken', body.access_token);
        sessionStorage.setItem('userName', body.userName);
        return body.data || {};
    }


}