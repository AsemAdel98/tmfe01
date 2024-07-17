import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { map, Observable, of } from 'rxjs';
import { UsersService } from '../../../modules/main-module/users/users.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router,public cookieService: CookieService,private users:UsersService) { }

  getUserFromToken(token:any):any {
    const userData = {
      user_id: token.id,
      avatar: token.avatar,
      first_name: token.first_name,
      last_name: token.last_name,
      phone_number: token.phone_number,
      email: token.email,
      national_id: token.national_id,
      role: token.role
    };
    const userDataString = JSON.stringify(userData);
    this.cookieService.set('user_data', userDataString, { path: '/' });
  }

  getData(): Observable<any[]> {
    return of(this.users.getUsers());
  }

  findUserByEmail(email: string): Observable<any> {
    return this.getData().pipe(
      map(users => users.find(user => user.email === email))
    );
  }

  //logout func
  logout() {
    this.router.navigate(['/auth/login'])
    this.cookieService.deleteAll();
    localStorage.clear();
    window.location.reload();  }
}
