"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var rxjs_1 = require("rxjs");
/*
 *
 */
var RoutingService = /** @class */ (function () {
    /**
     * @method constructor
     * @param router [description]
     */
    function RoutingService(router) {
        this.router = router;
        this.onChange = new rxjs_1.BehaviorSubject(undefined);
        this.events = new rxjs_1.BehaviorSubject(undefined);
        this.init();
    }
    RoutingService_1 = RoutingService;
    /**
     * [createUrl description]
     * @method createUrl
     * @param route [description]
     * @return [description]
     */
    RoutingService.createUrl = function (route) {
        var url = route.url.map(function (urlSegment) { return urlSegment.toString(); }).join('/');
        return url;
    };
    /**
     * [isChildrenSelfRoute description]
     * @method isChildrenSelfRoute
     * @param route [description]
     * @return [description]
     */
    RoutingService.isChildrenSelfRoute = function (route) {
        route.routeConfig.children.forEach(function (child) {
            if (child.path === '' && (child.component || child.loadChildren)) {
                return true;
            }
        });
        return false;
    };
    /**
     * [createBreadcrumb description]
     * @method createBreadcrumb
     * @param route [description]
     * @param url   [description]
     * @return [description]
     */
    RoutingService.createBreadcrumb = function (route, url) {
        var isUrl = true;
        if (route.children.length !== 0 && route.firstChild.routeConfig.path) {
            if (url !== '/' && !route.routeConfig.loadChildren && !route.routeConfig.component && !RoutingService_1.isChildrenSelfRoute(route)) {
                isUrl = false;
            }
        }
        return {
            data: route.data,
            params: route.params,
            url: isUrl ? url : null
        };
    };
    /**
     * [init description]
     * @method init
     */
    RoutingService.prototype.init = function () {
        var _this = this;
        this.router.events.subscribe(function (routeEvent) {
            // https://github.com/angular/angular/issues/17473: event not fired anymore on load for routed component.
            if (routeEvent instanceof router_1.NavigationEnd) {
                _this.events.next(routeEvent);
                var route = _this.router.routerState.root.snapshot, tmpUrl = '', url = '', rootRoot = true;
                var paths = [];
                while (route.children.length) {
                    route = route.firstChild;
                    tmpUrl = "/" + RoutingService_1.createUrl(route);
                    if (route.outlet !== router_1.PRIMARY_OUTLET || (!route.routeConfig.path && !rootRoot)) {
                        continue;
                    }
                    rootRoot = false;
                    if (route.params || route.data) {
                        for (var key in route.params) {
                            if (!key) {
                                continue;
                            }
                            if (route.data['title']) {
                                route.data['title'] = route.data['title'].replace(":" + key, route.params[key]);
                                route.data['title'] = route.data['title'].replace(":" + key, route.params[key]);
                            }
                            if (route.data['breadcrumbs']) {
                                route.data['breadcrumbs'] = route.data['breadcrumbs'].replace(":" + key, route.params[key]);
                            }
                            if (route.data['description']) {
                                route.data['description'] = route.data['description'].replace(":" + key, route.params[key]);
                            }
                        }
                    }
                    if (tmpUrl === '/') {
                        paths.push(RoutingService_1.createBreadcrumb(route, tmpUrl));
                    }
                    else {
                        url += tmpUrl;
                        paths.push(RoutingService_1.createBreadcrumb(route, url));
                    }
                }
                _this.onChange.next(paths);
            }
        });
    };
    var RoutingService_1;
    RoutingService = RoutingService_1 = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router])
    ], RoutingService);
    return RoutingService;
}());
exports.RoutingService = RoutingService;
//# sourceMappingURL=routing.service.js.map