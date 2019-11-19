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
var helpers_1 = require("../helpers");
/*
 *
 */
var AlertComponent = /** @class */ (function () {
    /**
     * @method constructor
     * @param  changeDetectorRef [description]
     * @param  ngZone            [description]
     * @param  renderer2         [description]
     * @param  viewContainerRef  [description]
     */
    function AlertComponent(changeDetectorRef, ngZone, renderer2, viewContainerRef) {
        this.changeDetectorRef = changeDetectorRef;
        this.ngZone = ngZone;
        this.renderer2 = renderer2;
        this.viewContainerRef = viewContainerRef;
        this.dismissibleClass = 'alert-dismissible';
        this.isDismissible = true;
        this.remove = false;
        this.type = 'alert';
        this.listeners = [];
        this.backgroundColor = 'danger';
        this.styleClass = '';
        this.onCollapseStart = new core_1.EventEmitter();
        this.onCollapseDone = new core_1.EventEmitter();
    }
    Object.defineProperty(AlertComponent.prototype, "callout", {
        set: function (value) {
            this.type = value ? 'callout' : 'alert';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlertComponent.prototype, "_isDismissible", {
        set: function (value) {
            this.isDismissible = value;
            if (value) {
                this.dismissibleClass = this.type + "-dismissible";
            }
            else {
                this.dismissibleClass = '';
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @method ngOnInit
     */
    AlertComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.ngZone.runOutsideAngular(function () {
            if (_this.dismissOnTimeout) {
                setTimeout(function () {
                    if (!_this.changeDetectorRef.destroyed) {
                        _this.remove = true;
                        _this.changeDetectorRef.detectChanges();
                    }
                }, _this.dismissOnTimeout);
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
     * @method ngOnDesroy
     */
    AlertComponent.prototype.ngOnDestroy = function () {
        helpers_1.removeListeners(this.listeners);
    };
    /**
     * [collapseStart description]
     * @method collapseStart
     * @param event [description]
     */
    AlertComponent.prototype.collapseStart = function (event) {
        this.onCollapseStart.emit(event);
    };
    /**
     * [collapseDone description]
     * @method collapseDone
     * @param event [description]
     */
    AlertComponent.prototype.collapseDone = function (event) {
        if (event.toState === '1') {
            this.listeners = helpers_1.removeListeners(this.listeners);
            this.removed = true;
            this.viewContainerRef.clear();
            this.changeDetectorRef.detectChanges();
        }
        this.onCollapseDone.emit(event);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], AlertComponent.prototype, "backgroundColor", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], AlertComponent.prototype, "callout", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], AlertComponent.prototype, "color", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], AlertComponent.prototype, "dismissOnTimeout", void 0);
    __decorate([
        core_1.Input('isDismissible'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], AlertComponent.prototype, "_isDismissible", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], AlertComponent.prototype, "styleClass", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], AlertComponent.prototype, "onCollapseStart", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], AlertComponent.prototype, "onCollapseDone", void 0);
    __decorate([
        core_1.ViewChild('removeButtonElement'),
        __metadata("design:type", core_1.ElementRef)
    ], AlertComponent.prototype, "removeButtonElement", void 0);
    __decorate([
        core_1.ViewChild('containerElementRef', { read: core_1.ViewContainerRef }),
        __metadata("design:type", core_1.ViewContainerRef)
    ], AlertComponent.prototype, "containerElementRef", void 0);
    AlertComponent = __decorate([
        core_1.Component({
            selector: 'mk-alert',
            templateUrl: './alert.component.html',
            styleUrls: ['./alert.component.css'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef,
            core_1.NgZone,
            core_1.Renderer2,
            core_1.ViewContainerRef])
    ], AlertComponent);
    return AlertComponent;
}());
exports.AlertComponent = AlertComponent;
//# sourceMappingURL=alert.component.js.map