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
var forms_1 = require("@angular/forms");
var GoogleplaceDirective = (function () {
    function GoogleplaceDirective(el, model) {
        var _this = this;
        this.model = model;
        this.setAddress = new core_1.EventEmitter();
        this._el = el.nativeElement;
        this.modelValue = this.model;
        var input = this._el;
        this.autocomplete = new google.maps.places.Autocomplete(input, {});
        google.maps.event.addListener(this.autocomplete, 'place_changed', function () {
            var place = _this.autocomplete.getPlace();
            _this.invokeEvent(place);
        });
    }
    GoogleplaceDirective.prototype.invokeEvent = function (place) {
        this.setAddress.emit(place);
    };
    GoogleplaceDirective.prototype.onInputChange = function () {
    };
    return GoogleplaceDirective;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], GoogleplaceDirective.prototype, "setAddress", void 0);
GoogleplaceDirective = __decorate([
    core_1.Directive({
        selector: '[googleplace]',
        providers: [forms_1.NgModel],
        host: {
            '(input)': 'onInputChange()'
        }
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, forms_1.NgModel])
], GoogleplaceDirective);
exports.GoogleplaceDirective = GoogleplaceDirective;
//# sourceMappingURL=googleplace.directive.js.map