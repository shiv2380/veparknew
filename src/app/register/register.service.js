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
//import { Observable } from 'rxjs/Observable';
var RegisterService = (function () {
    function RegisterService(http) {
        this.http = http;
        this._customerUrl = 'https://localhost:44395/api/account/register';
    }
    RegisterService.prototype.addUser = function (user) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this._customerUrl, user, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    RegisterService.prototype.handleError = function (error) {
        //console.error(error);
        return rx_1.Observable.throw(error.json().error || 'Server error');
    };
    // private createProduct(product: IProduct, options: RequestOptions): Observable<IProduct> {
    //     product.id = undefined;
    //     return this.http.post(this.baseUrl, product, options)
    //         .map(this.extractData)
    //         .do(data => console.log('createProduct: ' + JSON.stringify(data)))
    //         .catch(this.handleError);
    // }
    // private updateProduct(product: IProduct, options: RequestOptions): Observable<IProduct> {
    //     const url = `${this.baseUrl}/${product.id}`;
    //     return this.http.put(url, product, options)
    //         .map(() => product)
    //         .do(data => console.log('updateProduct: ' + JSON.stringify(data)))
    //         .catch(this.handleError);
    // }
    RegisterService.prototype.extractData = function (response) {
        var body = response.json();
        return body.data || {};
    };
    return RegisterService;
}());
RegisterService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], RegisterService);
exports.RegisterService = RegisterService;
//# sourceMappingURL=register.service.js.map