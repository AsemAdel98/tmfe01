import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from 'primeng/dragdrop';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksListComponent } from './pages/tasks-list/tasks-list.component';
import { CreateUpdateTaskComponent } from './components/create-update-task/create-update-task.component';
import { TitleBreadcrumbsComponent } from '../../../core/reusable-components/title-breadcrumbs/title-breadcrumbs.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { TranslateModule } from '@ngx-translate/core';
import { WordTruncatePipe } from '../../../core/pipes/word-truncate.pipe';

@NgModule({
  declarations: [
    TasksListComponent,
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    TitleBreadcrumbsComponent,
    DragDropModule,
    CardModule,
    ButtonModule,
    TranslateModule.forChild(),
    MenuModule,
    WordTruncatePipe
  ],

})
export class TasksModule { }
