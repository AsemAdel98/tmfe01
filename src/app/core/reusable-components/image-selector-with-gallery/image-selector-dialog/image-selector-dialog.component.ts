import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { TabViewModule } from 'primeng/tabview';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { GlobalFunctionsService } from '../../../services/global-functions.service';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-image-selector-dialog',
  templateUrl: './image-selector-dialog.component.html',
  styleUrl: './image-selector-dialog.component.scss',
  standalone: true,
  imports: [CommonModule,
    SelectButtonModule,
    TabViewModule,
    FormsModule,
    FileUploadModule,
    ButtonModule,
    ReactiveFormsModule,
    RadioButtonModule,
    ToggleButtonModule,
    TranslateModule
  ],
})
export class ImageSelectorDialogComponent {
  selectedValue!: File | string;
  validForm: boolean = true;
  selectedImage: boolean = false;
  selectedImgForm = new FormGroup({
    imageValue: new FormControl(),
  });
  constructor(
    public config: DynamicDialogConfig,
    public ref: DynamicDialogRef,
    public global: GlobalFunctionsService,) { };

  convertImageToFormData(event: any) {
    const imagegSrc = event.value;
    const image = new Image();
    image.crossOrigin = 'Anonymous';
    image.src = imagegSrc;
    image.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = image.width;
      canvas.height = image.height;
      const ctx = canvas.getContext('2d');
      ctx?.drawImage(image, 0, 0);
      canvas.toBlob((blob) => {
        if (blob) {
          const blobWithExtension = new Blob([blob], { type: 'image/png' });
          const file = new File([blobWithExtension], imagegSrc, { type: 'image/png' });
          this.selectedImgForm.get('imageValue')?.setValue({file:file,image:image.src})
        }
      }, 'image/png');
    };
    this.validForm = false;
  }

  onUploadImage(image: any) {
    this.validForm = false;
    this.selectedImage = true;
    this.selectedImgForm.get('imageValue')?.setValue(image)
  }

  removeFile(): void {
    this.selectedImgForm.get('imageValue')?.setValue(null);
    this.validForm = true;
  }

  handleGetImage() {
    const image = this.selectedImgForm.get('imageValue')?.value;
    this.ref.close(image);
  }




}
