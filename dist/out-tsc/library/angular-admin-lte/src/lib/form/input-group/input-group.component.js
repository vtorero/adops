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
var input_group_directive_1 = require("./input-group.directive");
var input_text_directive_1 = require("../input-text/input-text.directive");
/*
 *
 */
var InputGroupComponent = /** @class */ (function () {
    function InputGroupComponent() {
        this.subscriptions = [];
        this.inputColor = 'default';
        this.inputErrorColor = 'danger';
        this.inputValidColor = 'success';
        this.wrapperClasses = 'form-group';
    }
    InputGroupComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.subscriptions.push(this.inputTextDirective.onKeyup.subscribe(function (value) {
            if (value.invalid) {
                _this.currentColor = _this.inputErrorColor;
                _this.currentFontColor = _this.inputErrorFontColor;
            }
            else if (!value.invalid) {
                _this.currentColor = _this.inputValidColor;
                _this.currentFontColor = _this.inputValidFontColor;
            }
            else {
                _this.currentColor = _this.inputColor;
                _this.currentFontColor = _this.inputFontColor;
            }
        }));
    };
    InputGroupComponent.prototype.ngOnDestroy = function () {
        helpers_1.removeSubscriptions(this.subscriptions);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], InputGroupComponent.prototype, "addonLeft", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], InputGroupComponent.prototype, "addonRight", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], InputGroupComponent.prototype, "inputColor", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], InputGroupComponent.prototype, "inputFontColor", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], InputGroupComponent.prototype, "inputErrorColor", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], InputGroupComponent.prototype, "inputErrorFontColor", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], InputGroupComponent.prototype, "inputValidColor", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], InputGroupComponent.prototype, "inputValidFontColor", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], InputGroupComponent.prototype, "label", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], InputGroupComponent.prototype, "wrapperClasses", void 0);
    __decorate([
        core_1.ContentChild(input_group_directive_1.InputGroupLabelDirective),
        __metadata("design:type", input_group_directive_1.InputGroupLabelDirective)
    ], InputGroupComponent.prototype, "inputGroupLabelDirective", void 0);
    __decorate([
        core_1.ContentChild(input_group_directive_1.InputGroupAddonLeftDirective),
        __metadata("design:type", input_group_directive_1.InputGroupAddonLeftDirective)
    ], InputGroupComponent.prototype, "inputGroupAddonLeftDirective", void 0);
    __decorate([
        core_1.ContentChild(input_group_directive_1.InputGroupAddonRightDirective),
        __metadata("design:type", input_group_directive_1.InputGroupAddonRightDirective)
    ], InputGroupComponent.prototype, "inputGroupAddonRightDirective", void 0);
    __decorate([
        core_1.ContentChild(input_group_directive_1.InputGroupContentDirective),
        __metadata("design:type", input_group_directive_1.InputGroupContentDirective)
    ], InputGroupComponent.prototype, "inputGroupContentDirective", void 0);
    __decorate([
        core_1.ContentChild(input_text_directive_1.InputTextDirective),
        __metadata("design:type", input_text_directive_1.InputTextDirective)
    ], InputGroupComponent.prototype, "inputTextDirective", void 0);
    InputGroupComponent = __decorate([
        core_1.Component({
            selector: 'mk-input-group',
            templateUrl: './input-group.component.html'
        })
    ], InputGroupComponent);
    return InputGroupComponent;
}());
exports.InputGroupComponent = InputGroupComponent;
//# sourceMappingURL=input-group.component.js.map