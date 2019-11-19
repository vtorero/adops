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
var box_directive_1 = require("./box.directive");
var box_component_1 = require("./box.component");
var BoxModule = /** @class */ (function () {
    function BoxModule() {
    }
    BoxModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, animations_module_1.AnimationsModule, color_module_1.ColorModule],
            exports: [box_component_1.BoxComponent, box_directive_1.BoxHeaderDirective, box_directive_1.BoxContentDirective, box_directive_1.BoxFooterDirective, box_directive_1.BoxToolsDirective],
            declarations: [box_component_1.BoxComponent, box_directive_1.BoxHeaderDirective, box_directive_1.BoxContentDirective, box_directive_1.BoxFooterDirective, box_directive_1.BoxToolsDirective]
        })
    ], BoxModule);
    return BoxModule;
}());
exports.BoxModule = BoxModule;
//# sourceMappingURL=box.module.js.map