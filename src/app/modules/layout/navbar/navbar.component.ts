import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { GlobalFunctionsService } from '../../../core/services/global-functions.service';
import { ActivationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
import { AuthService } from '../../../core/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  Pagetitle!:string;
  userData:any;
  constructor(public global: GlobalFunctionsService,private router: Router,private authService:AuthService) {}

  ngOnInit():void{
    this.getPageTitle()
    const userDataString = this.authService.cookieService.get('user_data');
    this.userData = JSON.parse(userDataString);
  }
  getPageTitle() {
    this.router.events.pipe(filter(event => event instanceof ActivationStart)).subscribe((event: any) => {
      const data = event['snapshot'].data;
      if (data && data.title) {
        this.Pagetitle = 'SIDEBAR.' + data.title.toUpperCase();
      }
    });
  }

  items: MenuItem[] = [
    {
      label: 'Arabic',
      command: () => {
        this.global.setLanguage('ar');
      }
    },
    {
      label: 'English',
      command: () => {
        this.global.setLanguage('en');
      }
    },
  ]
}
