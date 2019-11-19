"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var forms_1 = require("@angular/forms");
var input_1 = require("@angular/material/input");
var button_1 = require("@angular/material/button");
var card_1 = require("@angular/material/card");
var form_field_1 = require("@angular/material/form-field");
var checkbox_1 = require("@angular/material/checkbox");
var datepicker_1 = require("@angular/material/datepicker");
var radio_1 = require("@angular/material/radio");
var select_1 = require("@angular/material/select");
var admin_lte_conf_1 = require("./admin-lte.conf");
var app_routing_module_1 = require("./app-routing.module");
var core_module_1 = require("./core/core.module");
var angular_admin_lte_1 = require("angular-admin-lte");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var angular_loading_page_1 = require("angular-loading-page");
var angular_admin_lte_2 = require("angular-admin-lte");
var login_component_1 = require("./login/login.component");
var core_2 = require("@angular/material/core");
var animations_1 = require("@angular/platform-browser/animations");
var ng_pick_datetime_1 = require("ng-pick-datetime");
var paginator_1 = require("@angular/material/paginator");
var table_1 = require("@angular/material/table");
var sort_1 = require("@angular/material/sort");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule, ng_pick_datetime_1.OwlDateTimeModule, ng_pick_datetime_1.OwlNativeDateTimeModule,
                app_routing_module_1.AppRoutingModule,
                core_module_1.CoreModule,
                angular_admin_lte_1.LayoutModule.forRoot(admin_lte_conf_1.adminLteConf),
                angular_loading_page_1.LoadingPageModule, angular_loading_page_1.MaterialBarModule, http_1.HttpClientModule,
                angular_admin_lte_2.BoxModule,
                angular_admin_lte_2.BoxInfoModule,
                forms_1.FormsModule, paginator_1.MatPaginatorModule, table_1.MatTableModule,
                datepicker_1.MatDatepickerModule, animations_1.BrowserAnimationsModule,
                input_1.MatInputModule, button_1.MatButtonModule, card_1.MatCardModule, form_field_1.MatFormFieldModule, checkbox_1.MatCheckboxModule, radio_1.MatRadioModule, select_1.MatSelectModule, core_2.MatNativeDateModule,
                table_1.MatTableModule,
                paginator_1.MatPaginatorModule,
                sort_1.MatSortModule,
                input_1.MatInputModule
            ],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                login_component_1.LoginComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map