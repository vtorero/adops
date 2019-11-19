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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var layout_store_1 = require("../layout.store");
var header_service_1 = require("./header.service");
var helpers_1 = require("../../helpers");
/**
 * Header Logo
 */
var HeaderLogoComponent = /** @class */ (function () {
    function HeaderLogoComponent() {
    }
    __decorate([
        core_1.ViewChild('templateRef'),
        __metadata("design:type", core_1.TemplateRef)
    ], HeaderLogoComponent.prototype, "templateRef", void 0);
    HeaderLogoComponent = __decorate([
        core_1.Component({
            selector: 'mk-layout-header-logo',
            template: '<ng-template #templateRef><ng-content></ng-content></ng-template>'
        })
    ], HeaderLogoComponent);
    return HeaderLogoComponent;
}());
exports.HeaderLogoComponent = HeaderLogoComponent;
/**
 * Header Logo Mini
 */
var HeaderLogoMiniComponent = /** @class */ (function () {
    function HeaderLogoMiniComponent() {
    }
    __decorate([
        core_1.ViewChild('templateRef'),
        __metadata("design:type", core_1.TemplateRef)
    ], HeaderLogoMiniComponent.prototype, "templateRef", void 0);
    HeaderLogoMiniComponent = __decorate([
        core_1.Component({
            selector: 'mk-layout-header-logo-mini',
            template: '<ng-template #templateRef><ng-content></ng-content></ng-template>'
        })
    ], HeaderLogoMiniComponent);
    return HeaderLogoMiniComponent;
}());
exports.HeaderLogoMiniComponent = HeaderLogoMiniComponent;
/**
 * Header
 */
var HeaderComponent = /** @class */ (function () {
    /**
     * @method constructor
     * @param layoutStore [description]
     * @param ngZone      [description]
     * @param renderer2   [description]
     * @param elementRef   [description]
     * @param headerService   [description]
     */
    function HeaderComponent(layoutStore, ngZone, renderer2, elementRef, headerService) {
        this.layoutStore = layoutStore;
        this.ngZone = ngZone;
        this.renderer2 = renderer2;
        this.elementRef = elementRef;
        this.headerService = headerService;
        this.listeners = [];
        this.subscriptions = [];
        this.isSidebarLeftToggle = true;
        this.isSidebarRightToggle = true;
        this.logoLink = '/';
    }
    /**
     * @method ngAfterViewInit
     */
    HeaderComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.headerService.elementRef = this.headerElement;
        if (this.sidebarLeftToggleElement) {
            this.subscriptions.push(this.layoutStore.isSidebarLeftCollapsed.subscribe(function (value) {
                _this.isSidebarLeftCollapsed = value;
            }));
            this.ngZone.runOutsideAngular(function () {
                _this.listeners.push(_this.renderer2.listen(_this.sidebarLeftToggleElement.nativeElement, 'click', function (event) {
                    event.preventDefault();
                    _this.layoutStore.sidebarLeftCollapsed(!_this.isSidebarLeftCollapsed);
                }));
            });
        }
        if (this.sidebarRightToggleElement) {
            this.subscriptions.push(this.layoutStore.isSidebarRightCollapsed.subscribe(function (value) {
                _this.isSidebarRightCollapsed = value;
            }));
            this.ngZone.runOutsideAngular(function () {
                _this.listeners.push(_this.renderer2.listen(_this.sidebarRightToggleElement.nativeElement, 'click', function (event) {
                    event.preventDefault();
                    _this.layoutStore.sidebarRightCollapsed(!_this.isSidebarRightCollapsed);
                }));
            });
        }
    };
    /**
     * @method ngOnDestroy
     */
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.listeners = helpers_1.removeListeners(this.listeners);
        this.subscriptions = helpers_1.removeSubscriptions(this.subscriptions);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "isSidebarLeftToggle", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "isSidebarRightToggle", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "logoLink", void 0);
    __decorate([
        core_1.ContentChild(HeaderLogoComponent),
        __metadata("design:type", HeaderLogoComponent)
    ], HeaderComponent.prototype, "headerLogoComponent", void 0);
    __decorate([
        core_1.ContentChild(HeaderLogoMiniComponent),
        __metadata("design:type", HeaderLogoMiniComponent)
    ], HeaderComponent.prototype, "headerLogoMiniComponent", void 0);
    __decorate([
        core_1.ViewChild('headerElement'),
        __metadata("design:type", core_1.ElementRef)
    ], HeaderComponent.prototype, "headerElement", void 0);
    __decorate([
        core_1.ViewChild('sidebarLeftToggleElement'),
        __metadata("design:type", core_1.ElementRef)
    ], HeaderComponent.prototype, "sidebarLeftToggleElement", void 0);
    __decorate([
        core_1.ViewChild('sidebarRightToggleElement'),
        __metadata("design:type", core_1.ElementRef)
    ], HeaderComponent.prototype, "sidebarRightToggleElement", void 0);
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'mk-layout-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.css']
        }),
        __metadata("design:paramtypes", [layout_store_1.LayoutStore,
            core_1.NgZone,
            core_1.Renderer2,
            core_1.ElementRef,
            header_service_1.HeaderService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map