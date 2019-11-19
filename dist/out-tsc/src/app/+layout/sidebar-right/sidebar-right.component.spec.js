"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var sidebar_right_component_1 = require("./sidebar-right.component");
var angular_admin_lte_1 = require("angular-admin-lte");
describe('SidebarRightComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [angular_admin_lte_1.BoxModule],
            declarations: [sidebar_right_component_1.SidebarRightComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(sidebar_right_component_1.SidebarRightComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=sidebar-right.component.spec.js.map