/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { MenuComponent } from '../menu/menu.component';
export class CoreModule {
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
function CoreModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    CoreModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    CoreModule.ctorParameters;
}
//# sourceMappingURL=core.module.js.map
