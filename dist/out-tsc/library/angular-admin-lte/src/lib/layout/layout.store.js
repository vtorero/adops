"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
/*
 *
 */
var LayoutStore = /** @class */ (function () {
    /**
     * @method constructor
     * @param layoutConfig [description]
     */
    function LayoutStore(layoutConfig) {
        this.initialLayoutState = {
            isSidebarLeftCollapsed: false,
            isSidebarLeftExpandOnOver: false,
            isSidebarLeftMouseOver: false,
            isSidebarLeftMini: true,
            sidebarRightSkin: 'dark',
            isSidebarRightCollapsed: true,
            isSidebarRightOverContent: true,
            layout: 'normal',
            sidebarLeftMenu: [],
            sidebarLeftMenuActiveUrl: '',
            skin: 'blue'
        };
        if (layoutConfig) {
            this.initialLayoutState = Object.assign(this.initialLayoutState, layoutConfig);
        }
        this._layoutState = new rxjs_1.BehaviorSubject(this.initialLayoutState);
        this.layoutState = this._layoutState.asObservable();
    }
    Object.defineProperty(LayoutStore.prototype, "windowInnerHeight", {
        /**
         * [windowInnerHeight description]
         * @method windowInnerHeight
         * @return [description]
         */
        get: function () {
            return this.layoutState.pipe(operators_1.pluck('windowInnerHeight'), operators_1.distinctUntilChanged());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutStore.prototype, "windowInnerWidth", {
        /**
         * [windowInnerWidth description]
         * @method windowInnerWidth
         * @return [description]
         */
        get: function () {
            return this.layoutState.pipe(operators_1.pluck('windowInnerWidth'), operators_1.distinctUntilChanged());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutStore.prototype, "isSidebarLeftCollapsed", {
        /**
         * [isSidebarLeftCollapsed description]
         * @return [description]
         */
        get: function () {
            return this.layoutState.pipe(operators_1.pluck('isSidebarLeftCollapsed'), operators_1.distinctUntilChanged());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutStore.prototype, "isSidebarLeftExpandOnOver", {
        /**
         * [isSidebarLeftExpandOnOver description]
         * @method isSidebarLeftExpandOnOver
         * @return [description]
         */
        get: function () {
            return this.layoutState.pipe(operators_1.pluck('isSidebarLeftExpandOnOver'), operators_1.distinctUntilChanged());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutStore.prototype, "isSidebarLeftMouseOver", {
        /**
         * [isSidebarLeftMouseOver description]
         * @method isSidebarLeftMouseOver
         * @return [description]
         */
        get: function () {
            return this.layoutState.pipe(operators_1.pluck('isSidebarLeftMouseOver'), operators_1.distinctUntilChanged());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutStore.prototype, "isSidebarLeftMini", {
        /**
         * [isSidebarLeftMini description]
         * @method isSidebarLeftMini
         * @return [description]
         */
        get: function () {
            return this.layoutState.pipe(operators_1.pluck('isSidebarLeftMini'), operators_1.distinctUntilChanged());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutStore.prototype, "sidebarRightSkin", {
        /**
         * [sidebarRightSkin description]
         * @method sidebarRightSkin
         * @return [description]
         */
        get: function () {
            return this.layoutState.pipe(operators_1.pluck('sidebarRightSkin'), operators_1.distinctUntilChanged());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutStore.prototype, "isSidebarRightCollapsed", {
        /**
         * [isSidebarRightCollapsed description]
         * @return [description]
         */
        get: function () {
            return this.layoutState.pipe(operators_1.pluck('isSidebarRightCollapsed'), operators_1.distinctUntilChanged());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutStore.prototype, "isSidebarRightOverContent", {
        /**
         * [isSidebarRightOverContent description]
         * @method isSidebarRightOverContent
         * @return [description]
         */
        get: function () {
            return this.layoutState.pipe(operators_1.pluck('isSidebarRightOverContent'), operators_1.distinctUntilChanged());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutStore.prototype, "sidebarLeftMenu", {
        /**
         * [sidebarLeftMenu description]
         * @method sidebarLeftMenu
         * @return [description]
         */
        get: function () {
            return this.layoutState.pipe(operators_1.pluck('sidebarLeftMenu'), operators_1.distinctUntilChanged());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutStore.prototype, "sidebarLeftMenuActiveUrl", {
        /**
         * [sidebarLeftMenuActiveUrl description]
         * @method sidebarLeftMenuActiveUrl
         * @return [description]
         */
        get: function () {
            return this.layoutState.pipe(operators_1.pluck('sidebarLeftMenuActiveUrl'), operators_1.distinctUntilChanged());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutStore.prototype, "sidebarLeftElementHeight", {
        /**
         * [sidebarLeftElementHeight description]
         * @method sidebarLeftElementHeight
         * @return [description]
         */
        get: function () {
            return this.layoutState.pipe(operators_1.pluck('sidebarLeftElementHeight'), operators_1.distinctUntilChanged());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutStore.prototype, "layout", {
        /**
         * [layoutType description]
         * @method layoutType
         * @return [description]
         */
        get: function () {
            return this.layoutState.pipe(operators_1.pluck('layout'), operators_1.distinctUntilChanged());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutStore.prototype, "skin", {
        /**
         * [skin description]
         * @method skin
         * @return [description]
         */
        get: function () {
            return this.layoutState.pipe(operators_1.pluck('skin'), operators_1.distinctUntilChanged());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutStore.prototype, "wrapperClasses", {
        /**
         * [wrapperClasses description]
         * @method wrapperClasses
         * @return [description]
         */
        get: function () {
            return this.layoutState.pipe(operators_1.pluck('wrapperClasses'), operators_1.distinctUntilChanged());
        },
        enumerable: true,
        configurable: true
    });
    /**
     * [sidebarLeftCollapsed description]
     * @method sidebarLeftCollapsed
     * @param value [description]
     */
    LayoutStore.prototype.sidebarLeftCollapsed = function (value) {
        this._layoutState.next(Object.assign(this._layoutState.value, { isSidebarLeftCollapsed: value }));
    };
    /**
     * [sidebarLeftExpandOnOver description]
     * @method sidebarLeftExpandOnOver
     * @param value [description]
     */
    LayoutStore.prototype.sidebarLeftExpandOnOver = function (value) {
        this._layoutState.next(Object.assign(this._layoutState.value, { isSidebarLeftExpandOnOver: value }));
    };
    /**
     * [setSidebarLeftElementHeight description]
     * @method setSidebarLeftElementHeight
     * @param value [description]
     */
    LayoutStore.prototype.setSidebarLeftElementHeight = function (value) {
        this._layoutState.next(Object.assign(this._layoutState.value, { sidebarLeftElementHeight: value }));
    };
    /**
     * [setSidebarRightSkin description]
     * @method setSidebarRightSkin
     * @param value [description]
     */
    LayoutStore.prototype.setSidebarRightSkin = function (value) {
        this._layoutState.next(Object.assign(this._layoutState.value, { sidebarRightSkin: value }));
    };
    /**
     * [sidebarLeftMouseOver description]
     * @method sidebarLeftMouseOver
     * @param value [description]
     */
    LayoutStore.prototype.sidebarLeftMouseOver = function (value) {
        this._layoutState.next(Object.assign(this._layoutState.value, { isSidebarLeftMouseOver: value }));
    };
    /**
     * [sidebarLeftMini description]
     * @method sidebarLeftMini
     * @param value [description]
     */
    LayoutStore.prototype.sidebarLeftMini = function (value) {
        this._layoutState.next(Object.assign(this._layoutState.value, { isSidebarLeftMini: value }));
    };
    /**
     * [sidebarRightCollapsed description]
     * @method sidebarRightCollapsed
     * @param value [description]
     */
    LayoutStore.prototype.sidebarRightCollapsed = function (value) {
        this._layoutState.next(Object.assign(this._layoutState.value, { isSidebarRightCollapsed: value }));
    };
    /**
     * [sidebarRightOverContent description]
     * @method sidebarRightOverContent
     * @param value [description]
     */
    LayoutStore.prototype.sidebarRightOverContent = function (value) {
        this._layoutState.next(Object.assign(this._layoutState.value, { isSidebarRightOverContent: value }));
    };
    /**
     * [setSidebarLeftMenu description]
     * @method setSidebarLeftMenu
     * @param value [description]
     */
    LayoutStore.prototype.setSidebarLeftMenu = function (value) {
        this._layoutState.next(Object.assign(this._layoutState.value, { sidebarLeftMenu: value }));
    };
    /**
     * [setSidebarLeftMenuActiveUrl description]
     * @method setSidebarLeftMenuActiveUrl
     * @param value [description]
     */
    LayoutStore.prototype.setSidebarLeftMenuActiveUrl = function (value) {
        this._layoutState.next(Object.assign(this._layoutState.value, { sidebarLeftMenuActiveUrl: value }));
    };
    /**
     * [setLayout description]
     * @method setLayout
     * @param value [description]
     */
    LayoutStore.prototype.setLayout = function (value) {
        this._layoutState.next(Object.assign(this._layoutState.value, { layout: value }));
    };
    /**
     * [setSkin description]
     * @method setSkin
     * @param value [description]
     */
    LayoutStore.prototype.setSkin = function (value) {
        this._layoutState.next(Object.assign(this._layoutState.value, { skin: value }));
    };
    /**
     * [setWrapperClasses description]
     * @method setWrapperClasses
     * @param value [description]
     */
    LayoutStore.prototype.setWrapperClasses = function (value) {
        this._layoutState.next(Object.assign(this._layoutState.value, { wrapperClasses: value }));
    };
    /**
     * [setWindowInnerHeight description]
     * @method setWindowInnerHeight
     * @param value [description]
     */
    LayoutStore.prototype.setWindowInnerHeight = function (value) {
        this._layoutState.next(Object.assign(this._layoutState.value, { windowInnerHeight: value }));
    };
    /**
     * [setWindowInnerWidth description]
     * @method setWindowInnerWidth
     * @param value [description]
     */
    LayoutStore.prototype.setWindowInnerWidth = function (value) {
        this._layoutState.next(Object.assign(this._layoutState.value, { windowInnerWidth: value }));
    };
    return LayoutStore;
}());
exports.LayoutStore = LayoutStore;
//# sourceMappingURL=layout.store.js.map