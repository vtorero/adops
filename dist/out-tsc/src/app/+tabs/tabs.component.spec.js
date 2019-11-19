"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var tabs_component_1 = require("./tabs.component");
var angular_admin_lte_1 = require("angular-admin-lte");
describe('TabsComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [
                angular_admin_lte_1.BoxModule,
                angular_admin_lte_1.TabsModule,
                angular_admin_lte_1.DropdownModule
            ],
            declarations: [tabs_component_1.TabsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(tabs_component_1.TabsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=tabs.component.spec.js.map