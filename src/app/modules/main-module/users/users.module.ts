import { TableModule } from 'primeng/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { CreateUpdateUserComponent } from './components/create-update-user/create-update-user.component';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { CardModule } from 'primeng/card';
import { AnalyticsCardComponent } from '../../../core/reusable-components/analytics-card/analytics-card.component';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { TranslateModule } from '@ngx-translate/core';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { MenuModule } from 'primeng/menu';


@NgModule({
  declarations: [
    UsersListComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    // TitleBreadcrumbsComponent,
    // NoDataComponent,
    TableModule,
    CardModule,
    AnalyticsCardComponent,
    ButtonModule,
    FloatLabelModule,
    TranslateModule.forChild(),
    // PaginationComponent,
    DynamicDialogModule,
    MenuModule
  ]
})
export class UsersModule { }
