"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var color_module_1 = require("../../color/color.module");
var input_group_component_1 = require("./input-group.component");
var input_group_directive_1 = require("./input-group.directive");
var InputGroupModule = /** @class */ (function () {
    function InputGroupModule() {
    }
    InputGroupModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                color_module_1.ColorModule,
                forms_1.FormsModule
            ],
            exports: [input_group_component_1.InputGroupComponent, input_group_directive_1.InputGroupLabelDirective, input_group_directive_1.InputGroupAddonLeftDirective,
                input_group_directive_1.InputGroupAddonRightDirective, input_group_directive_1.InputGroupContentDirective],
            declarations: [input_group_component_1.InputGroupComponent, input_group_directive_1.InputGroupLabelDirective, input_group_directive_1.InputGroupAddonLeftDirective,
                input_group_directive_1.InputGroupAddonRightDirective, input_group_directive_1.InputGroupContentDirective]
        })
    ], InputGroupModule);
    return InputGroupModule;
}());
exports.InputGroupModule = InputGroupModule;
//# sourceMappingURL=input-group.module.js.map