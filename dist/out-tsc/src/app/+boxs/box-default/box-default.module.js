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
var box_default_routing_module_1 = require("./box-default-routing.module");
var box_default_component_1 = require("./box-default.component");
var angular_admin_lte_1 = require("angular-admin-lte");
var BoxDefaultModule = /** @class */ (function () {
    function BoxDefaultModule() {
    }
    BoxDefaultModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                box_default_routing_module_1.BoxDefaultRoutingModule,
                angular_admin_lte_1.BoxModule
            ],
            declarations: [box_default_component_1.BoxDefaultComponent]
        })
    ], BoxDefaultModule);
    return BoxDefaultModule;
}());
exports.BoxDefaultModule = BoxDefaultModule;
//# sourceMappingURL=box-default.module.js.map