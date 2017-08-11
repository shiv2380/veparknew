import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
//import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { LoginService } from './login.service';
import { ILoginUser } from '../register/register';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/rx';
import { AuthService } from "angular2-social-login";

@Component({
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})

export class LoginComponent implements OnInit {
    @ViewChild('modal')
    //modal: ModalComponent;

    
    pageTitle: string = 'Login';
    showError: boolean = false;
    username: string;
    password: string;
    errorMessage: string;
    public user;
    sub: any;
    url: string = "http://localhost:50684/api/Account/ExternalLogin?provider=Google&response_type=token&client_id=self&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Flogin&state=S0EYod4o1of3UWCfneXfwHHOBK1BnM7SHzF6Xzfkp6g1";


    constructor(private loginService: LoginService, private router: Router, private http: Http, public _auth: AuthService) {

    }

    signIn(provider){
    this.sub = this._auth.login(provider).subscribe(
      (data) => {
        console.log(data);this.user=data;},
        (error: any) => this.errorMessage = <any>error
    );
  }

    login(): void {
        this.loginService.login(this.getLoginUser()).subscribe(
            () => this.onSaveComplete(),
            (error: any) => this.errorMessage = <any>error
        );
    }

    onSaveComplete(): void {
        this.router.navigate(['/customer']);
    }

    onClick(): void {
        this.router.navigate(['/register']);
    }

    getLoginUser(): ILoginUser {
        return {
            Username: this.username,
            Password: this.password
        }
    }

    onGoogleClick(): void {
        // return this.http.get(this.url)
        //     .map(this.extractData)
        //     //.do(data => console.log(JSON.stringify(data)))
        //     .catch(this.handleError);
        window.location.href = "http://localhost:50684/api/Account/ExternalLogin?provider=Google&response_type=token&client_id=self&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Flogin&state=S0EYod4o1of3UWCfneXfwHHOBK1BnM7SHzF6Xzfkp6g1";
    }

    onFacebookClick(): void {
        window.location.href = "http://localhost:50684/api/Account/ExternalLogin?provider=Facebook&response_type=token&client_id=self&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Flogin&state=S0EYod4o1of3UWCfneXfwHHOBK1BnM7SHzF6Xzfkp6g1";
    }


    ngOnInit(): void {
        this.loginService.getAccessToken();
    }

    logout(){
    this._auth.logout().subscribe(
      (data)=>{console.log(data);this.user=null;}
    )
  }

//   ngOnDestroy(){
//     this.sub.unsubscribe();
//   }

}