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
var HeaderInnerComponent = /** @class */ (function () {
    function HeaderInnerComponent() {
    }
    HeaderInnerComponent.prototype.ngOnInit = function () {
        var cimagen = localStorage.getItem("currentAvatar");
        var nombre = localStorage.getItem("currentNombre");
        this.imagen = cimagen;
        this.usuario = nombre;
    };
    HeaderInnerComponent.prototype.logout = function () {
        localStorage.removeItem("currentEmpresa");
        localStorage.removeItem("currentUser");
        localStorage.removeItem("currentNombre");
        localStorage.removeItem("currentAvatar");
        console.log("salir");
    };
    HeaderInnerComponent = __decorate([
        core_1.Component({
            selector: 'app-header-inner',
            templateUrl: './header-inner.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], HeaderInnerComponent);
    return HeaderInnerComponent;
}());
exports.HeaderInnerComponent = HeaderInnerComponent;
//# sourceMappingURL=header-inner.component.js.map