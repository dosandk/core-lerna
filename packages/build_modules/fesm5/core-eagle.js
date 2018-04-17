import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CoreComponent = /** @class */ (function () {
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
    { type: Component, args: [{
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
var LoginComponent = /** @class */ (function () {
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
    { type: Component, args: [{
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
var MenuComponent = /** @class */ (function () {
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
    { type: Component, args: [{
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
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    return CoreModule;
}());
CoreModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule.forChild([
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { CoreModule, LoginComponent, MenuComponent, CoreComponent as ɵa };
//# sourceMappingURL=core-eagle.js.map
