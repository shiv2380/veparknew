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
var Observable_1 = require("rxjs/Observable");
/**
 * GeocodingService class.
 * https://developers.google.com/maps/documentation/javascript/
 */
var GeocodingService = (function () {
    function GeocodingService() {
        this.geocoder = new google.maps.Geocoder();
    }
    /**
     * Reverse geocoding by location.
     *
     * Wraps the Google Maps API geocoding service into an observable.
     *
     * @param latLng Location
     * @return An observable of GeocoderResult
     */
    GeocodingService.prototype.geocode = function (latLng) {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            // Invokes geocode method of Google Maps API geocoding.
            _this.geocoder.geocode({ 'location': latLng }, (function (results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                    observer.next(results);
                    observer.complete();
                }
                else {
                    console.log('Geocoding service: geocoder failed due to: ' + status);
                    observer.error(status);
                }
            }));
        });
    };
    /**
     * Geocoding services.
     *
     * Wraps the Google Maps API geocoding service into an observable.
     *
     * @param address The address to be searched
     * @return An observable of GeocoderResult
     */
    GeocodingService.prototype.codeAddress = function (address) {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            // Invokes geocode method of Google Maps API geocoding.
            _this.geocoder.geocode({ 'address': address }, (function (results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                    observer.next(results);
                    observer.complete();
                }
                else {
                    console.log('Geocoding service: geocode was not successful for the following reason: ' + status);
                    observer.error(status);
                }
            }));
        });
    };
    return GeocodingService;
}());
GeocodingService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], GeocodingService);
exports.GeocodingService = GeocodingService;
//# sourceMappingURL=geocoding.service.js.map