"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var testing_2 = require("@angular/router/testing");
var app_component_1 = require("./app.component");
var core_module_1 = require("./core/core.module");
var angular_admin_lte_1 = require("angular-admin-lte");
var angular_loading_page_1 = require("angular-loading-page");
var admin_lte_conf_1 = require("./admin-lte.conf");
describe('AppComponent', function () {
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [
                testing_2.RouterTestingModule,
                core_module_1.CoreModule,
                angular_admin_lte_1.LayoutModule.forRoot(admin_lte_conf_1.adminLteConf),
                angular_loading_page_1.LoadingPageModule
            ],
            declarations: [
                app_component_1.AppComponent
            ],
        }).compileComponents();
    }));
    it('should create the app', testing_1.async(function () {
        var fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        var app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
//# sourceMappingURL=app.component.spec.js.map