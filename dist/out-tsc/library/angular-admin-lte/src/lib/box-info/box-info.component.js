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
var box_info_directive_1 = require("./box-info.directive");
/*
 *
 */
var BoxInfoComponent = /** @class */ (function () {
    function BoxInfoComponent() {
        this.contentStyleClass = 'info-box-number';
        this.footerStyleClass = 'progress-description';
        this.headerStyleClass = 'info-box-text';
        this.iconColor = '#fff';
        this.iconStyleClass = 'ion ion-bag';
        this.styleClass = 'info-box';
    }
    /**
     * @method ngOnInit
     */
    BoxInfoComponent.prototype.ngOnInit = function () {
        if (!this.backgroundColor) {
            this.progressBarBg = this.iconBackgroundColor;
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], BoxInfoComponent.prototype, "backgroundColor", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], BoxInfoComponent.prototype, "contentStyleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], BoxInfoComponent.prototype, "contentColor", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], BoxInfoComponent.prototype, "footer", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], BoxInfoComponent.prototype, "footerColor", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], BoxInfoComponent.prototype, "footerStyleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], BoxInfoComponent.prototype, "header", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], BoxInfoComponent.prototype, "headerColor", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], BoxInfoComponent.prototype, "headerStyleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], BoxInfoComponent.prototype, "iconBackgroundColor", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], BoxInfoComponent.prototype, "iconColor", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], BoxInfoComponent.prototype, "iconStyleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], BoxInfoComponent.prototype, "progressWidth", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], BoxInfoComponent.prototype, "styleClass", void 0);
    __decorate([
        core_1.ContentChild(box_info_directive_1.BoxInfoHeaderDirective),
        __metadata("design:type", box_info_directive_1.BoxInfoHeaderDirective)
    ], BoxInfoComponent.prototype, "boxInfoHeaderDirective", void 0);
    __decorate([
        core_1.ContentChild(box_info_directive_1.BoxInfoFooterDirective),
        __metadata("design:type", box_info_directive_1.BoxInfoFooterDirective)
    ], BoxInfoComponent.prototype, "boxInfoFooterDirective", void 0);
    __decorate([
        core_1.ContentChild(box_info_directive_1.BoxInfoContentDirective),
        __metadata("design:type", box_info_directive_1.BoxInfoContentDirective)
    ], BoxInfoComponent.prototype, "boxInfoContentDirective", void 0);
    BoxInfoComponent = __decorate([
        core_1.Component({
            selector: 'mk-box-info',
            styleUrls: ['./box-info.component.css'],
            templateUrl: './box-info.component.html'
        })
    ], BoxInfoComponent);
    return BoxInfoComponent;
}());
exports.BoxInfoComponent = BoxInfoComponent;
//# sourceMappingURL=box-info.component.js.map