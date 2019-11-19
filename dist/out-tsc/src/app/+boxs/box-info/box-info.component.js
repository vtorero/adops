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
var BoxInfoComponent = /** @class */ (function () {
    function BoxInfoComponent() {
    }
    /**
     * @method ngAfterViewInit
     */
    BoxInfoComponent.prototype.ngAfterViewInit = function () {
        Prism.highlightAll();
    };
    BoxInfoComponent = __decorate([
        core_1.Component({
            selector: 'app-box-info',
            templateUrl: './box-info.component.html',
            styleUrls: ['./box-info.component.css']
        })
    ], BoxInfoComponent);
    return BoxInfoComponent;
}());
exports.BoxInfoComponent = BoxInfoComponent;
//# sourceMappingURL=box-info.component.js.map