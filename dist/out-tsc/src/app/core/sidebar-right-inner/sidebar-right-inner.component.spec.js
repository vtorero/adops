"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var sidebar_right_inner_component_1 = require("./sidebar-right-inner.component");
var angular_admin_lte_1 = require("angular-admin-lte");
describe('SidebarRightInnerComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [
                angular_admin_lte_1.LayoutModule.forRoot(null),
                angular_admin_lte_1.TabsModule
            ],
            declarations: [sidebar_right_inner_component_1.SidebarRightInnerComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(sidebar_right_inner_component_1.SidebarRightInnerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=sidebar-right-inner.component.spec.js.map