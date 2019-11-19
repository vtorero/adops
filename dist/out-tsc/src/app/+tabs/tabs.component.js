"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Prism = require("prismjs");
var TabsComponent = /** @class */ (function () {
    function TabsComponent() {
        this.toggleDropdown = true;
        this.toggleDropdown2 = true;
    }
    /**
     * @method ngAfterViewInit
     */
    TabsComponent.prototype.ngAfterViewInit = function () {
        Prism.highlightAll();
    };
    TabsComponent = __decorate([
        core_1.Component({
            templateUrl: './tabs.component.html',
            styleUrls: ['./tabs.component.css']
        })
    ], TabsComponent);
    return TabsComponent;
}());
exports.TabsComponent = TabsComponent;
//# sourceMappingURL=tabs.component.js.map