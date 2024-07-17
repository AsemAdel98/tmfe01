import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CommonModule } from '@angular/common';
import {  DynamicDialogRef } from 'primeng/dynamicdialog';
import { GlobalFunctionsService } from '../../../../../core/services/global-functions.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-need-details-dialog',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    ButtonModule,
    FloatLabelModule,
    InputTextareaModule,
    CommonModule,
  ],
  templateUrl: './need-details-dialog.component.html',
  styleUrl: './need-details-dialog.component.scss'
})
export class NeedDetailsDialogComponent {
  taskForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    public ref: DynamicDialogRef,
    public global: GlobalFunctionsService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.taskForm = this.fb.group({
      more_details: [null, Validators.required],
    });
  }


  addUser() {
    console.log(this.taskForm.value);
    this.ref.close('close')
  }

}
