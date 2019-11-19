"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var configuration_component_1 = require("./configuration.component");
var angular_admin_lte_1 = require("angular-admin-lte");
describe('ConfigurationComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [angular_admin_lte_1.BoxModule],
            declarations: [configuration_component_1.ConfigurationComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(configuration_component_1.ConfigurationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=configuration.component.spec.js.map