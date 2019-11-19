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
var forms_1 = require("@angular/forms");
var rxjs_1 = require("rxjs");
var color_service_1 = require("../../color/color.service");
var class_service_1 = require("../../services/class.service");
// @TODO onFocus Color
var InputTextDirective = /** @class */ (function () {
    /**
     * @method constructor
     * @param  elementRef   [description]
     * @param  renderer2    [description]
     * @param  ngControl    [description]
     * @param  colorService [description]
     * @param  classService [description]
     */
    function InputTextDirective(elementRef, renderer2, ngControl, colorService, classService) {
        this.elementRef = elementRef;
        this.renderer2 = renderer2;
        this.ngControl = ngControl;
        this.colorService = colorService;
        this.classService = classService;
        this.defaultClass = 'form-control';
        this._onKeyUp = new rxjs_1.Subject();
        this.onKeyup = this._onKeyUp.asObservable();
    }
    Object.defineProperty(InputTextDirective.prototype, "borderColor", {
        set: function (color) {
            this.colorService.setBackgroundColor(color, true, 'border-color', null);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputTextDirective.prototype, "class", {
        set: function (className) {
            this.isSetClass = true;
            this.classService.applyClasses(className);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputTextDirective.prototype, "color", {
        set: function (color) {
            this.colorService.setFontColor(color);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @method ngOnInit
     */
    InputTextDirective.prototype.ngOnInit = function () {
        if (!this.isSetClass) {
            this.classService.applyClasses(this.defaultClass);
        }
    };
    InputTextDirective.prototype.keyUpListener = function () {
        this._onKeyUp.next(this.ngControl);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], InputTextDirective.prototype, "borderColor", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], InputTextDirective.prototype, "class", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], InputTextDirective.prototype, "color", null);
    __decorate([
        core_1.HostListener('keyup'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], InputTextDirective.prototype, "keyUpListener", null);
    InputTextDirective = __decorate([
        core_1.Directive({
            selector: '[mkInputText]',
            providers: [color_service_1.ColorService, class_service_1.ClassService]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef,
            core_1.Renderer2,
            forms_1.NgControl,
            color_service_1.ColorService,
            class_service_1.ClassService])
    ], InputTextDirective);
    return InputTextDirective;
}());
exports.InputTextDirective = InputTextDirective;
//# sourceMappingURL=input-text.directive.js.map