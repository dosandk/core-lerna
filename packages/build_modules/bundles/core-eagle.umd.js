(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('core-eagle', ['exports', '@angular/core', '@angular/common', '@angular/router'], factory) :
    (factory((global['core-eagle'] = {}),global.ng.core,global.ng.common,global.ng.router));
}(this, (function (exports,core,common,router) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var CoreComponent = (function () {
        function CoreComponent() {
        }
        /**
         * @return {?}
         */
        CoreComponent.prototype.ngOnInit = function () {
        };
        return CoreComponent;
    }());
    CoreComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'app-core',
                    template: "<h1>Core Component</h1>\n<ul>\n  <li>\n    <a routerLink=\"/\" routerLinkActive=\"active\">Home</a>\n  </li>\n  <li>\n    <a routerLink=\"login\" routerLinkActive=\"active\">Login</a>\n  </li>\n  <li>\n    <a routerLink=\"menu\" routerLinkActive=\"active\">Menu</a>\n  </li>\n</ul>\n\n<router-outlet></router-outlet>\n",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    CoreComponent.ctorParameters = function () { return []; };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var LoginComponent = (function () {
        function LoginComponent() {
        }
        /**
         * @return {?}
         */
        LoginComponent.prototype.ngOnInit = function () {
        };
        return LoginComponent;
    }());
    LoginComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'app-login',
                    template: "<h1>Login Component</h1>\n<ul>\n  <li>\n    <a routerLink=\"/\" routerLinkActive=\"active\">Home</a>\n  </li>\n</ul>\n",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    LoginComponent.ctorParameters = function () { return []; };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MenuComponent = (function () {
        function MenuComponent() {
        }
        /**
         * @return {?}
         */
        MenuComponent.prototype.ngOnInit = function () {
        };
        return MenuComponent;
    }());
    MenuComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'app-menu',
                    template: "<h1>Menu component</h1>\n<ul>\n  <li>\n    <a routerLink=\"/\" routerLinkActive=\"active\">Home</a>\n  </li>\n</ul>\n",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    MenuComponent.ctorParameters = function () { return []; };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    console.error('riba');
    var CoreModule = (function () {
        function CoreModule() {
        }
        return CoreModule;
    }());
    CoreModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule,
                        router.RouterModule.forChild([
                            { path: '', component: CoreComponent },
                            { path: 'menu', component: MenuComponent },
                            { path: 'login', component: LoginComponent }
                        ])
                    ],
                    declarations: [
                        CoreComponent,
                        LoginComponent,
                        MenuComponent
                    ],
                    exports: [CoreComponent, LoginComponent, MenuComponent],
                    entryComponents: [CoreComponent]
                },] },
    ];

    exports.CoreModule = CoreModule;
    exports.LoginComponent = LoginComponent;
    exports.MenuComponent = MenuComponent;
    exports.ɵa = CoreComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=core-eagle.umd.js.map
