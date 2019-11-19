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
var animations_module_1 = require("../animations/animations.module");
var color_module_1 = require("../color/color.module");
var dropdown_component_1 = require("./dropdown.component");
var DropdownModule = /** @class */ (function () {
    function DropdownModule() {
    }
    DropdownModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, animations_module_1.AnimationsModule, color_module_1.ColorModule],
            exports: [dropdown_component_1.DropdownComponent, dropdown_component_1.DropdownToggleComponent, dropdown_component_1.DropdownMenuComponent],
            declarations: [dropdown_component_1.DropdownComponent, dropdown_component_1.DropdownToggleComponent, dropdown_component_1.DropdownMenuComponent]
        })
    ], DropdownModule);
    return DropdownModule;
}());
exports.DropdownModule = DropdownModule;
//# sourceMappingURL=dropdown.module.js.map