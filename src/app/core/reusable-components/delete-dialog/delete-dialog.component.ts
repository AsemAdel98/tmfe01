import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { GlobalFunctionsService } from '../../services/global-functions.service';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrl: './delete-dialog.component.scss',
  standalone: true,
  imports: [
    TranslateModule,
    CommonModule,
    ButtonModule
  ]
})
export class DeleteDialogComponent {
  loading = false;

  constructor(
    public config: DynamicDialogConfig,
    public ref: DynamicDialogRef,
    public global: GlobalFunctionsService) {
  }


  handleDelete() {
    this.loading = true;
    this.ref.close('Done');
      // this.config.data.apiService.subscribe({
      //   next: () => {
      //     this.global.throwMessage(this.config.data?.name,'delete');
      //     this.ref.close('Done');
      //   },
      //   error: (error: any) => {
      //     this.loading = false;
      //     this.global.throwMessage(error,'error');
      //   }
      // });
  }

}
