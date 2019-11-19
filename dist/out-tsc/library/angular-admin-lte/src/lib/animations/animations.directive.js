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
/*
 *
 */
var CollapseAnimationDirective = /** @class */ (function () {
    /**
     * @method constructor
     * @param elementRef [description]
     * @param ngZone     [description]
     * @param renderer2  [description]
     */
    function CollapseAnimationDirective(elementRef, ngZone, renderer2) {
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this.renderer2 = renderer2;
        this.firstStart = true;
        this.collapseAnimationDuration = 350;
        this.startEventEmitter = new core_1.EventEmitter();
        this.doneEventEmitter = new core_1.EventEmitter();
    }
    Object.defineProperty(CollapseAnimationDirective.prototype, "_isCollapsed", {
        set: function (value) {
            this.lastIsCollapsed = this.isCollapsed;
            this.isCollapsed = value;
            if (!this.firstStart) {
                this.emit('start');
                if (value) {
                    this.collapse();
                }
                else if (value === false) {
                    this.unCollapse();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @method ngOnInit
     */
    CollapseAnimationDirective.prototype.ngOnInit = function () {
        if (this.collapseAnimationDuration && this.collapseAnimationDuration !== 350) {
            this.renderer2.setStyle(this.elementRef.nativeElement, 'transition-duration', this.collapseAnimationDuration + "ms");
        }
        if (this.collapseAnimationTiming) {
            this.renderer2.setStyle(this.elementRef.nativeElement, 'transition-timing-function', this.collapseAnimationTiming);
        }
    };
    /**
     * @method ngAfterContentInit
     */
    CollapseAnimationDirective.prototype.ngAfterContentInit = function () {
        this.emit('start');
        if (this.isCollapsed) {
            this.renderer2.setStyle(this.elementRef.nativeElement, 'display', 'none');
            this.renderer2.addClass(this.elementRef.nativeElement, 'collapsing');
        }
        this.emit('done');
        this.firstStart = false;
        this.subscriptions();
    };
    /**
     * [ngOnDestroy description]
     * @method ngOnDestroy
     * @return [description]
     */
    CollapseAnimationDirective.prototype.ngOnDestroy = function () {
        if (this.listener) {
            this.listener();
        }
    };
    /**
     * [subscriptions description]
     * @method subscriptions
     */
    CollapseAnimationDirective.prototype.subscriptions = function () {
        var _this = this;
        this.ngZone.runOutsideAngular(function () {
            _this.listener = _this.renderer2.listen(_this.elementRef.nativeElement, 'transitionend', function () {
                if (!_this.isCollapsed) {
                    _this.renderer2.removeClass(_this.elementRef.nativeElement, 'un-collapse');
                    _this.renderer2.removeClass(_this.elementRef.nativeElement, 'collapsing');
                }
                else {
                    _this.renderer2.setStyle(_this.elementRef.nativeElement, 'display', 'none');
                }
                requestAnimationFrame(function () {
                    _this.renderer2.removeStyle(_this.elementRef.nativeElement, 'height');
                    _this.emit('done');
                    _this.transitioning = false;
                });
            });
        });
    };
    /**
     * [unCollapse description]
     * @method unCollapse
     */
    CollapseAnimationDirective.prototype.unCollapse = function () {
        this.transitioning = true;
        this.renderer2.addClass(this.elementRef.nativeElement, 'un-collapse');
        this.renderer2.removeStyle(this.elementRef.nativeElement, 'display');
        this.renderer2.setStyle(this.elementRef.nativeElement, 'height', this.elementRef.nativeElement.scrollHeight + "px");
    };
    /**
     * [collapse description]
     * @method collapse
     */
    CollapseAnimationDirective.prototype.collapse = function () {
        var _this = this;
        requestAnimationFrame(function () {
            if (!_this.transitioning) {
                _this.renderer2.setStyle(_this.elementRef.nativeElement, 'height', _this.elementRef.nativeElement.offsetHeight + "px");
                _this.renderer2.addClass(_this.elementRef.nativeElement, 'collapsing');
            }
            _this.transitioning = true;
            requestAnimationFrame(function () {
                _this.renderer2.setStyle(_this.elementRef.nativeElement, 'height', "0px");
            });
        });
    };
    CollapseAnimationDirective.prototype.emit = function (phaseName) {
        var event = {
            element: this.elementRef.nativeElement,
            fromState: this.lastIsCollapsed === undefined ? 'void' : this.lastIsCollapsed ? '1' : '0',
            phaseName: phaseName,
            toState: this.isCollapsed === undefined ? 'void' : this.isCollapsed ? '1' : '0',
            totalTime: this.collapseAnimationDuration,
            triggerName: 'mkCollapseAnimation'
        };
        if (phaseName === 'done') {
            this.doneEventEmitter.emit(event);
        }
        else if (phaseName === 'start') {
            this.startEventEmitter.emit(event);
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CollapseAnimationDirective.prototype, "collapseAnimationDuration", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CollapseAnimationDirective.prototype, "collapseAnimationTiming", void 0);
    __decorate([
        core_1.Input('mkCollapseAnimation'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], CollapseAnimationDirective.prototype, "_isCollapsed", null);
    __decorate([
        core_1.Output('mkCollapseAnimation.start'),
        __metadata("design:type", Object)
    ], CollapseAnimationDirective.prototype, "startEventEmitter", void 0);
    __decorate([
        core_1.Output('mkCollapseAnimation.done'),
        __metadata("design:type", Object)
    ], CollapseAnimationDirective.prototype, "doneEventEmitter", void 0);
    CollapseAnimationDirective = __decorate([
        core_1.Directive({
            selector: '[mkCollapseAnimation]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef,
            core_1.NgZone,
            core_1.Renderer2])
    ], CollapseAnimationDirective);
    return CollapseAnimationDirective;
}());
exports.CollapseAnimationDirective = CollapseAnimationDirective;
//# sourceMappingURL=animations.directive.js.map