import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './admin/login/login.component';
import { SignupComponent } from './admin/signup/signup.component';
import { VerifyEmailComponent } from './admin/verify-email/verify-email.component';
import { ForgotPasswordComponent } from './admin/forgot-password/forgot-password.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { MainComponent } from './pages/main/main.component';

// const routes: Routes = [
//   {path: '', pathMatch: 'full', component: DashboardComponent},
//   {path: 'login', component: LoginComponent, ...canActivate(redirectToDashboard)},
//   {path: 'signup', component: SignupComponent, ...canActivate(redirectToDashboard)},
//   {path: 'dashboard', component: DashboardComponent, ...canActivate(redirectToLogin)},
//   {path: 'profile', component: ProfileComponent, ...canActivate(redirectToLogin)},
//   {path: 'verify-email', component: VerifyEmailComponent},
//   {path: 'forgot-password', component: ForgotPasswordComponent},
//   {path: '**', component: PageNotFoundComponent}

// ];
const routes: Routes = [
  // , pathMatch: 'full'
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./pages/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
        data: { preload: true },
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./pages/profile/profile.module').then((m) => m.ProfileModule),
      },
      {
        path: 'data',
        loadChildren: () =>
          import('./pages/data/data.module').then((m) => m.DataModule),
      },
      {
        path: 'add-details',
        loadChildren: () =>
          import('./pages/add-details/add-details.module').then(
            (m) => m.AddDetailsModule
          ),
      },
      {
        path: 'show-details',
        loadChildren: () =>
          import('./pages/show-details/show-details.module').then(
            (m) => m.ShowDetailsModule
          ),
      },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: 'verify-email', component: VerifyEmailComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: '**', component: PageNotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
