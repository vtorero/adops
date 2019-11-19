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
var InputGroupLabelDirective = /** @class */ (function () {
    function InputGroupLabelDirective() {
    }
    InputGroupLabelDirective = __decorate([
        core_1.Directive({
            /* tslint:disable-next-line:directive-selector */
            selector: 'mk-input-group-label'
        })
    ], InputGroupLabelDirective);
    return InputGroupLabelDirective;
}());
exports.InputGroupLabelDirective = InputGroupLabelDirective;
/*
 *
 */
var InputGroupAddonLeftDirective = /** @class */ (function () {
    function InputGroupAddonLeftDirective() {
    }
    InputGroupAddonLeftDirective = __decorate([
        core_1.Directive({
            /* tslint:disable-next-line:directive-selector */
            selector: 'mk-input-group-addon-left'
        })
    ], InputGroupAddonLeftDirective);
    return InputGroupAddonLeftDirective;
}());
exports.InputGroupAddonLeftDirective = InputGroupAddonLeftDirective;
/*
 *
 */
var InputGroupAddonRightDirective = /** @class */ (function () {
    function InputGroupAddonRightDirective() {
    }
    InputGroupAddonRightDirective = __decorate([
        core_1.Directive({
            /* tslint:disable-next-line:directive-selector */
            selector: 'mk-input-group-addon-right'
        })
    ], InputGroupAddonRightDirective);
    return InputGroupAddonRightDirective;
}());
exports.InputGroupAddonRightDirective = InputGroupAddonRightDirective;
/*
 *
 */
var InputGroupContentDirective = /** @class */ (function () {
    function InputGroupContentDirective() {
    }
    InputGroupContentDirective = __decorate([
        core_1.Directive({
            /* tslint:disable-next-line:directive-selector */
            selector: 'mk-input-group-content'
        })
    ], InputGroupContentDirective);
    return InputGroupContentDirective;
}());
exports.InputGroupContentDirective = InputGroupContentDirective;
//# sourceMappingURL=input-group.directive.js.map