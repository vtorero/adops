"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var box_default_component_1 = require("./box-default.component");
var angular_admin_lte_1 = require("angular-admin-lte");
describe('BoxDefaultComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [angular_admin_lte_1.BoxModule],
            declarations: [box_default_component_1.BoxDefaultComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(box_default_component_1.BoxDefaultComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=box-default.component.spec.js.map