"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var sidebar_left_component_1 = require("./sidebar-left.component");
var angular_admin_lte_1 = require("angular-admin-lte");
describe('SidebarLeftComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [angular_admin_lte_1.BoxModule],
            declarations: [sidebar_left_component_1.SidebarLeftComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(sidebar_left_component_1.SidebarLeftComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=sidebar-left.component.spec.js.map