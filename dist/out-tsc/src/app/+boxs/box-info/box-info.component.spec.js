"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var box_info_component_1 = require("./box-info.component");
var angular_admin_lte_1 = require("angular-admin-lte");
describe('BoxInfoComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [
                angular_admin_lte_1.BoxModule,
                angular_admin_lte_1.BoxInfoModule
            ],
            declarations: [box_info_component_1.BoxInfoComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(box_info_component_1.BoxInfoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=box-info.component.spec.js.map