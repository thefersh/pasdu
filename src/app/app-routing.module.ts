import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { LogupComponent } from './auth/logup/logup.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/pasdu'},
  {path: 'pasdu', loadChildren: () => import('./apps/pasdu/pasdu.module').then(p => p.PasduModule)},
  {path: 'auth/login', component: LoginComponent},
  {path: 'auth/login', component: LogupComponent},

  {path: 'login', pathMatch: 'full', redirectTo: 'auth/login'},
  {path: 'logup', pathMatch: 'full', redirectTo: 'auth/logup'},
  {path: 'signin', pathMatch: 'full', redirectTo: 'auth/login'},
  {path: 'signup', pathMatch: 'full', redirectTo: 'auth/logup'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
