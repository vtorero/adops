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
var color_module_1 = require("../color/color.module");
var box_small_directive_1 = require("./box-small.directive");
var box_small_component_1 = require("./box-small.component");
var BoxSmallModule = /** @class */ (function () {
    function BoxSmallModule() {
    }
    BoxSmallModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, color_module_1.ColorModule],
            exports: [box_small_component_1.BoxSmallComponent, box_small_directive_1.BoxSmallHeaderDirective, box_small_directive_1.BoxSmallContentDirective, box_small_directive_1.BoxSmallFooterDirective],
            declarations: [box_small_component_1.BoxSmallComponent, box_small_directive_1.BoxSmallHeaderDirective, box_small_directive_1.BoxSmallContentDirective, box_small_directive_1.BoxSmallFooterDirective]
        })
    ], BoxSmallModule);
    return BoxSmallModule;
}());
exports.BoxSmallModule = BoxSmallModule;
//# sourceMappingURL=box-small.module.js.map