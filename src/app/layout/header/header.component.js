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
// import { SearchActions } from './../../home/reducers/search.actions';
// import { getTaxonomies } from './../../product/reducers/selectors';
// import { getTotalCartItems } from './../../checkout/reducers/selectors';
var core_1 = require("@angular/core");
// import { AuthService } from '../../core/services/auth.service';
// import { AuthActions } from '../../auth/actions/auth.actions';
var HeaderComponent = (function () {
    function HeaderComponent() {
        this.taxonList = [{
                "id": 4,
                "name": "Mugs",
                "pretty_name": "Categories -> Mugs",
                "permalink": "categories/mugs",
                "parent_id": 1,
                "taxonomy_id": 1
            }, {
                "id": 3,
                "name": "Bags",
                "pretty_name": "Categories -> Bags",
                "permalink": "categories/bags",
                "parent_id": 1,
                "taxonomy_id": 1
            }, {
                "id": 8,
                "name": "Ruby",
                "pretty_name": "Brand -> Ruby",
                "permalink": "brand/ruby",
                "parent_id": 2,
                "taxonomy_id": 2
            }, {
                "id": 9,
                "name": "Apache",
                "pretty_name": "Brand -> Apache",
                "permalink": "brand/apache",
                "parent_id": 2,
                "taxonomy_id": 2
            }, {
                "id": 10,
                "name": "Spree",
                "pretty_name": "Brand -> Spree",
                "permalink": "brand/spree",
                "parent_id": 2,
                "taxonomy_id": 2
            }, {
                "id": 11,
                "name": "Rails",
                "pretty_name": "Brand -> Rails",
                "permalink": "brand/rails",
                "parent_id": 2,
                "taxonomy_id": 2
            }];
    }
    HeaderComponent.prototype.ngOnInit = function () {
        // this.store.dispatch(this.authActions.authorize());
        // this.isAuthenticated = this.store.select(getAuthStatus);
        // this.totalCartItems = this.store.select(getTotalCartItems);
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    core_1.Component({
        selector: 'app-header',
        templateUrl: './app/layout/header/header.component.html',
        styleUrls: ['./app/layout/header/header.component.scss']
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map