import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { AuthService } from '../../../../core/auth/services/auth.service';
import { GlobalFunctionsService } from '../../../../core/services/global-functions.service';

@Component({
  selector: 'app-warning-logout-dialog',
  templateUrl: './warning-logout-dialog.component.html',
  styleUrl: './warning-logout-dialog.component.scss',
  standalone:true,
  imports: [
    CommonModule,
    ButtonModule,
    TranslateModule,
  ]
})
export class WarningLogoutDialogComponent {
  constructor(
    public ref: DynamicDialogRef,
    private authService:AuthService,
    public global: GlobalFunctionsService) {}

    logout() {
      this.authService.logout();
      this.ref.close();
    }
}
