"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var box_small_component_1 = require("./box-small.component");
var angular_admin_lte_1 = require("angular-admin-lte");
describe('BoxSmallComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [
                angular_admin_lte_1.BoxModule,
                angular_admin_lte_1.BoxSmallModule
            ],
            declarations: [box_small_component_1.BoxSmallComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(box_small_component_1.BoxSmallComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=box-small.component.spec.js.map