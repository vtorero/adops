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
var box_directive_1 = require("./box.directive");
var helpers_1 = require("../helpers");
/*
 *
 */
var BoxComponent = /** @class */ (function () {
    /**
     * @method constructor
     * @param changeDetectorRef [description]
     * @param ngZone            [description]
     * @param renderer2         [description]
     */
    function BoxComponent(changeDetectorRef, ngZone, renderer2) {
        this.changeDetectorRef = changeDetectorRef;
        this.ngZone = ngZone;
        this.renderer2 = renderer2;
        this.remove = false;
        this.listeners = [];
        this.boxColor = 'default';
        this.buttonsStyleClass = 'btn btn-box-tool';
        this.contentStyleClass = 'box-content-wrapper';
        this.footerStyleClass = 'box-footer';
        this.headerBorder = true;
        this.headerStyleClass = 'box-header';
        this.isCollapsable = true;
        this.isCollapsed = false;
        this.isRemovable = true;
        this.isSolid = false;
        this.loadingStyleClass = 'fa fa-refresh fa-spin';
        this.styleClass = 'box';
        this.onCollapseDone = new core_1.EventEmitter();
        this.onCollapseStart = new core_1.EventEmitter();
    }
    /**
     * @method ngAfterViewInit
     */
    BoxComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.ngZone.runOutsideAngular(function () {
            if (_this.toggleButtonElement) {
                _this.listeners.push(_this.renderer2.listen(_this.toggleButtonElement.nativeElement, 'click', function () {
                    _this.isCollapsed = !_this.isCollapsed;
                    _this.changeDetectorRef.detectChanges();
                }));
            }
            if (_this.removeButtonElement) {
                _this.listeners.push(_this.renderer2.listen(_this.removeButtonElement.nativeElement, 'click', function () {
                    _this.remove = true;
                    _this.changeDetectorRef.detectChanges();
                }));
            }
        });
    };
    /**
     * @method ngOnDestroy
     */
    BoxComponent.prototype.ngOnDestroy = function () {
        helpers_1.removeListeners(this.listeners);
    };
    /**
     * [removedDone description]
     * @method removedDone
     * @param event [description]
     */
    BoxComponent.prototype.removedDone = function (event) {
        if (event.toState === '1') {
            this.removed = true;
        }
    };
    /**
     * [collapseStart description]
     * @method collapseStart
     * @param event [description]
     */
    BoxComponent.prototype.collapseStart = function (event) {
        if (event.fromState !== 'void') {
            this.isCollaping = true;
            this.onCollapseStart.emit(event);
        }
    };
    /**
     * [collapseDone description]
     * @method collapseDone
     * @param event [description]
     */
    BoxComponent.prototype.collapseDone = function (event) {
        if (event.fromState !== 'void') {
            this.isCollaping = false;
            this.onCollapseDone.emit(event);
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], BoxComponent.prototype, "boxColor", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], BoxComponent.prototype, "buttonsStyleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], BoxComponent.prototype, "contentStyleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], BoxComponent.prototype, "contentColor", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], BoxComponent.prototype, "footer", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], BoxComponent.prototype, "footerColor", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], BoxComponent.prototype, "footerStyleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], BoxComponent.prototype, "header", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], BoxComponent.prototype, "headerBorder", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], BoxComponent.prototype, "headerColor", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], BoxComponent.prototype, "headerStyleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], BoxComponent.prototype, "isCollapsable", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], BoxComponent.prototype, "isCollapsed", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], BoxComponent.prototype, "isLoading", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], BoxComponent.prototype, "isRemovable", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], BoxComponent.prototype, "isSolid", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], BoxComponent.prototype, "loadingColor", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], BoxComponent.prototype, "loadingStyleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], BoxComponent.prototype, "styleClass", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], BoxComponent.prototype, "onCollapseDone", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], BoxComponent.prototype, "onCollapseStart", void 0);
    __decorate([
        core_1.ContentChild(box_directive_1.BoxHeaderDirective),
        __metadata("design:type", box_directive_1.BoxHeaderDirective)
    ], BoxComponent.prototype, "boxHeaderDirective", void 0);
    __decorate([
        core_1.ContentChild(box_directive_1.BoxFooterDirective),
        __metadata("design:type", box_directive_1.BoxFooterDirective)
    ], BoxComponent.prototype, "boxFooterDirective", void 0);
    __decorate([
        core_1.ContentChild(box_directive_1.BoxContentDirective),
        __metadata("design:type", box_directive_1.BoxContentDirective)
    ], BoxComponent.prototype, "boxContentDirective", void 0);
    __decorate([
        core_1.ContentChild(box_directive_1.BoxToolsDirective),
        __metadata("design:type", box_directive_1.BoxToolsDirective)
    ], BoxComponent.prototype, "boxToolsDirective", void 0);
    __decorate([
        core_1.ViewChild('toggleButtonElement'),
        __metadata("design:type", Object)
    ], BoxComponent.prototype, "toggleButtonElement", void 0);
    __decorate([
        core_1.ViewChild('removeButtonElement'),
        __metadata("design:type", Object)
    ], BoxComponent.prototype, "removeButtonElement", void 0);
    BoxComponent = __decorate([
        core_1.Component({
            selector: 'mk-box',
            templateUrl: './box.component.html',
            styleUrls: ['./box.component.css'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef,
            core_1.NgZone,
            core_1.Renderer2])
    ], BoxComponent);
    return BoxComponent;
}());
exports.BoxComponent = BoxComponent;
//# sourceMappingURL=box.component.js.map