import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CoreComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
CoreComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-core',
                template: `<h1>Core Component</h1>
<ul>
  <li>
    <a routerLink="/" routerLinkActive="active">Home</a>
  </li>
  <li>
    <a routerLink="login" routerLinkActive="active">Login</a>
  </li>
  <li>
    <a routerLink="menu" routerLinkActive="active">Menu</a>
  </li>
</ul>

<router-outlet></router-outlet>
`,
                styles: [``]
            },] },
];
/** @nocollapse */
CoreComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LoginComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
LoginComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-login',
                template: `<h1>Login Component</h1>
<ul>
  <li>
    <a routerLink="/" routerLinkActive="active">Home</a>
  </li>
</ul>
`,
                styles: [``]
            },] },
];
/** @nocollapse */
LoginComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MenuComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
MenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-menu',
                template: `<h1>Menu component</h1>
<ul>
  <li>
    <a routerLink="/" routerLinkActive="active">Home</a>
  </li>
</ul>
`,
                styles: [``]
            },] },
];
/** @nocollapse */
MenuComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
console.error('riba');
class CoreModule {
}
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
