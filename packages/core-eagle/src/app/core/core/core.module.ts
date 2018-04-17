import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { MenuComponent } from '../menu/menu.component';

@NgModule({
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
})
export class CoreModule { }
