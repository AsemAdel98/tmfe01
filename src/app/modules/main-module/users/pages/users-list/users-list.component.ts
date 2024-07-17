import { Component } from '@angular/core';
import { CreateUpdateUserComponent } from '../../components/create-update-user/create-update-user.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { User, UsersService } from '../../users.service';
import { MenuItem } from 'primeng/api';
// import { DeleteDialogComponent } from 'src/app/core/reusable-components/delete-button/delete-dialog/delete-dialog.component';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { GlobalFunctionsService } from '../../../../../core/services/global-functions.service';
import { DeleteDialogComponent } from '../../../../../core/reusable-components/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
  analytics: any;
  users: any;
  ref: DynamicDialogRef | undefined;
  userRole!:string;
  userId!:number;
  columns = [
    'USERS.FULL_NAME',
    'USERS.PHONE',
    'USERS.EMAIL',
    'USERS.ROLE',
    'USERS.ID',
    'GENERAL.ACTIONS'
  ];;
  items!: MenuItem[]
  constructor(public usersService: UsersService, private router: Router, public global: GlobalFunctionsService, public dialogService: DialogService, private cookieService: CookieService) { }
  ngOnInit() {
    const userDataString = this.cookieService.get('user_data');
    this.userRole = JSON.parse(userDataString).role;
    this.userId = JSON.parse(userDataString).user_id;
    this.handleGetUsers();
  }

  getUserData(userData: any) {
    this.items = [
      {
        label: 'GENERAL.EDIT',
        icon: 'pi pi-pen-to-square mx-2',
        command: () => this.createUpdateUser(userData)
      },
    ]
    if (this.userRole === 'admin' && userData.id !== this.userId) {
      this.items.push({
        label: 'GENERAL.DELETE',
        icon: 'pi pi-trash mx-2',
        command: () => this.openDeleteDialog(userData)
      });
    }
  }
  handleGetUsers(): void {
    this.users = this.usersService.getUsers()
    this.analytics = {
      size: 4,
      data: [
        {
          name: 'USERS.TOTAL_USERS',
          icon: 'People',
          value: this.users.length,
        },
        {
          name: 'USERS.TOP_USERS',
          icon: 'person_add',
          value: 0,
        },
        {
          name: 'USERS.LOWEST_USERS',
          icon: 'person_remove',
          value: 0,
        },
      ]
    }
  }



  createUpdateUser(userData = ''): void {
    const title = this.global.currentLanguage === 'ar' ? 'إضافة مستخدم' : 'Add new user';
    const editTitle = this.global.currentLanguage === 'ar' ? 'تعديل المستخدم' : 'Edit user';
    this.ref = this.dialogService.open(CreateUpdateUserComponent, {
      header: userData ? editTitle : title,
      maximizable: true,
      draggable: true,
      width: '60vw',
      breakpoints: { '1199px': '75vw', '575px': '90vw', '480px': '80vw' },
      data: userData
    });
    this.ref.onClose.subscribe((res) => {
    })
  }

  openDeleteDialog(userData: User): void {
    const title = this.global.currentLanguage === 'ar' ? 'حذف' : 'Delete';
    this.ref = this.dialogService.open(DeleteDialogComponent, {
      header: title + ' ' + userData.first_name + ' ' + userData.last_name,
      closeOnEscape: true,
      draggable: true,
      breakpoints: { '1199px': '75vw', '575px': '90vw' },
      width: '50vw',
      data: {
        name: userData.first_name + ' ' + userData.last_name,
        apiService: ''
      },
    });
    this.ref?.onClose.subscribe((res) => {
    })
  }


}

