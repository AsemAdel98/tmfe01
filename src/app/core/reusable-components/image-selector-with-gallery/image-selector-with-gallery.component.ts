import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { GlobalFunctionsService } from '../../services/global-functions.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ImageSelectorDialogComponent } from './image-selector-dialog/image-selector-dialog.component';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-image-selector-with-gallery',
  templateUrl: './image-selector-with-gallery.component.html',
  styleUrl: './image-selector-with-gallery.component.scss',
  standalone: true,
  imports: [CommonModule, TranslateModule,AvatarModule],
  providers: [DialogService]

})
export class ImageSelectorWithGalleryComponent {
  selectedImage: any;
  @Input() imageArray!: string[];
  @Input() iconArray!: string[];
  @Input() patchImage!: string;
  @Output() selectedImageValue = new EventEmitter<string>();
  ref: DynamicDialogRef | undefined;

  constructor(public global: GlobalFunctionsService, public dialogService: DialogService) {}

  openImageSelectorDialog(): void {
    const title = this.global.currentLanguage === 'ar' ? 'اختر صورة' : 'Select image';

    this.ref = this.dialogService.open(ImageSelectorDialogComponent, {
      header: title,
      draggable: true,
      breakpoints: { '1199px': '75vw', '575px': '90vw' },
      width: '60vw',
      data: {
        imageArray: this.imageArray,
        iconArray: this.iconArray
      },
    });
      this.ref.onClose.subscribe((res) => {
        if (res !== 'cancel') {
          this.selectedImage = res;
          this.selectedImageValue.emit(this.selectedImage.file?this.selectedImage.file:this.selectedImage);
        }
    })
  }

}

