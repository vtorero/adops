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
var helpers_1 = require("../helpers");
/*
 *
 */
var DropdownToggleComponent = /** @class */ (function () {
    function DropdownToggleComponent() {
    }
    __decorate([
        core_1.ViewChild('templateRef'),
        __metadata("design:type", core_1.TemplateRef)
    ], DropdownToggleComponent.prototype, "templateRef", void 0);
    __decorate([
        core_1.ContentChild('toggleElement'),
        __metadata("design:type", core_1.ElementRef)
    ], DropdownToggleComponent.prototype, "toggleElement", void 0);
    DropdownToggleComponent = __decorate([
        core_1.Component({
            selector: 'mk-dropdown-toggle',
            template: '<ng-template #templateRef><ng-content></ng-content></ng-template>',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        })
    ], DropdownToggleComponent);
    return DropdownToggleComponent;
}());
exports.DropdownToggleComponent = DropdownToggleComponent;
/*
 *
 */
var DropdownMenuComponent = /** @class */ (function () {
    function DropdownMenuComponent() {
    }
    __decorate([
        core_1.ViewChild('templateRef'),
        __metadata("design:type", core_1.TemplateRef)
    ], DropdownMenuComponent.prototype, "templateRef", void 0);
    DropdownMenuComponent = __decorate([
        core_1.Component({
            selector: 'mk-dropdown-menu',
            template: '<ng-template #templateRef><ng-content></ng-content></ng-template>',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        })
    ], DropdownMenuComponent);
    return DropdownMenuComponent;
}());
exports.DropdownMenuComponent = DropdownMenuComponent;
/*
 *
 */
var DropdownComponent = /** @class */ (function () {
    /**
     * @method constructor
     * @param changeDetectorRef [description]
     * @param elementRef [description]
     * @param ngZone [description]
     * @param renderer2 [description]
     */
    function DropdownComponent(changeDetectorRef, elementRef, ngZone, renderer2) {
        this.changeDetectorRef = changeDetectorRef;
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this.renderer2 = renderer2;
        this.listeners = [];
        this.buttonStyleClass = 'btn dropdown-toggle';
        this.buttonBackgroudColor = 'default';
        this.contentStyleClass = 'dropdown-menu';
        this.isCollapsed = true;
        this.isWrapper = true;
        this.styleClass = 'dropdown';
        this.onCollapseStart = new core_1.EventEmitter();
        this.onCollapseDone = new core_1.EventEmitter();
    }
    /**
     * @method ngAfterViewInit
     */
    DropdownComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var toggleNativeElement = this.dropdownToggleComponent && this.dropdownToggleComponent.toggleElement ?
            this.dropdownToggleComponent.toggleElement.nativeElement : this.toggleElement ?
            this.toggleElement : this.defaultToggleElement ?
            this.defaultToggleElement.nativeElement : null;
        if (toggleNativeElement) {
            this.ngZone.runOutsideAngular(function () {
                _this.listeners.push(_this.renderer2.listen(toggleNativeElement, 'click', function (event) {
                    _this.toggleDropdown(event);
                    _this.changeDetectorRef.detectChanges();
                }));
            });
        }
    };
    /**
     * @method ngOnDestroy
     */
    DropdownComponent.prototype.ngOnDestroy = function () {
        this.unBindDocumentClickListener();
        helpers_1.removeListeners(this.listeners);
    };
    /**
     * [toggle description]
     * @method toggle
     * @param event [description]
     */
    DropdownComponent.prototype.toggleDropdown = function (event) {
        var _this = this;
        event.preventDefault();
        this.isCollapsed = !this.isCollapsed;
        if (!this.isCollapsed) {
            this.ngZone.runOutsideAngular(function () {
                setTimeout(function () {
                    _this.bindDocumentClickListener();
                });
            });
        }
        else {
            this.unBindDocumentClickListener();
        }
    };
    /**
     * [collapseStart description]
     * @method collapseStart
     * @param event [description]
     */
    DropdownComponent.prototype.collapseStart = function (event) {
        this.onCollapseStart.emit(event);
    };
    /**
     * [collapseDone description]
     * @method collapseDone
     * @param event [description]
     */
    DropdownComponent.prototype.collapseDone = function (event) {
        this.onCollapseStart.emit(event);
    };
    /**
     * [bindDocumentClickListener description]
     * @method bindDocumentClickListener
     */
    DropdownComponent.prototype.bindDocumentClickListener = function () {
        var _this = this;
        this.ngZone.runOutsideAngular(function () {
            _this.documentClickListener = _this.renderer2.listen('document', 'click', function () {
                if (!_this.isCollapsed) {
                    _this.isCollapsed = true;
                    _this.unBindDocumentClickListener();
                    _this.changeDetectorRef.detectChanges();
                }
            });
        });
    };
    /**
     * [unBindDocumentClickListener description]
     * @method unBindDocumentClickListener
     */
    DropdownComponent.prototype.unBindDocumentClickListener = function () {
        if (this.documentClickListener) {
            this.documentClickListener();
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DropdownComponent.prototype, "buttonStyleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DropdownComponent.prototype, "buttonBackgroudColor", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DropdownComponent.prototype, "contentStyleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DropdownComponent.prototype, "isCollapsed", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DropdownComponent.prototype, "isWrapper", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DropdownComponent.prototype, "styleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Element)
    ], DropdownComponent.prototype, "toggleElement", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DropdownComponent.prototype, "toggleText", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DropdownComponent.prototype, "onCollapseStart", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DropdownComponent.prototype, "onCollapseDone", void 0);
    __decorate([
        core_1.ContentChild(DropdownToggleComponent),
        __metadata("design:type", DropdownToggleComponent)
    ], DropdownComponent.prototype, "dropdownToggleComponent", void 0);
    __decorate([
        core_1.ContentChild(DropdownMenuComponent),
        __metadata("design:type", DropdownMenuComponent)
    ], DropdownComponent.prototype, "dropdownMenuComponent", void 0);
    __decorate([
        core_1.ViewChild('toggleElement'),
        __metadata("design:type", core_1.ElementRef)
    ], DropdownComponent.prototype, "defaultToggleElement", void 0);
    DropdownComponent = __decorate([
        core_1.Component({
            selector: 'mk-dropdown, [mk-dropdown]',
            templateUrl: './dropdown.component.html',
            styleUrls: ['./dropdown.component.css'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef,
            core_1.ElementRef,
            core_1.NgZone,
            core_1.Renderer2])
    ], DropdownComponent);
    return DropdownComponent;
}());
exports.DropdownComponent = DropdownComponent;
//# sourceMappingURL=dropdown.component.js.map