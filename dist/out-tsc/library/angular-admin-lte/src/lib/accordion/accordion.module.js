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
var accordion_component_1 = require("./accordion.component");
var accordion_directive_1 = require("./accordion.directive");
var AccordionModule = /** @class */ (function () {
    function AccordionModule() {
    }
    AccordionModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, animations_module_1.AnimationsModule, color_module_1.ColorModule],
            exports: [accordion_component_1.AccordionHeaderComponent, accordion_component_1.AccordionContentComponent, accordion_component_1.AccordionComponent, accordion_component_1.AccordionGroupComponent],
            declarations: [accordion_directive_1.AccordionToggleDirective, accordion_component_1.AccordionHeaderComponent,
                accordion_component_1.AccordionContentComponent, accordion_component_1.AccordionComponent, accordion_component_1.AccordionGroupComponent]
        })
    ], AccordionModule);
    return AccordionModule;
}());
exports.AccordionModule = AccordionModule;
//# sourceMappingURL=accordion.module.js.map