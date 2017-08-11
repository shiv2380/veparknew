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
var router_1 = require("@angular/router");
var ng2_bs3_modal_1 = require("ng2-bs3-modal/ng2-bs3-modal");
var login_service_1 = require("./login.service");
var http_1 = require("@angular/http");
var LoginComponent = (function () {
    function LoginComponent(loginService, router, http) {
        this.loginService = loginService;
        this.router = router;
        this.http = http;
        this.pageTitle = 'Login';
        this.showError = false;
        this.url = "http://localhost:50684/api/Account/ExternalLogin?provider=Google&response_type=token&client_id=self&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Flogin&state=S0EYod4o1of3UWCfneXfwHHOBK1BnM7SHzF6Xzfkp6g1";
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loginService.login(this.getLoginUser()).subscribe(function () { return _this.onSaveComplete(); }, function (error) { return _this.errorMessage = error; });
    };
    LoginComponent.prototype.onSaveComplete = function () {
        this.router.navigate(['/customer']);
    };
    LoginComponent.prototype.onClick = function () {
        this.router.navigate(['/register']);
    };
    LoginComponent.prototype.getLoginUser = function () {
        return {
            Username: this.username,
            Password: this.password
        };
    };
    LoginComponent.prototype.onGoogleClick = function () {
        // return this.http.get(this.url)
        //     .map(this.extractData)
        //     //.do(data => console.log(JSON.stringify(data)))
        //     .catch(this.handleError);
        window.location.href = "http://localhost:50684/api/Account/ExternalLogin?provider=Google&response_type=token&client_id=self&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Flogin&state=S0EYod4o1of3UWCfneXfwHHOBK1BnM7SHzF6Xzfkp6g1";
    };
    LoginComponent.prototype.onFacebookClick = function () {
        window.location.href = "http://localhost:50684/api/Account/ExternalLogin?provider=Facebook&response_type=token&client_id=self&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Flogin&state=S0EYod4o1of3UWCfneXfwHHOBK1BnM7SHzF6Xzfkp6g1";
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.loginService.getAccessToken();
    };
    return LoginComponent;
}());
__decorate([
    core_1.ViewChild('modal'),
    __metadata("design:type", ng2_bs3_modal_1.ModalComponent)
], LoginComponent.prototype, "modal", void 0);
LoginComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/login/login.component.html',
        styleUrls: ['app/login/login.component.css']
    }),
    __metadata("design:paramtypes", [login_service_1.LoginService, router_1.Router, http_1.Http])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map