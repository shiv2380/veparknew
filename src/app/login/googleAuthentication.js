"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rx_1 = require("rxjs/rx");
var http_1 = require("@angular/http");
var GoogleAuthentication = (function () {
    function GoogleAuthentication(http) {
        this.http = http;
        this.url = 'http://localhost:50684/api/Account/UserInfo';
    }
    GoogleAuthentication.prototype.getAccessToken = function () {
        if (location.hash) {
            if (location.hash.split('access_token=')) {
                var accessToken = location.hash.split('access_token=')[1].split('&')[0];
                if (accessToken) {
                    this.isUserRegistered(accessToken);
                }
            }
        }
    };
    GoogleAuthentication.prototype.isUserRegistered = function (accessToken) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get(this.url, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    GoogleAuthentication.prototype.handleError = function (error) {
        return rx_1.Observable.throw(error.json().error || 'Server error');
    };
    GoogleAuthentication.prototype.extractData = function (response) {
        var body = response.json();
        sessionStorage.setItem('accesstoken', body.access_token);
        sessionStorage.setItem('userName', body.userName);
        return body.data || {};
    };
    return GoogleAuthentication;
}());
exports.GoogleAuthentication = GoogleAuthentication;
//# sourceMappingURL=googleAuthentication.js.map