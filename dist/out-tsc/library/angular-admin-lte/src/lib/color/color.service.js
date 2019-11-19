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
var color_definition_1 = require("./color.definition");
/*
 *
 */
var ColorService = /** @class */ (function () {
    /**
     * @method constructor
     * @param renderer2 [description]
     * @param elementRef [description]
     */
    function ColorService(renderer2, elementRef) {
        this.renderer2 = renderer2;
        this.elementRef = elementRef;
        // this.init();
        // console.log(this);
    }
    /**
     * [setBackgroundColor description]
     * @method setBackgroundColor
     * @param  color              [description]
     * @param  condition          [description]
     * @param  property           [description]
     * @param  prefix             [description]
     */
    ColorService.prototype.setBackgroundColor = function (color, condition, property, prefix) {
        if (color && condition) {
            this.resetBackgroundColor();
            if (color_definition_1.colors[color]) {
                this.renderer2.addClass(this.elementRef.nativeElement, 'bg-color');
                this.currentBackgroundStyle = { property: property, color: color_definition_1.colors[color] };
                this.renderer2.setStyle(this.elementRef.nativeElement, property, color_definition_1.colors[color]);
            }
            else {
                this.renderer2.removeClass(this.elementRef.nativeElement, 'bg-color');
                if (color.indexOf('#') === 0 || color.indexOf('rgb') === 0) {
                    this.currentBackgroundStyle = { property: property, color: color };
                    this.renderer2.setStyle(this.elementRef.nativeElement, property, color);
                }
                else if (color_definition_1.colorsAliases.indexOf(color) !== -1) {
                    this.currentBackgroundClass = prefix ? prefix + "-" + color : color;
                    this.renderer2.addClass(this.elementRef.nativeElement, this.currentBackgroundClass);
                }
            }
        }
    };
    /**
     * [resetBackgroundColor description]
     * @method resetBackgroundColor
     */
    ColorService.prototype.resetBackgroundColor = function () {
        if (this.currentBackgroundStyle) {
            this.renderer2.removeStyle(this.elementRef.nativeElement, this.currentBackgroundStyle.property, this.currentBackgroundStyle.color);
        }
        else if (this.currentBackgroundClass) {
            this.renderer2.removeClass(this.elementRef.nativeElement, this.currentBackgroundClass);
        }
    };
    /**
     * [setFontColor description]
     * @method setFontColor
     * @param  color        [description]
     */
    ColorService.prototype.setFontColor = function (color) {
        if (color) {
            this.resetFontColor();
            if (color.startsWith('#') || color.startsWith('rgb')) {
                this.currentFontStyle = color;
                this.renderer2.setStyle(this.elementRef.nativeElement, 'color', color);
            }
            else {
                this.currentFontClass = "text-" + color;
                this.renderer2.addClass(this.elementRef.nativeElement, this.currentFontClass);
            }
        }
    };
    /**
     * [resetFontColor description]
     * @method resetFontColor
     * @return [description]
     */
    ColorService.prototype.resetFontColor = function () {
        if (this.currentFontStyle) {
            this.renderer2.removeStyle(this.elementRef.nativeElement, 'color', this.currentFontStyle);
        }
        else if (this.currentFontClass) {
            this.renderer2.removeClass(this.elementRef.nativeElement, this.currentFontClass);
        }
    };
    ColorService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_1.Renderer2,
            core_1.ElementRef])
    ], ColorService);
    return ColorService;
}());
exports.ColorService = ColorService;
//# sourceMappingURL=color.service.js.map