import { SplitButtonModule } from 'primeng/splitbutton';
import { DropdownModule } from 'primeng/dropdown';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { TranslateModule } from '@ngx-translate/core';
import { AuthModule } from '../core/auth/auth.module';
import { MenuModule } from 'primeng/menu';
import { HomeComponent } from './main-module/home/home.component';
import { RippleModule } from 'primeng/ripple';
import { UserProfileComponent } from './main-module/users/pages/user-profile/user-profile.component';


@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    SidebarComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    UserProfileComponent,
    ModulesRoutingModule,
    AuthModule,
    TranslateModule.forChild(),
    MenuModule,
    DropdownModule,
    SplitButtonModule,
    RippleModule
  ],

  exports: [
    LayoutComponent,
    NavbarComponent,
    SidebarComponent,
  ]
})
export class ModulesModule { }
