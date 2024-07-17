import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-dialog-buttons',
  templateUrl: './dialog-buttons.component.html',
  styleUrl: './dialog-buttons.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    TranslateModule
  ]
})
export class DialogButtonsComponent {
  constructor(
    public ref: DynamicDialogRef) { }
  @Input() buttons!: () => void;
  @Input() form!: FormGroup;
  @Input() loading!: boolean;
  @Input() type!: 'add' |'edit';

}

export interface dialogButtons {
  editButton?: false | true ;
  action: () => void
}
