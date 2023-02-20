import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './core/home/home.component';
import { AuthGuard } from './core/auth/auth.guard';
import { LoginComponent } from './features/login/login.component';
import { HistoryComponent } from './features/history/history.component';
import { CategoriesComponent } from './features/categories/categories.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'history',
    component: HistoryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'categories',
    component: CategoriesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
