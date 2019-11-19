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
var ClassService = /** @class */ (function () {
    function ClassService(elementRef, renderer2) {
        this.elementRef = elementRef;
        this.renderer2 = renderer2;
        this.currentClasses = [];
    }
    ClassService.prototype.applyClasses = function (cssClasses) {
        var _this = this;
        if (typeof cssClasses === 'string') {
            cssClasses = cssClasses.split(' ');
        }
        // Remove only classes that are not in cssClasses
        var classesToRemove = this.currentClasses.filter(function (x) { return cssClasses.indexOf(x) === -1; });
        classesToRemove.forEach(function (cssClasse) {
            if (cssClasse) {
                _this.renderer2.removeClass(_this.elementRef.nativeElement, cssClasse);
            }
        });
        // Add only classes that are not in currentClasses
        var classesToAdd = cssClasses.filter(function (x) { return _this.currentClasses.indexOf(x) === -1; });
        classesToAdd.forEach(function (cssClasse) {
            if (cssClasse) {
                _this.renderer2.addClass(_this.elementRef.nativeElement, cssClasse);
            }
        });
        // Update current classes for futur updates
        this.currentClasses = cssClasses.slice();
    };
    ClassService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_1.ElementRef,
            core_1.Renderer2])
    ], ClassService);
    return ClassService;
}());
exports.ClassService = ClassService;
//# sourceMappingURL=class.service.js.map