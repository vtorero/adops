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
var color_service_1 = require("./color.service");
var BackgroundColorDirective = /** @class */ (function () {
    /**
     * @method constructor
     * @param elementRef   [description]
     * @param renderer2    [description]
     * @param colorService [description]
     */
    function BackgroundColorDirective(elementRef, renderer2, colorService) {
        this.elementRef = elementRef;
        this.renderer2 = renderer2;
        this.colorService = colorService;
        this.condition = true;
    }
    Object.defineProperty(BackgroundColorDirective.prototype, "color", {
        set: function (color) {
            this.colorService.setBackgroundColor(color, this.condition, this.property, this.prefix);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input('mkColorCondition'),
        __metadata("design:type", Object)
    ], BackgroundColorDirective.prototype, "condition", void 0);
    __decorate([
        core_1.Input('mkColorPrefix'),
        __metadata("design:type", String)
    ], BackgroundColorDirective.prototype, "prefix", void 0);
    __decorate([
        core_1.Input('mkColorProperty'),
        __metadata("design:type", String)
    ], BackgroundColorDirective.prototype, "property", void 0);
    __decorate([
        core_1.Input('mkColor'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], BackgroundColorDirective.prototype, "color", null);
    BackgroundColorDirective = __decorate([
        core_1.Directive({
            selector: '[mkColor]',
            providers: [color_service_1.ColorService]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef,
            core_1.Renderer2,
            color_service_1.ColorService])
    ], BackgroundColorDirective);
    return BackgroundColorDirective;
}());
exports.BackgroundColorDirective = BackgroundColorDirective;
var ColorDirective = /** @class */ (function () {
    /**
     * @method constructor
     * @param elementRef   [description]
     * @param renderer2    [description]
     * @param colorService [description]
     */
    function ColorDirective(elementRef, renderer2, colorService) {
        this.elementRef = elementRef;
        this.renderer2 = renderer2;
        this.colorService = colorService;
    }
    Object.defineProperty(ColorDirective.prototype, "color", {
        set: function (color) {
            this.colorService.setFontColor(color);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input('mkFontColor'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ColorDirective.prototype, "color", null);
    ColorDirective = __decorate([
        core_1.Directive({
            selector: '[mkFontColor]',
            providers: [color_service_1.ColorService]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef,
            core_1.Renderer2,
            color_service_1.ColorService])
    ], ColorDirective);
    return ColorDirective;
}());
exports.ColorDirective = ColorDirective;
//# sourceMappingURL=color.directive.js.map