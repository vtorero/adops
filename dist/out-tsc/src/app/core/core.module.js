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
var http_1 = require("@angular/common/http");
var forms_1 = require("@angular/forms");
var angular_admin_lte_1 = require("angular-admin-lte");
var header_inner_component_1 = require("./header-inner/header-inner.component");
var sidebar_left_inner_component_1 = require("./sidebar-left-inner/sidebar-left-inner.component");
var sidebar_right_inner_component_1 = require("./sidebar-right-inner/sidebar-right-inner.component");
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                angular_admin_lte_1.DropdownModule,
                angular_admin_lte_1.TabsModule,
                angular_admin_lte_1.BoxModule
            ],
            declarations: [header_inner_component_1.HeaderInnerComponent, sidebar_left_inner_component_1.SidebarLeftInnerComponent, sidebar_right_inner_component_1.SidebarRightInnerComponent],
            exports: [angular_admin_lte_1.BoxModule, angular_admin_lte_1.TabsModule, header_inner_component_1.HeaderInnerComponent, sidebar_left_inner_component_1.SidebarLeftInnerComponent, sidebar_right_inner_component_1.SidebarRightInnerComponent]
        })
    ], CoreModule);
    return CoreModule;
}());
exports.CoreModule = CoreModule;
//# sourceMappingURL=core.module.js.map