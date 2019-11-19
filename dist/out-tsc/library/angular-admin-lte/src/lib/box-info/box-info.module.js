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
var box_info_directive_1 = require("./box-info.directive");
var box_info_component_1 = require("./box-info.component");
var BoxInfoModule = /** @class */ (function () {
    function BoxInfoModule() {
    }
    BoxInfoModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, color_module_1.ColorModule],
            exports: [box_info_component_1.BoxInfoComponent, box_info_directive_1.BoxInfoHeaderDirective, box_info_directive_1.BoxInfoContentDirective, box_info_directive_1.BoxInfoFooterDirective],
            declarations: [box_info_component_1.BoxInfoComponent, box_info_directive_1.BoxInfoHeaderDirective, box_info_directive_1.BoxInfoContentDirective, box_info_directive_1.BoxInfoFooterDirective]
        })
    ], BoxInfoModule);
    return BoxInfoModule;
}());
exports.BoxInfoModule = BoxInfoModule;
//# sourceMappingURL=box-info.module.js.map