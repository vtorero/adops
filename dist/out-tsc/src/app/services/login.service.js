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
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var global_1 = require("../global");
var util_1 = require("util");
var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this.loggedStatus = false;
        this.headers = new http_1.HttpHeaders({ "Content-type": "application/json" });
    }
    LoginService.prototype.loginUser = function (usuario, password) {
        var url = global_1.Global.BASE_API_URL + 'api.php/login';
        return this.http.post(url, {
            usuario: usuario,
            password: password
        }, { headers: this.headers }).pipe(operators_1.map(function (data) { return data; }));
    };
    Object.defineProperty(LoginService.prototype, "getCurrentUser", {
        get: function () {
            var user = localStorage.getItem("currentUser");
            if (util_1.isNullOrUndefined(user)) {
                return false;
            }
            else {
                return true;
            }
        },
        enumerable: true,
        configurable: true
    });
    LoginService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map