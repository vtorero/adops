"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var dropdown_component_1 = require("./dropdown.component");
var angular_admin_lte_1 = require("angular-admin-lte");
describe('DropdownComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [
                angular_admin_lte_1.BoxModule,
                angular_admin_lte_1.DropdownModule
            ],
            declarations: [dropdown_component_1.DropdownComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(dropdown_component_1.DropdownComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=dropdown.component.spec.js.map