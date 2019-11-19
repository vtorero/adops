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
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var layout_store_1 = require("../layout.store");
var routing_service_1 = require("../../services/routing.service");
var sidebar_right_service_1 = require("../sidebar-right/sidebar-right.service");
var header_service_1 = require("../header/header.service");
var footer_service_1 = require("../footer/footer.service");
var helpers_1 = require("../../helpers");
var ContentComponent = /** @class */ (function () {
    /**
     * @method constructor
     * @param layoutStore
     * @param routingService
     * @param titleService
     * @param elementRef
     * @param changeDetectorRef
     * @param sidebarRightService
     * @param headerService
     * @param footerService
     * @param router
     */
    function ContentComponent(layoutStore, routingService, titleService, elementRef, changeDetectorRef, sidebarRightService, headerService, footerService, router) {
        this.layoutStore = layoutStore;
        this.routingService = routingService;
        this.titleService = titleService;
        this.elementRef = elementRef;
        this.changeDetectorRef = changeDetectorRef;
        this.sidebarRightService = sidebarRightService;
        this.headerService = headerService;
        this.footerService = footerService;
        this.router = router;
        this.subscriptions = [];
    }
    /**
     * @method ngOnInit
     */
    ContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleTag = this.titleService.getTitle();
        this.subscriptions.push(this.routingService.onChange.subscribe(function (value) {
            if (value && value[value.length - 1]) {
                _this.titleService.setTitle(_this.getTitle(value[value.length - 1].data['title']));
                _this.header = value[value.length - 1].data['title'];
                _this.description = value[value.length - 1].data['description'];
            }
            _this.changeDetectorRef.markForCheck();
        }));
        this.subscriptions.push(this.router.events.subscribe(function (routeEvent) {
            if (routeEvent instanceof router_1.NavigationStart) {
                _this.navigationEnd = false;
            }
            if (routeEvent instanceof router_1.NavigationEnd) {
                _this.navigationEnd = true;
                _this.setContentMinHeight();
            }
        }));
        this.subscriptions.push(this.layoutStore.sidebarLeftElementHeight.subscribe(function (value) {
            _this.sidebarLeftHeight = value;
            _this.setContentMinHeight();
        }));
        this.subscriptions.push(this.layoutStore.layout.subscribe(function (value) {
            _this.layout = value;
            _this.setContentMinHeight();
        }));
        this.subscriptions.push(this.layoutStore.windowInnerHeight.subscribe(function (value) {
            _this.windowInnerHeight = value;
            _this.setContentMinHeight();
        }));
        this.heightStyle = this.windowInnerHeight;
    };
    /**
     * @method ngOnDestroy
     */
    ContentComponent.prototype.ngOnDestroy = function () {
        this.subscriptions = helpers_1.removeSubscriptions(this.subscriptions);
    };
    Object.defineProperty(ContentComponent.prototype, "scrollHeight", {
        /**
         * [scrollHeight description]
         * @method scrollHeight
         * @return [description]
         */
        get: function () {
            return this.contentInnerElement.nativeElement.scrollHeight;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * [getTitle description]
     * @method getTitle
     * @param title [description]
     * @return [description]
     */
    ContentComponent.prototype.getTitle = function (title) {
        return title ? title + " - " + this.titleTag : this.titleTag;
    };
    /**
     * [setMinHeight description]
     * @method setMinHeight
     */
    ContentComponent.prototype.setContentMinHeight = function () {
        if (this.navigationEnd) {
            var heightStyle = void 0;
            var headerFooterOffsetHeight = this.headerService.offsetHeight + this.footerService.offsetHeight;
            if (this.layout === 'fixed') {
                heightStyle = this.windowInnerHeight - this.footerService.offsetHeight;
            }
            else {
                var sidebarRight = this.sidebarRightService.scrollHeight ?
                    this.sidebarRightService.scrollHeight - this.headerService.offsetHeight : 0;
                heightStyle = Math.max(this.windowInnerHeight - headerFooterOffsetHeight, this.sidebarLeftHeight - this.headerService.offsetHeight, sidebarRight);
            }
            if (heightStyle && heightStyle !== this.heightStyle) {
                if (this.scrollHeight > heightStyle) {
                    heightStyle = null;
                }
                this.heightStyle = heightStyle;
                this.changeDetectorRef.detectChanges();
            }
        }
    };
    __decorate([
        core_1.ViewChild('contentInnerElement'),
        __metadata("design:type", core_1.ElementRef)
    ], ContentComponent.prototype, "contentInnerElement", void 0);
    ContentComponent = __decorate([
        core_1.Component({
            selector: 'mk-layout-content',
            templateUrl: './content.component.html',
            styleUrls: ['./content.component.css'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [layout_store_1.LayoutStore,
            routing_service_1.RoutingService,
            platform_browser_1.Title,
            core_1.ElementRef,
            core_1.ChangeDetectorRef,
            sidebar_right_service_1.SidebarRightService,
            header_service_1.HeaderService,
            footer_service_1.FooterService,
            router_1.Router])
    ], ContentComponent);
    return ContentComponent;
}());
exports.ContentComponent = ContentComponent;
//# sourceMappingURL=content.component.js.map