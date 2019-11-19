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
var router_1 = require("@angular/router");
var breadcrumbs_module_1 = require("../../breadcrumbs/breadcrumbs.module");
var content_component_1 = require("./content.component");
var ContentModule = /** @class */ (function () {
    function ContentModule() {
    }
    ContentModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule, breadcrumbs_module_1.BreadcrumbsModule],
            exports: [content_component_1.ContentComponent],
            declarations: [content_component_1.ContentComponent]
        })
    ], ContentModule);
    return ContentModule;
}());
exports.ContentModule = ContentModule;
//# sourceMappingURL=content.module.js.map