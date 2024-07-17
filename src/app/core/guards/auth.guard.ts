import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { inject, Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

export const authGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);
  const cookieService: CookieService = inject(CookieService);
  const token = cookieService.get('user_data');
  if (!token) {
    router.navigate(['/auth/login'], {
    }).then(() => {
    });
  }
  return true;
};

@Injectable({
  providedIn: 'root'
})

export class AdminGuard implements CanActivate {
  constructor(private router: Router, private cookieService: CookieService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const userData = JSON.parse(this.cookieService.get('user_data'));
    if (userData.role === 'admin') {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
