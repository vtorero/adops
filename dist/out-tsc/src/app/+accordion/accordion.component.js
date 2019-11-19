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
var Prism = require("prismjs");
var AccordionComponent = /** @class */ (function () {
    /**
     *
     * @param {NgZone} ngZone
     * @param {ChangeDetectorRef} changeDetectorRef
     */
    function AccordionComponent(ngZone, changeDetectorRef) {
        this.ngZone = ngZone;
        this.changeDetectorRef = changeDetectorRef;
        this.activeIndex = 0;
    }
    /**
     * @method ngAfterViewInit
     */
    AccordionComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        Prism.highlightAll();
        this.ngZone.runOutsideAngular(function () {
            setTimeout(function () {
                _this.activeIndex = [1, 2, 3];
                if (!_this.changeDetectorRef.destroyed) {
                    _this.changeDetectorRef.detectChanges();
                }
            }, 500);
        });
    };
    AccordionComponent = __decorate([
        core_1.Component({
            selector: 'app-accordion',
            templateUrl: './accordion.component.html',
            styleUrls: ['./accordion.component.css']
        }),
        __metadata("design:paramtypes", [core_1.NgZone,
            core_1.ChangeDetectorRef])
    ], AccordionComponent);
    return AccordionComponent;
}());
exports.AccordionComponent = AccordionComponent;
//# sourceMappingURL=accordion.component.js.map