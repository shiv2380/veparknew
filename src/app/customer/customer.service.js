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
var CustomerService = (function () {
    function CustomerService(_http) {
        this._http = _http;
        this._customerUrl = 'http://localhost:50684/api/customer/';
    }
    CustomerService.prototype.getCustomers = function () {
        var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + sessionStorage.getItem('accesstoken') });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.get(this._customerUrl, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CustomerService.prototype.getProduct = function (id) {
        // let pms: URLSearchParams = new URLSearchParams();
        // pms.set('productId', id.toString());
        // return this._http.get(this._productUrl, {search: pms})
        //         .map((response: Response) => <IProduct>response.json())
        //         .do(data => console.log(JSON.stringify(data)))
        //         .catch(this.handleError);
        return this.getCustomers()
            .map(function (products) { return products.find(function (p) { return p.id === id; }); });
    };
    CustomerService.prototype.handleError = function (err) {
        console.error(err);
        return rx_1.Observable.throw(err);
    };
    return CustomerService;
}());
CustomerService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CustomerService);
exports.CustomerService = CustomerService;
//# sourceMappingURL=customer.service.js.map