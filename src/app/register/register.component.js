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
var register_service_1 = require("./register.service");
// import {ICustomer} from './customer';
// import {CustomerService} from './customer.service';
var RegisterComponent = (function () {
    function RegisterComponent(_registerService, router) {
        this._registerService = _registerService;
        this.router = router;
        this.pageTitle = 'Register Page';
        this.showError = false;
    }
    RegisterComponent.prototype.onClick = function () {
        this.router.navigate(['/login']);
    };
    RegisterComponent.prototype.getUser = function () {
        // Return an initialized object
        return {
            Email: this.email,
            password: this.password,
            confirmPassword: this.confirmPassword
        };
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        var p = this.getUser();
        this._registerService.addUser(p)
            .subscribe(function () { return _this.onSaveComplete(); }, function (error) { return _this.errorMessage = error; });
    };
    RegisterComponent.prototype.onSaveComplete = function () {
        // Reset the form to clear the flags
        //this.productForm.reset();
        this.open();
        //this.router.navigate(['/products']);
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.close = function () {
        this.modal.close();
    };
    RegisterComponent.prototype.open = function () {
        this.modal.open();
    };
    return RegisterComponent;
}());
__decorate([
    core_1.ViewChild('modal'),
    __metadata("design:type", ng2_bs3_modal_1.ModalComponent)
], RegisterComponent.prototype, "modal", void 0);
RegisterComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/register/register.component.html',
        styleUrls: ['app/register/register.component.css']
    }),
    __metadata("design:paramtypes", [register_service_1.RegisterService, router_1.Router])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map