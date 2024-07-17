import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { SecureInnerPagesGuard } from './core/guards/secure-inner-pages.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/modules.module').then(b => b.ModulesModule),
    canActivate: [authGuard],
  },
  {
    path: 'auth',
    loadChildren: () => import('./core/auth/auth.module').then(b => b.AuthModule),
    canActivate: [SecureInnerPagesGuard]
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
