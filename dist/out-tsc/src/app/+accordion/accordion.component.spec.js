"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var accordion_component_1 = require("./accordion.component");
var angular_admin_lte_1 = require("angular-admin-lte");
describe('AccordionComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [
                angular_admin_lte_1.AccordionModule,
                angular_admin_lte_1.BoxModule
            ],
            declarations: [accordion_component_1.AccordionComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(accordion_component_1.AccordionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=accordion.component.spec.js.map