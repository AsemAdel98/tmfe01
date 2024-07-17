import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';

export const SecureInnerPagesGuard: CanActivateFn = (route, state) => {
  const authService: AuthService = inject(AuthService);
  const cookieService: CookieService = inject(CookieService);
  const router: Router = inject(Router);

  const token = cookieService.get('user_data');
  if (token ) {
    router.navigate(['/']).then(() => {
    });
    return false;
  }
  return true;
};
