"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var alert_component_1 = require("./alert.component");
var angular_admin_lte_1 = require("angular-admin-lte");
describe('AlertComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [
                angular_admin_lte_1.AlertModule,
                angular_admin_lte_1.BoxModule
            ],
            declarations: [alert_component_1.AlertComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(alert_component_1.AlertComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=alert.component.spec.js.map