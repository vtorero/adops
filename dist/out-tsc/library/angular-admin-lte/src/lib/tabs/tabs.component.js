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
var tabs_directive_1 = require("./tabs.directive");
var helpers_1 = require("../helpers");
// @TODO Vertical tabs
/*
 *
 */
var TabHeaderComponent = /** @class */ (function () {
    function TabHeaderComponent() {
    }
    __decorate([
        core_1.ViewChild('templateRef'),
        __metadata("design:type", core_1.TemplateRef)
    ], TabHeaderComponent.prototype, "templateRef", void 0);
    TabHeaderComponent = __decorate([
        core_1.Component({
            selector: 'mk-tab-header',
            template: '<ng-template #templateRef><ng-content></ng-content></ng-template>',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        })
    ], TabHeaderComponent);
    return TabHeaderComponent;
}());
exports.TabHeaderComponent = TabHeaderComponent;
/*
 *
 */
var TabContentComponent = /** @class */ (function () {
    function TabContentComponent() {
    }
    __decorate([
        core_1.ViewChild('templateRef'),
        __metadata("design:type", core_1.TemplateRef)
    ], TabContentComponent.prototype, "templateRef", void 0);
    TabContentComponent = __decorate([
        core_1.Component({
            selector: 'mk-tab-content',
            template: '<ng-template #templateRef><ng-content></ng-content></ng-template>',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        })
    ], TabContentComponent);
    return TabContentComponent;
}());
exports.TabContentComponent = TabContentComponent;
/*
 *
 */
var TabComponent = /** @class */ (function () {
    function TabComponent() {
        this.isActive = false;
    }
    /**
     * @method ngOnInit
     */
    TabComponent.prototype.ngOnInit = function () {
        if (this.tabContentComponent) {
            this.contentTemplateRef = this.tabContentComponent.templateRef;
        }
        else {
            this.contentTemplateRef = this.templateRef;
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], TabComponent.prototype, "header", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], TabComponent.prototype, "isDisabled", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], TabComponent.prototype, "tabColor", void 0);
    __decorate([
        core_1.ViewChild('templateRef'),
        __metadata("design:type", core_1.TemplateRef)
    ], TabComponent.prototype, "templateRef", void 0);
    __decorate([
        core_1.ContentChild(TabHeaderComponent),
        __metadata("design:type", TabHeaderComponent)
    ], TabComponent.prototype, "tabHeaderComponent", void 0);
    __decorate([
        core_1.ContentChild(TabContentComponent),
        __metadata("design:type", TabContentComponent)
    ], TabComponent.prototype, "tabContentComponent", void 0);
    TabComponent = __decorate([
        core_1.Component({
            selector: 'mk-tab',
            template: '<ng-template #templateRef><ng-content></ng-content></ng-template>',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        })
    ], TabComponent);
    return TabComponent;
}());
exports.TabComponent = TabComponent;
/*
 *
 */
var TabsHeaderComponent = /** @class */ (function () {
    function TabsHeaderComponent() {
    }
    __decorate([
        core_1.ViewChild('templateRef'),
        __metadata("design:type", core_1.TemplateRef)
    ], TabsHeaderComponent.prototype, "templateRef", void 0);
    TabsHeaderComponent = __decorate([
        core_1.Component({
            selector: 'mk-tabs-header',
            template: '<ng-template #templateRef><ng-content></ng-content></ng-template>',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        })
    ], TabsHeaderComponent);
    return TabsHeaderComponent;
}());
exports.TabsHeaderComponent = TabsHeaderComponent;
/*
 *
 */
