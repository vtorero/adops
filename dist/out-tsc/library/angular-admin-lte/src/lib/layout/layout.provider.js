"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var layout_store_1 = require("./layout.store");
/**
 * [InjectionToken description]
 */
exports.LayoutConfigToken = new core_1.InjectionToken('layoutConfig');
/**
 * [layoutStoreFactory description]
 */
function layoutStoreFactory(layoutConfig) {
    return new layout_store_1.LayoutStore(layoutConfig);
}
exports.layoutStoreFactory = layoutStoreFactory;
/**
 * [layoutProviders description]
 */
function layoutProvider(layoutConfig) {
    return [{
            provide: layout_store_1.LayoutStore,
            useFactory: layoutStoreFactory,
            deps: [exports.LayoutConfigToken]
        }, {
            provide: exports.LayoutConfigToken,
            useValue: layoutConfig
        }
    ];
}
exports.layoutProvider = layoutProvider;
//# sourceMappingURL=layout.provider.js.map