"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rx_1 = require("rxjs/rx");
var http_1 = require("@angular/http");
var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
        this._customerUrl = 'http://localhost:50684/token';
        this.url = 'http://localhost:50684/api/Account/UserInfo';
        this.registerExternalUserUrl = 'http://localhost:50684/api/Account/RegisterExternal';
    }
    LoginService.prototype.login = function (user) {
        var body = 'username=' + user.Username + '&password=' + user.Password + '&grant_type=password';
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this._customerUrl, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    LoginService.prototype.getAccessToken = function (toregister) {
        var _this = this;
        if (toregister === void 0) { toregister = true; }
        if (location.hash) {
            if (location.hash.split('access_token=')) {
                this.googleAccessToken = location.hash.split('access_token=')[1].split('&')[0];
                if (this.googleAccessToken && toregister) {
                    this.isUserRegistered(this.googleAccessToken)
                        .subscribe(function (response) { return _this.extractGoogleData(response); });
                }
            }
        }
    };
    LoginService.prototype.isUserRegistered = function (accessToken) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', 'Bearer ' + this.googleAccessToken);
        //let headers = new Headers({ 'Authorization': 'Bearer ' + this.googleAccessToken});
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get(this.url, options)
            .catch(function (error) { return rx_1.Observable.throw(error); });
    };
    LoginService.prototype.handleError = function (error) {
        return rx_1.Observable.throw(error.json().error || 'Server error');
    };
    LoginService.prototype.extractGoogleData = function (response) {
        var _this = this;
        var body = response.json();
        if (body.HasRegistered) {
            sessionStorage.setItem('accesstoken', this.googleAccessToken);
            sessionStorage.setItem('userName', body.Email);
            window.location.href = "http://localhost:4200/customer";
        }
        else {
            //this.getAccessToken(false);
            if (location.hash) {
                if (location.hash.split('access_token=')) {
                    this.googleAccessToken = location.hash.split('access_token=')[1].split('&')[0];
                }
                this.signupExternalUser(body.Email).
                    subscribe(function (response) { return _this.extractExternalUserData(body.LoginProvider); });
            }
        }
    };
    LoginService.prototype.signupExternalUser = function (email) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        headers.append('Authorization', 'Bearer ' + this.googleAccessToken);
        var options = new http_1.RequestOptions({ headers: headers });
        var body = 'email=' + email;
        return this.http.post(this.registerExternalUserUrl, body, options)
            .catch(function (error) { return rx_1.Observable.throw(error); });
    };
    LoginService.prototype.extractExternalUserData = function (provider) {
        //window.location.href = "http://localhost:50684/api/Account/ExternalLogin?provider=" + provider + "&response_type=token&client_id=self&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Flogin&state=S0EYod4o1of3UWCfneXfwHHOBK1BnM7SHzF6Xzfkp6g1";
        window.location.href = "http://localhost:50684/api/Account/ExternalLogin?provider=" + provider + "&response_type=token&client_id=self&redirect_uri=http%3A%2F%2Flocalhost:4200%2FHelp&state=S0EYod4o1of3UWCfneXfwHHOBK1BnM7SHzF6Xzfkp6g1";
    };
    LoginService.prototype.extractData = function (response) {
        var body = response.json();
        sessionStorage.setItem('accesstoken', body.access_token);
        sessionStorage.setItem('userName', body.userName);
        return body.data || {};
    };
    return LoginService;
}());
LoginService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map