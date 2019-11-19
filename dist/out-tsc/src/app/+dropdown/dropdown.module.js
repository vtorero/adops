"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var dropdown_routing_module_1 = require("./dropdown-routing.module");
var dropdown_component_1 = require("./dropdown.component");
var angular_admin_lte_1 = require("angular-admin-lte");
var DropdownModule = /** @class */ (function () {
    function DropdownModule() {
    }
    DropdownModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                dropdown_routing_module_1.DropdownRoutingModule,
                angular_admin_lte_1.BoxModule,
                angular_admin_lte_1.DropdownModule
            ],
            declarations: [dropdown_component_1.DropdownComponent]
        })
    ], DropdownModule);
    return DropdownModule;
}());
exports.DropdownModule = DropdownModule;
//# sourceMappingURL=dropdown.module.js.map