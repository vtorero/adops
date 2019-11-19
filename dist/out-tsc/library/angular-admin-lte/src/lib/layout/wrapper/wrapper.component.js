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
var helpers_1 = require("../../helpers");
var layout_store_1 = require("../layout.store");
var wrapper_service_1 = require("./wrapper.service");
var WrapperComponent = /** @class */ (function () {
    function WrapperComponent(elementRef, renderer2, layoutStore, wrapperService, ngZone) {
        this.elementRef = elementRef;
        this.renderer2 = renderer2;
        this.layoutStore = layoutStore;
        this.wrapperService = wrapperService;
        this.ngZone = ngZone;
        this.listeners = [];
        this.subscriptions = [];
    }
    /**
     * [ngOnInit description]
     * @method ngOnInit
     */
    WrapperComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.layoutStore.setWindowInnerHeight(window.innerHeight);
        this.layoutStore.setWindowInnerWidth(window.innerWidth);
        this.wrapperService.wrapperElementRef = this.elementRef;
        this.subscriptions.push(this.layoutStore.wrapperClasses.subscribe(function (value) {
            _this.classes = value ? value : null;
        }));
        this.ngZone.runOutsideAngular(function () {
            _this.listeners.push(_this.renderer2.listen('window', 'resize', helpers_1.throttle(function () {
                _this.layoutStore.setWindowInnerHeight(window.innerHeight);
                _this.layoutStore.setWindowInnerWidth(window.innerWidth);
            }, 250)));
        });
        this.subscriptions.push(this.layoutStore.layout.subscribe(function (value) {
            value === 'fixed' ? _this.renderer2.addClass(_this.elementRef.nativeElement, 'fixed') :
                _this.renderer2.removeClass(_this.elementRef.nativeElement, 'fixed');
            value === 'boxed' ? _this.renderer2.addClass(_this.elementRef.nativeElement, 'layout-boxed') :
                _this.renderer2.removeClass(_this.elementRef.nativeElement, 'layout-boxed');
        }));
        this.subscriptions.push(this.layoutStore.skin.subscribe(function (value) {
            if (value) {
                if (_this.skin && _this.skin !== value) {
                    _this.renderer2.removeClass(_this.elementRef.nativeElement, "skin-" + _this.skin);
                }
                _this.skin = value;
                _this.renderer2.addClass(_this.elementRef.nativeElement, "skin-" + _this.skin);
            }
        }));
    };
    /**
     * @method ngOnDestroy
     */
    WrapperComponent.prototype.ngOnDestroy = function () {
        this.subscriptions = helpers_1.removeSubscriptions(this.subscriptions);
        this.listeners = helpers_1.removeListeners(this.listeners);
    };
    WrapperComponent = __decorate([
        core_1.Component({
            selector: 'mk-layout-wrapper',
            templateUrl: './wrapper.component.html',
            styleUrls: ['./wrapper.component.css']
        }),
        __metadata("design:paramtypes", [core_1.ElementRef,
            core_1.Renderer2,
            layout_store_1.LayoutStore,
            wrapper_service_1.WrapperService,
            core_1.NgZone])
    ], WrapperComponent);
    return WrapperComponent;
}());
exports.WrapperComponent = WrapperComponent;
//# sourceMappingURL=wrapper.component.js.map