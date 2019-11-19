"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var routes = [
    {
        path: 'dash',
        data: {
            title: 'Resultados'
        },
        children: [
            {
                path: '',
                component: home_component_1.HomeComponent
            }, {
                path: 'accordion',
                loadChildren: './+accordion/accordion.module#AccordionModule',
                data: {
                    title: 'Accordion'
                }
            }, {
                path: 'alert',
                loadChildren: './+alert/alert.module#AlertModule',
                data: {
                    title: 'Alert',
                }
            }, {
                path: 'layout',
                data: {
                    title: 'Layout',
                },
                children: [
                    {
                        path: 'configuration',
                        loadChildren: './+layout/configuration/configuration.module#ConfigurationModule',
                        data: {
                            title: 'Configuration'
                        }
                    }, {
                        path: 'custom',
                        loadChildren: './+layout/custom/custom.module#CustomModule',
                        data: {
                            title: 'Disable Layout'
                            // disableLayout: true
                        }
                    }, {
                        path: 'content',
                        loadChildren: './+layout/content/content.module#ContentModule',
                        data: {
                            title: 'Content'
                        }
                    }, {
                        path: 'header',
                        loadChildren: './+layout/header/header.module#HeaderModule',
                        data: {
                            title: 'Header'
                        }
                    }, {
                        path: 'sidebar-left',
                        loadChildren: './+layout/sidebar-left/sidebar-left.module#SidebarLeftModule',
                        data: {
                            title: 'Sidebar Left'
                        }
                    }, {
                        path: 'sidebar-right',
                        loadChildren: './+layout/sidebar-right/sidebar-right.module#SidebarRightModule',
                        data: {
                            title: 'Sidebar Right'
                        }
                    },
                ]
            }, {
                path: 'boxs',
                data: {
                    title: 'Boxs',
                },
                children: [
                    {
                        path: 'box',
                        loadChildren: './+boxs/box-default/box-default.module#BoxDefaultModule',
                        data: {
                            title: 'Box'
                        }
                    }, {
                        path: 'info-box',
                        loadChildren: './+boxs/box-info/box-info.module#BoxInfoModule',
                        data: {
                            title: 'Info Box'
                        }
                    }, {
                        path: 'small-box',
                        loadChildren: './+boxs/box-small/box-small.module#BoxSmallModule',
                        data: {
                            title: 'Small Box'
                        }
                    }
                ]
            }, {
                path: 'dropdown',
                loadChildren: './+dropdown/dropdown.module#DropdownModule',
                data: {
                    title: 'Dropdown',
                }
            }, {
                path: 'tabs',
                loadChildren: './+tabs/tabs.module#TabsModule',
                data: {
                    title: 'Tabs',
                }
            }
        ]
    }, {
        path: 'form',
        data: {
            title: 'Form',
        },
        children: [
            {
                path: 'input-text',
                loadChildren: './+form/input-text/input-text.module#InputTextModule',
                data: {
                    title: 'Input Text',
                }
            }
        ]
    }, {
        path: '',
        loadChildren: './+login/login.module#LoginModule',
        data: {
            customLayout: true
        }
    }, {
        path: 'register',
        loadChildren: './+register/register.module#RegisterModule',
        data: {
            customLayout: true
        }
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes, { useHash: true })],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map