var TabsComponent = /** @class */ (function () {
    /**
     * @method constructor
     * @param changeDetectorRef [description]
     * @param ngZone            [description]
     * @param renderer2         [description]
     */
    function TabsComponent(changeDetectorRef, ngZone, renderer2) {
        this.changeDetectorRef = changeDetectorRef;
        this.ngZone = ngZone;
        this.renderer2 = renderer2;
        this.listeners = [];
        this.subscriptions = [];
        this.headerStyleClass = 'header pull-left';
        this.navStyleClass = 'nav nav-tabs';
        this.contentStyleClass = 'tab-content';
        this.styleClass = 'nav-tabs-custom';
        this.onClose = new core_1.EventEmitter();
        this.onOpen = new core_1.EventEmitter();
    }
    Object.defineProperty(TabsComponent.prototype, "activeTabIndex", {
        set: function (index) {
            this.activatedTabIndex = index;
            this.changeDetectorRef.detectChanges();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @method ngAfterViewInit
     */
    TabsComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        // Set tab index on load.
        this.setTabIndex();
        // Update tab index if tabs is updated.
        this.subscriptions.push(this.tabs.changes.subscribe(function () {
            _this.setTabIndex();
        }));
        // Open tab on load.
        this.openTabIndex();
    };
    /**
     * @method ngAfterViewInit
     */
    TabsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // Set tab toggles on load.
        this.setTabsToggle();
        // Update tab toggles if tabs is updated.
        this.subscriptions.push(this.tabToggleDirectives.changes.subscribe(function () {
            _this.setTabsToggle();
        }));
    };
    /**
     * @method ngOnChanges
     * @param changes [description]
     */
    TabsComponent.prototype.ngOnChanges = function (changes) {
        if (changes.activeTabIndex) {
            this.openTabIndex();
        }
    };
    /**
     * @method ngOnDestroy
     */
    TabsComponent.prototype.ngOnDestroy = function () {
        helpers_1.removeListeners(this.listeners);
        helpers_1.removeSubscriptions(this.subscriptions);
    };
    /**
     * [toggleTab description]
     * @method toggleTab
     */
    TabsComponent.prototype.openTabIndex = function () {
        var _this = this;
        if (this.tabs) {
            this.tabs.forEach(function (tab) {
                if (_this.activatedTabIndex === tab.index || (_this.activatedTabIndex === undefined && tab.index === 0)) {
                    tab.isActive = true;
                    _this.onOpen.emit({ index: tab.index });
                    _this.changeDetectorRef.detectChanges();
                }
                else if (tab.isActive) {
                    tab.isActive = false;
                    _this.onClose.emit({ index: tab.index });
                    _this.changeDetectorRef.detectChanges();
                }
            });
        }
    };
    /**
     * [openTab description]
     * @method openTab
     * @param event     [description]
     * @param tabToOpen [description]
     */
    TabsComponent.prototype.openTab = function (event, tabToOpen) {
        var _this = this;
        event.preventDefault();
        tabToOpen.isActive = true;
        this.onOpen.emit({ event: event, index: tabToOpen.index });
        this.tabs.forEach(function (tab) {
            if (tab.isActive && tabToOpen !== tab) {
                tab.isActive = false;
                _this.onClose.emit({ event: event, index: tab.index });
            }
        });
    };
    /**
     * [setTabIndex description]
     * @method setTabIndex
     */
    TabsComponent.prototype.setTabIndex = function () {
        this.tabs.forEach(function (tab, index) {
            tab.index = index;
        });
        this.changeDetectorRef.detectChanges();
    };
    /**
     * [setTabsToggle description]
     * @method setTabsToggle
     */
    TabsComponent.prototype.setTabsToggle = function () {
        var _this = this;
        this.listeners = helpers_1.removeListeners(this.listeners);
        this.ngZone.runOutsideAngular(function () {
            _this.tabToggleDirectives.forEach(function (tabToggle) {
                _this.listeners.push(_this.renderer2.listen(tabToggle.elementRef.nativeElement, 'click', function (event) {
                    _this.openTab(event, tabToggle.tabComponent);
                    _this.changeDetectorRef.detectChanges();
                }));
            });
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], TabsComponent.prototype, "activeTabIndex", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], TabsComponent.prototype, "header", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], TabsComponent.prototype, "headerStyleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], TabsComponent.prototype, "navStyleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], TabsComponent.prototype, "contentStyleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], TabsComponent.prototype, "styleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], TabsComponent.prototype, "tabsColor", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], TabsComponent.prototype, "onClose", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], TabsComponent.prototype, "onOpen", void 0);
    __decorate([
        core_1.ContentChild(TabsHeaderComponent),
        __metadata("design:type", TabsHeaderComponent)
    ], TabsComponent.prototype, "tabsHeaderComponent", void 0);
    __decorate([
        core_1.ContentChildren(TabComponent),
        __metadata("design:type", core_1.QueryList)
    ], TabsComponent.prototype, "tabs", void 0);
    __decorate([
        core_1.ViewChildren(tabs_directive_1.TabToggleDirective),
        __metadata("design:type", core_1.QueryList)
    ], TabsComponent.prototype, "tabToggleDirectives", void 0);
    TabsComponent = __decorate([
        core_1.Component({
            selector: 'mk-tabs',
            templateUrl: './tabs.component.html',
            styleUrls: ['./tabs.component.css'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef,
            core_1.NgZone,
            core_1.Renderer2])
    ], TabsComponent);
    return TabsComponent;
}());
exports.TabsComponent = TabsComponent;
//# sourceMappingURL=tabs.component.js.map