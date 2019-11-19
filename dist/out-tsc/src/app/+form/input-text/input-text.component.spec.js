"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var input_text_component_1 = require("./input-text.component");
var angular_admin_lte_1 = require("angular-admin-lte");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
describe('InputTextComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [
                angular_admin_lte_1.BoxModule,
                angular_admin_lte_1.InputGroupModule,
                angular_admin_lte_1.InputTextModule
            ],
            declarations: [input_text_component_1.InputTextComponent],
            providers: [
                forms_1.FormBuilder,
                forms_1.NgControl
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(input_text_component_1.InputTextComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=input-text.component.spec.js.map