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
var accordion_directive_1 = require("./accordion.directive");
var helpers_1 = require("../helpers");
/*
 *
 */
var AccordionHeaderComponent = /** @class */ (function () {
    function AccordionHeaderComponent() {
    }
    __decorate([
        core_1.ViewChild('templateRef'),
        __metadata("design:type", core_1.TemplateRef)
    ], AccordionHeaderComponent.prototype, "templateRef", void 0);
    AccordionHeaderComponent = __decorate([
        core_1.Component({
            selector: 'mk-accordion-header',
            template: '<ng-template #templateRef><ng-content></ng-content></ng-template>'
        })
    ], AccordionHeaderComponent);
    return AccordionHeaderComponent;
}());
exports.AccordionHeaderComponent = AccordionHeaderComponent;
/*
 *
 */
var AccordionContentComponent = /** @class */ (function () {
    function AccordionContentComponent() {
    }
    __decorate([
        core_1.ViewChild('templateRef'),
        __metadata("design:type", core_1.TemplateRef)
    ], AccordionContentComponent.prototype, "templateRef", void 0);
    AccordionContentComponent = __decorate([
        core_1.Component({
            selector: 'mk-accordion-content',
            template: '<ng-template #templateRef><ng-content></ng-content></ng-template>'
        })
    ], AccordionContentComponent);
    return AccordionContentComponent;
}());
exports.AccordionContentComponent = AccordionContentComponent;
/*
 *
 */
var AccordionComponent = /** @class */ (function () {
    function AccordionComponent() {
        this.contentStyleClass = 'box-body';
        this.headerStyleClass = 'box-header with-border';
    }
    /**
     * @method ngOnInit
     */
    AccordionComponent.prototype.ngOnInit = function () {
        this.headerStyleColor = this.headerColor;
        if (!this.header && !this.accordionHeaderComponent) {
            throw new Error('Attribute "header" OR Component "mk-+accordion-header" is required for component "mk-+accordion"');
        }
        if (this.accordionContentComponent) {
            this.contentTemplateRef = this.accordionContentComponent.templateRef;
        }
        else {
            this.contentTemplateRef = this.templateRef;
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], AccordionComponent.prototype, "borderColor", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], AccordionComponent.prototype, "contentColor", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], AccordionComponent.prototype, "contentStyleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], AccordionComponent.prototype, "header", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], AccordionComponent.prototype, "headerColor", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], AccordionComponent.prototype, "headerColorHover", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], AccordionComponent.prototype, "headerStyleClass", void 0);
    __decorate([
        core_1.ContentChild(AccordionHeaderComponent),
        __metadata("design:type", AccordionHeaderComponent)
    ], AccordionComponent.prototype, "accordionHeaderComponent", void 0);
    __decorate([
        core_1.ContentChild(AccordionContentComponent),
        __metadata("design:type", AccordionContentComponent)
    ], AccordionComponent.prototype, "accordionContentComponent", void 0);
    __decorate([
        core_1.ViewChild('templateRef'),
        __metadata("design:type", core_1.TemplateRef)
    ], AccordionComponent.prototype, "templateRef", void 0);
    AccordionComponent = __decorate([
        core_1.Component({
            selector: 'mk-accordion',
            template: '<ng-template #templateRef><ng-content></ng-content></ng-template>'
        })
    ], AccordionComponent);
    return AccordionComponent;
}());
exports.AccordionComponent = AccordionComponent;
/*
 *
 */
