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
var forms_1 = require("@angular/forms");
var input_text_routing_module_1 = require("./input-text-routing.module");
var input_text_component_1 = require("./input-text.component");
var angular_admin_lte_1 = require("angular-admin-lte");
var InputTextModule = /** @class */ (function () {
    function InputTextModule() {
    }
    InputTextModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                angular_admin_lte_1.BoxModule,
                input_text_routing_module_1.InputTextRoutingModule,
                angular_admin_lte_1.InputTextModule,
                angular_admin_lte_1.InputGroupModule
            ],
            declarations: [input_text_component_1.InputTextComponent]
        })
    ], InputTextModule);
    return InputTextModule;
}());
exports.InputTextModule = InputTextModule;
//# sourceMappingURL=input-text.module.js.map