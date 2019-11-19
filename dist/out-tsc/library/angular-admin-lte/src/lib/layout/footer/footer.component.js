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
var footer_service_1 = require("./footer.service");
/**
 * Footer Left
 */
var FooterLeftComponent = /** @class */ (function () {
    function FooterLeftComponent() {
    }
    __decorate([
        core_1.ViewChild('templateRef'),
        __metadata("design:type", core_1.TemplateRef)
    ], FooterLeftComponent.prototype, "templateRef", void 0);
    FooterLeftComponent = __decorate([
        core_1.Component({
            selector: 'mk-layout-footer-left',
            template: '<ng-template #templateRef><ng-content></ng-content></ng-template>'
        })
    ], FooterLeftComponent);
    return FooterLeftComponent;
}());
exports.FooterLeftComponent = FooterLeftComponent;
/**
 * Footer Right
 */
var FooterRightComponent = /** @class */ (function () {
    function FooterRightComponent() {
    }
    __decorate([
        core_1.ViewChild('templateRef'),
        __metadata("design:type", core_1.TemplateRef)
    ], FooterRightComponent.prototype, "templateRef", void 0);
    FooterRightComponent = __decorate([
        core_1.Component({
            selector: 'mk-layout-footer-right',
            template: '<ng-template #templateRef><ng-content></ng-content></ng-template>'
        })
    ], FooterRightComponent);
    return FooterRightComponent;
}());
exports.FooterRightComponent = FooterRightComponent;
var FooterComponent = /** @class */ (function () {
    function FooterComponent(elementRef, footerService) {
        this.elementRef = elementRef;
        this.footerService = footerService;
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.footerService.elementRef = this.elementRef;
    };
    __decorate([
        core_1.ContentChild(FooterLeftComponent),
        __metadata("design:type", FooterLeftComponent)
    ], FooterComponent.prototype, "footerLeftComponent", void 0);
    __decorate([
        core_1.ContentChild(FooterRightComponent),
        __metadata("design:type", FooterRightComponent)
    ], FooterComponent.prototype, "footerRightComponent", void 0);
    FooterComponent = __decorate([
        core_1.Component({
            selector: 'mk-layout-footer',
            templateUrl: './footer.component.html',
            styleUrls: ['./footer.component.css']
        }),
        __metadata("design:paramtypes", [core_1.ElementRef,
            footer_service_1.FooterService])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;
//# sourceMappingURL=footer.component.js.map