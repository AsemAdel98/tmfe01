import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './main-module/home/home.component';
import { AdminGuard } from '../core/guards/auth.guard';
import { UserProfileComponent } from './main-module/users/pages/user-profile/user-profile.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent, data: { title: 'DASHBOARD' } },
      {
        path: 'users',
        loadChildren: () => import('./main-module/users/users.module').then(b => b.UsersModule),
        canActivate:[AdminGuard]
      },
      {
        path: 'tasks',
        loadChildren: () => import('./main-module/tasks/tasks.module').then(b => b.TasksModule),
      },
      { path: 'user-profile', component: UserProfileComponent, data: { title: 'USER_PROFILE' } },
    ]
  },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
