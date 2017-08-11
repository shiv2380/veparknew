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
var customer_service_1 = require("./customer.service");
var CustomerListComponent = (function () {
    function CustomerListComponent(_productService, router) {
        this._productService = _productService;
        this.router = router;
        this.pageTitle = 'Customers List';
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.showImage = false;
        this.userName = 'shiv';
    }
    CustomerListComponent.prototype.close = function () {
        this.modal.close();
        this.router.navigate(['/login']);
    };
    CustomerListComponent.prototype.open = function () {
        this.modal.open();
    };
    CustomerListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    CustomerListComponent.prototype.onClick = function () {
        sessionStorage.removeItem('accesstoken');
        this.router.navigate(['/login']);
    };
    // onSelect(hero: ICustomer) {
    //     this.router.navigate(['/product', hero.productId]);
    //   }
    CustomerListComponent.prototype.onButtonGetClick = function () {
        var _this = this;
        if (sessionStorage.getItem('accesstoken') == null) {
            this.open();
        }
        this._productService.getCustomers()
            .subscribe(function (products) { return _this.products = products; }, function (error) { return _this.handleError(error); });
    };
    CustomerListComponent.prototype.onButtonClearClick = function () {
        //this.products.slice(0, this.products.length);
        this.products = null;
    };
    CustomerListComponent.prototype.handleError = function (err) {
        if (err.status == 401) {
            this.open();
        }
    };
    CustomerListComponent.prototype.ngOnInit = function () {
        if (sessionStorage.getItem('accesstoken') == null) {
            this.router.navigate(['/login']);
        }
        this.userName = sessionStorage.getItem('userName');
        // this._productService.getCustomers()
        //     .subscribe(products => this.products = products,
        //     error => this.errorMsg = <any>error);
    };
    return CustomerListComponent;
}());
__decorate([
    core_1.ViewChild('modal'),
    __metadata("design:type", ng2_bs3_modal_1.ModalComponent)
], CustomerListComponent.prototype, "modal", void 0);
CustomerListComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/customer/customer-list.component.html'
        //styleUrls: ['app/products/product-list.component.css']
    }),
    __metadata("design:paramtypes", [customer_service_1.CustomerService, router_1.Router])
], CustomerListComponent);
exports.CustomerListComponent = CustomerListComponent;
//# sourceMappingURL=customer-list.component.js.map