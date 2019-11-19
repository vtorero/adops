"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
/*
 *
 */
var BoxInfoContentDirective = /** @class */ (function () {
    function BoxInfoContentDirective() {
    }
    BoxInfoContentDirective = __decorate([
        core_1.Directive({
            /* tslint:disable-next-line:directive-selector */
            selector: 'mk-box-info-content'
        })
    ], BoxInfoContentDirective);
    return BoxInfoContentDirective;
}());
exports.BoxInfoContentDirective = BoxInfoContentDirective;
/*
 *
 */
var BoxInfoFooterDirective = /** @class */ (function () {
    function BoxInfoFooterDirective() {
    }
    BoxInfoFooterDirective = __decorate([
        core_1.Directive({
            /* tslint:disable-next-line:directive-selector */
            selector: 'mk-box-info-footer'
        })
    ], BoxInfoFooterDirective);
    return BoxInfoFooterDirective;
}());
exports.BoxInfoFooterDirective = BoxInfoFooterDirective;
/*
 *
 */
var BoxInfoHeaderDirective = /** @class */ (function () {
    function BoxInfoHeaderDirective() {
    }
    BoxInfoHeaderDirective = __decorate([
        core_1.Directive({
            /* tslint:disable-next-line:directive-selector */
            selector: 'mk-box-info-header'
        })
    ], BoxInfoHeaderDirective);
    return BoxInfoHeaderDirective;
}());
exports.BoxInfoHeaderDirective = BoxInfoHeaderDirective;
//# sourceMappingURL=box-info.directive.js.map