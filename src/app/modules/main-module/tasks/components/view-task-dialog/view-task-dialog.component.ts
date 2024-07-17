import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-view-task-dialog',
  standalone: true,
  imports: [
    TranslateModule,
    CommonModule,
    ButtonModule
  ],
  templateUrl: './view-task-dialog.component.html',
  styleUrl: './view-task-dialog.component.scss'
})
export class ViewTaskDialogComponent {
  constructor(
    public config: DynamicDialogConfig,
    public ref: DynamicDialogRef,){}
}
