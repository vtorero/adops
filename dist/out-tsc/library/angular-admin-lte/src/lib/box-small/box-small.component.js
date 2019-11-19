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
var box_small_directive_1 = require("./box-small.directive");
/*
 *
 */
var BoxSmallComponent = /** @class */ (function () {
    function BoxSmallComponent() {
        this.contentStyleClass = 'small-box-content';
        this.footerStyleClass = 'small-box-footer';
        this.headerStyleClass = 'small-box-header';
        this.iconStyleClass = 'ion ion-bag';
        this.styleClass = 'small-box';
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], BoxSmallComponent.prototype, "backgroundColor", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], BoxSmallComponent.prototype, "contentColor", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], BoxSmallComponent.prototype, "contentStyleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], BoxSmallComponent.prototype, "footer", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], BoxSmallComponent.prototype, "footerColor", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], BoxSmallComponent.prototype, "footerStyleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], BoxSmallComponent.prototype, "header", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], BoxSmallComponent.prototype, "headerColor", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], BoxSmallComponent.prototype, "headerStyleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], BoxSmallComponent.prototype, "iconColor", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], BoxSmallComponent.prototype, "iconStyleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], BoxSmallComponent.prototype, "styleClass", void 0);
    __decorate([
        core_1.ContentChild(box_small_directive_1.BoxSmallHeaderDirective),
        __metadata("design:type", box_small_directive_1.BoxSmallHeaderDirective)
    ], BoxSmallComponent.prototype, "boxSmallHeaderDirective", void 0);
    __decorate([
        core_1.ContentChild(box_small_directive_1.BoxSmallFooterDirective),
        __metadata("design:type", box_small_directive_1.BoxSmallFooterDirective)
    ], BoxSmallComponent.prototype, "boxSmallFooterDirective", void 0);
    __decorate([
        core_1.ContentChild(box_small_directive_1.BoxSmallContentDirective),
        __metadata("design:type", box_small_directive_1.BoxSmallContentDirective)
    ], BoxSmallComponent.prototype, "boxSmallContentDirective", void 0);
    BoxSmallComponent = __decorate([
        core_1.Component({
            selector: 'mk-box-small',
            templateUrl: './box-small.component.html',
            styleUrls: ['./box-small.component.css']
        })
    ], BoxSmallComponent);
    return BoxSmallComponent;
}());
exports.BoxSmallComponent = BoxSmallComponent;
//# sourceMappingURL=box-small.component.js.map