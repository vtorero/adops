"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var content_module_1 = require("./content/content.module");
var footer_module_1 = require("./footer/footer.module");
var header_module_1 = require("./header/header.module");
var sidebar_left_module_1 = require("./sidebar-left/sidebar-left.module");
var sidebar_right_module_1 = require("./sidebar-right/sidebar-right.module");
var wrapper_module_1 = require("./wrapper/wrapper.module");
var layout_service_1 = require("./layout.service");
var layout_provider_1 = require("./layout.provider");
var routing_service_1 = require("../services/routing.service");
var wrapper_service_1 = require("./wrapper/wrapper.service");
var sidebar_right_service_1 = require("./sidebar-right/sidebar-right.service");
var header_service_1 = require("./header/header.service");
var footer_service_1 = require("./footer/footer.service");
var LayoutModule = /** @class */ (function () {
    /**
     * @method constructor
     * @param parentModule [description]
     */
    function LayoutModule(parentModule) {
        if (parentModule) {
            throw new Error('LayoutModule is already loaded. Import it in the AppModule only!');
        }
    }
    LayoutModule_1 = LayoutModule;
    /**
     * [forRoot description]
     * @method forRoot
     * @param  layoutConfig [description]
     * @return [description]
     */
    LayoutModule.forRoot = function (layoutConfig) {
        return {
            ngModule: LayoutModule_1,
            providers: layout_provider_1.layoutProvider(layoutConfig).concat([layout_service_1.LayoutService])
        };
    };
    var LayoutModule_1;
    LayoutModule = LayoutModule_1 = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule],
            exports: [content_module_1.ContentModule, footer_module_1.FooterModule, header_module_1.HeaderModule, sidebar_left_module_1.SidebarLeftModule, sidebar_right_module_1.SidebarRightModule, wrapper_module_1.WrapperModule],
            providers: [routing_service_1.RoutingService, wrapper_service_1.WrapperService, sidebar_right_service_1.SidebarRightService, header_service_1.HeaderService, footer_service_1.FooterService]
        }),
        __param(0, core_1.Optional()), __param(0, core_1.SkipSelf()),
        __metadata("design:paramtypes", [LayoutModule])
    ], LayoutModule);
    return LayoutModule;
}());
exports.LayoutModule = LayoutModule;
__export(require("./layout.service"));
__export(require("./layout.store"));
//# sourceMappingURL=layout.module.js.map