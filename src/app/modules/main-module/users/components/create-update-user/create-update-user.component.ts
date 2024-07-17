import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { UsersService } from '../../users.service';
import { InputMaskModule } from 'primeng/inputmask';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { ImageSelectorWithGalleryComponent } from '../../../../../core/reusable-components/image-selector-with-gallery/image-selector-with-gallery.component';
import { GlobalFunctionsService } from '../../../../../core/services/global-functions.service';
import { PasswordCriteriaService } from '../../../../../core/services/password-criteria.service';
import { DropdownModule } from 'primeng/dropdown';
import { DialogButtonsComponent } from '../../../../../core/reusable-components/dialog-buttons/dialog-buttons.component';

@Component({
  selector: 'app-create-update-user',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    DialogButtonsComponent,
    InputTextModule,
    InputMaskModule,
    FloatLabelModule,
    CommonModule,
    PasswordModule,
    ImageSelectorWithGalleryComponent,
    DropdownModule,
    DividerModule
  ],
  templateUrl: './create-update-user.component.html',
  styleUrl: './create-update-user.component.scss'
})
export class CreateUpdateUserComponent {
  userForm!: FormGroup;
  loading = false;
  action_button = this.config.data ? () => { this.editUser() } : () => { this.addUser() }
  role: string[] = [
    "admin",
    "manager",
    "user"
  ]
  constructor(
    private fb: FormBuilder,
    public config: DynamicDialogConfig,
    public ref: DynamicDialogRef,
    public passwordCriteriaService: PasswordCriteriaService,
    public global: GlobalFunctionsService,
    public usersService: UsersService) { }

  ngOnInit(): void {
    this.initForm();
    if (this.config.data) {
      this.patchValues();
    }
  }

  initForm() {
    this.userForm = this.fb.group({
      avatar: [null, Validators.required],
      first_name: [null, Validators.required],
      last_name: [null, Validators.required],
      email: [null, Validators.required],
      role: [null, Validators.required],
      phone_number: [null, Validators.required],
      national_id: [null, Validators.required],
      password: [null, [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&#])(?=.{8,})/)]],
      confirm_password: [null, Validators.required],
    }, { validators: this.passwordsMatchValidator });
    if (this.config.data) {
      this.userForm.removeControl("password");
      this.userForm.removeControl("confirm_password");
    }
    this.passwordCriteriaService.formGroupKey = this.userForm.get('password')

  }

  passwordsMatchValidator(form: FormGroup) {
    if (form.get('password')?.value !== form.get('confirm_password')?.value) {
      form.get('confirm_password')?.setErrors({ passwordsMatch: true });
    } else {
      form.get('confirm_password')?.setErrors(null);
    }
    return null;
  }



  patchValues(): void {
    this.userForm.patchValue({
      avatar: this.config.data.avatar,
      first_name: this.config.data.first_name,
      last_name: this.config.data.last_name,
      role: this.config.data.role,
      email: this.config.data.email,
      phone_number: this.config.data.phone_number,
      national_id: this.config.data.national_id,
    });
  }

  addUser() {
    this.loading = true;
    // this.usersService.addUser(this.userForm).subscribe({
    //   next: (res) => {
    //     this.global.throwSuccessMessage(this.global.currentLanguage === 'ar' ? 'تم الإضافة بنجاح' : 'Added successfully', 'post')
    //     this.ref.close('Done');
    //   },
    //   error: (err) => {
    //     this.loading = false;
    //     this.global.throwErrorMessage(err);
    //   }
    // })
  }
  editUser() {
    this.loading = true;
    // this.usersService.editUser(this.config.data.id, this.global.convertFBToFD(this.userForm, this.config.data)).subscribe({
    //   next: (res) => {
    //     this.global.throwSuccessMessage(this.global.currentLanguage === 'ar' ? 'تم التعديل بنجاح' : 'Edited successfully', 'patch')
    //     this.ref.close('Done');
    //   },
    //   error: (err) => {
    //     this.loading = false;
    //     this.global.throwErrorMessage(err);
    //   }
    // })
  }

}
