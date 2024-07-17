import { ImageModule } from 'primeng/image';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AvatarModule } from 'primeng/avatar';
import { CardModule } from 'primeng/card';
import { CookieService } from 'ngx-cookie-service';
import { User } from '../../users.service';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [
    TranslateModule,
    CommonModule,
    CardModule,
    CommonModule,
    AvatarModule,
    ImageModule
  ],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {
  userData!:User;
  constructor(public cookieService: CookieService) { }


  ngOnInit(): void {
    const userDataString = this.cookieService.get('user_data');
    this.userData = JSON.parse(userDataString);
  }

}
