import { Component } from '@angular/core';
import { DialogButtonsComponent } from '../../../../../core/reusable-components/dialog-buttons/dialog-buttons.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { GlobalFunctionsService } from '../../../../../core/services/global-functions.service';
import { TasksService } from '../../tasks.service';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputMaskModule } from 'primeng/inputmask';
import { CommonModule } from '@angular/common';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { User, UsersService } from '../../../users/users.service';

@Component({
  selector: 'app-create-update-task',
  templateUrl: './create-update-task.component.html',
  styleUrl: './create-update-task.component.scss',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    DialogButtonsComponent,
    InputTextModule,
    InputMaskModule,
    FloatLabelModule,
    InputTextareaModule,
    CommonModule,
    DropdownModule
  ]
})
export class CreateUpdateTaskComponent {
  taskForm!: FormGroup;
  users!:User[];
  action_button = this.config.data ? () => { this.editUser() } : () => { this.addUser() }
  constructor(
    private fb: FormBuilder,
    public config: DynamicDialogConfig,
    public ref: DynamicDialogRef,
    public global: GlobalFunctionsService,
    public usersService: UsersService) { }

  ngOnInit(): void {
    this.initForm();
    this.getUsers();
    if (this.config.data) {
      this.patchValues();
    }
  }

  initForm() {
    this.taskForm = this.fb.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
      user: [null, Validators.required],
    });
  }

getUsers(){
  this.users = this.usersService.getUsers().filter(user => user.role === 'user');

}

  patchValues(): void {
    this.taskForm.patchValue({
      title: this.config.data.title,
      description: this.config.data.description,
      user: this.config.data.assigned_to.id,
    });
  }

  addUser() {
    console.log(this.taskForm.value);
  }
  editUser() {
    console.log(this.taskForm.value);
  }

}
