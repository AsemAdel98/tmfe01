import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
// import { AuthService } from 'src/app/core/auth/services/auth.service';
import { Component, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { WarningLogoutDialogComponent } from './warning-logout-dialog/warning-logout-dialog.component';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { GlobalFunctionsService } from '../../../core/services/global-functions.service';
import { AuthService } from '../../../core/auth/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  avatar: any;
  menuSidebar!: menuSidebar[];
  ref: DynamicDialogRef | undefined;
  userData: any;

  constructor(
    private el: ElementRef,
    public router: Router,
    public global: GlobalFunctionsService,
    public dialogService: DialogService,
    public authService: AuthService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
  }

  ngOnInit(): void {
    const userDataString = this.authService.cookieService.get('user_data');
    this.userData = JSON.parse(userDataString);
    this.getSidebarMenu();
  }
  getSidebarMenu() {
    this.menuSidebar = [
          {
            link_name: "SIDEBAR.DASHBOARD",
            link: "/",
            icon: "Home",
          },
          {
            link_name: "SIDEBAR.TASKS",
            link: "tasks",
            icon: "Task",
          },
    ];
    if (this.userData.role === 'admin') {
      this.menuSidebar.push({
        link_name: "SIDEBAR.USERS",
        link: "/users",
        icon: "Id_Card",
      });
    }
  }

  openLogoutDialog() {
    const title = this.global.currentLanguage === 'ar' ? 'تسجيل الخروج' : 'Logout';
    this.ref = this.dialogService.open(WarningLogoutDialogComponent, {
      header: title,
      draggable: true,
      width: '40vw',
      breakpoints: { '1199px': '75vw', '575px': '90vw', '480px': '80vw' },
    });
  }


}

interface menuSidebar {
  link_name: string,
  link?: string,
  icon: string,
}