var AccordionGroupComponent = /** @class */ (function () {
    /**
     * @method constructor
     * @param changeDetectorRef [description]
     * @param ngZone            [description]
     * @param renderer2         [description]
     */
    function AccordionGroupComponent(changeDetectorRef, ngZone, renderer2) {
        this.changeDetectorRef = changeDetectorRef;
        this.ngZone = ngZone;
        this.renderer2 = renderer2;
        this.activeIndex = [0];
        // @TODO change types for listeners to all files
        this.listeners = [];
        // @TODO change types for subscriptions to all files
        this.subscriptions = [];
        this.styleClass = 'box-group';
        this.onCollapseStart = new core_1.EventEmitter();
        this.onCollapseDone = new core_1.EventEmitter();
    }
    AccordionGroupComponent_1 = AccordionGroupComponent;
    Object.defineProperty(AccordionGroupComponent.prototype, "_activeIndex", {
        set: function (value) {
            this.activeIndex = value instanceof Array ? value : [value];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * [headerMouseLeave description]
     * @method headerMouseLeave
     * @param accordion [description]
     */
    AccordionGroupComponent.headerMouseLeave = function (accordion) {
        accordion.headerStyleColor = accordion.headerColor;
    };
    /**
     * [headerMouseEnter description]
     * @method headerMouseEnter
     * @param accordion [description]
     */
    AccordionGroupComponent.headerMouseEnter = function (accordion) {
        if (accordion.headerColorHover) {
            accordion.headerStyleColor = accordion.headerColorHover;
        }
    };
    /**
     * @method ngAfterViewInit
     */
    AccordionGroupComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.setAccordionsIndex();
        this.updateAccordionIsCollapsed();
        this.subscriptions.push(this.accordionComponents.changes.subscribe(function () {
            _this.setAccordionsIndex();
        }));
    };
    /**
     * @method ngAfterViewInit
     */
    AccordionGroupComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.setAccordionsToggle();
        this.subscriptions.push(this.accordionToggleDirectives.changes.subscribe(function () {
            _this.setAccordionsToggle();
        }));
    };
    /**
     * [ngOnChanges description]
     * @method ngOnChanges
     * @param changes [description]
     * @return [description]
     */
    AccordionGroupComponent.prototype.ngOnChanges = function (changes) {
        if (changes._activeIndex.firstChange === false) {
            this.updateAccordionIsCollapsed();
        }
    };
    /**
     * @method ngOnDestroy
     */
    AccordionGroupComponent.prototype.ngOnDestroy = function () {
        helpers_1.removeListeners(this.listeners);
        helpers_1.removeSubscriptions(this.subscriptions);
    };
    /**
     * [toggleAccordion description]
     * @method toggleAccordion
     * @param event       [description]
     * @param toggleIndex [description]
     */
    AccordionGroupComponent.prototype.toggleAccordion = function (event, toggleIndex) {
        event.preventDefault();
        var indexOf = this.activeIndex['indexOf'](toggleIndex);
        if (indexOf === -1) {
            if (this.isMultiple) {
                this.activeIndex.push(toggleIndex);
            }
            else {
                this.activeIndex = [toggleIndex];
            }
        }
        else {
            if (this.isMultiple) {
                this.activeIndex.splice(indexOf, 1);
            }
            else {
                this.activeIndex = [];
            }
        }
        this.updateAccordionIsCollapsed();
    };
    /**
     * [collapseStart description]
     * @method collapseStart
     * @param event [description]
     * @param accordion [description]
     */
    AccordionGroupComponent.prototype.collapseStart = function (event, accordion) {
        accordion.isCollapsing = true;
        this.onCollapseStart.emit({ animationEvent: event, index: accordion.index });
    };
    /**
     * [collapseDone description]
     * @method collapseDone
     * @param event [description]
     * @param accordion [description]
     */
    AccordionGroupComponent.prototype.collapseDone = function (event, accordion) {
        accordion.isCollapsing = false;
        this.onCollapseDone.emit({ animationEvent: event, index: accordion.index });
    };
    /**
     * [setAccordionsIndex description]
     * @method setAccordionsIndex
     */
    AccordionGroupComponent.prototype.setAccordionsIndex = function () {
        this.accordionComponents.forEach(function (accordion, index) {
            accordion.index = index;
        });
    };
    /**
     * [setAccordionsToggle description]
     * @method setAccordionsToggle
     */
    AccordionGroupComponent.prototype.setAccordionsToggle = function () {
        var _this = this;
        this.listeners = helpers_1.removeListeners(this.listeners);
        this.ngZone.runOutsideAngular(function () {
            _this.accordionToggleDirectives.forEach(function (accordionToggle) {
                _this.listeners.push(_this.renderer2.listen(accordionToggle.elementRef.nativeElement, 'click', function (event) {
                    _this.toggleAccordion(event, accordionToggle.accordionComponent.index);
                    _this.changeDetectorRef.detectChanges();
                }));
                _this.listeners.push(_this.renderer2.listen(accordionToggle.elementRef.nativeElement, 'mouseenter', function () {
                    AccordionGroupComponent_1.headerMouseEnter(accordionToggle.accordionComponent);
                    _this.changeDetectorRef.detectChanges();
                }));
                _this.listeners.push(_this.renderer2.listen(accordionToggle.elementRef.nativeElement, 'mouseleave', function () {
                    AccordionGroupComponent_1.headerMouseLeave(accordionToggle.accordionComponent);
                    _this.changeDetectorRef.detectChanges();
                }));
            });
        });
    };
    /**
     * [updateAccordionIsCollapsed description]
     * @method updateAccordionIsCollapsed
     */
    AccordionGroupComponent.prototype.updateAccordionIsCollapsed = function () {
        var _this = this;
        this.accordionComponents.forEach(function (accordion, index) {
            accordion.isCollapsed = _this.activeIndex.indexOf(index) === -1;
        });
    };
    var AccordionGroupComponent_1;
    __decorate([
        core_1.Input('activeIndex'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], AccordionGroupComponent.prototype, "_activeIndex", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], AccordionGroupComponent.prototype, "isMultiple", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], AccordionGroupComponent.prototype, "styleClass", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], AccordionGroupComponent.prototype, "onCollapseStart", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], AccordionGroupComponent.prototype, "onCollapseDone", void 0);
    __decorate([
        core_1.ContentChildren(AccordionComponent),
        __metadata("design:type", core_1.QueryList)
    ], AccordionGroupComponent.prototype, "accordionComponents", void 0);
    __decorate([
        core_1.ViewChildren(accordion_directive_1.AccordionToggleDirective),
        __metadata("design:type", core_1.QueryList)
    ], AccordionGroupComponent.prototype, "accordionToggleDirectives", void 0);
    AccordionGroupComponent = AccordionGroupComponent_1 = __decorate([
        core_1.Component({
            selector: 'mk-accordion-group',
            templateUrl: './accordion.component.html'
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef,
            core_1.NgZone,
            core_1.Renderer2])
    ], AccordionGroupComponent);
    return AccordionGroupComponent;
}());
exports.AccordionGroupComponent = AccordionGroupComponent;
//# sourceMappingURL=accordion.component.js.map