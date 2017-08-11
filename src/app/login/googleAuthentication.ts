import {Injectable} from '@angular/core';
import {ILoginUser} from '../register/register';
import {Observable} from 'rxjs/rx';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

export class GoogleAuthentication{

   private url = 'http://localhost:50684/api/Account/UserInfo';

   constructor(private http: Http) {
    }

    getAccessToken(){
        if(location.hash){
            if (location.hash.split('access_token=')) {
                var accessToken = location.hash.split('access_token=')[1].split('&')[0];
                if (accessToken) {
                    this.isUserRegistered(accessToken);
                }
            }
        }
    }

    isUserRegistered(accessToken: string){
        let headers = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });

        return this.http.get(this.url, options)
                .map(this.extractData)
                //.do(data => console.log(JSON.stringify(data)))
                .catch(this.handleError);
    }

    private handleError(error: Response){
        return Observable.throw(error.json().error || 'Server error');
    }

    private extractData(response: Response) {
        let body = response.json();
        sessionStorage.setItem('accesstoken', body.access_token);
        sessionStorage.setItem('userName', body.userName);
        return body.data || {};
    }

}