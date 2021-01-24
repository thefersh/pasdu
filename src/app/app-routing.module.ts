import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { LogupComponent } from './auth/logup/logup.component';
import { LayoutComponent } from './layout/layout.component';
import { IndexTermsComponent } from './terms/index-terms/index-terms.component';
import { SiteTermsComponent } from './terms/site-terms/site-terms.component';
import { UserTermsComponent } from './terms/user-terms/user-terms.component';

const routes: Routes = [
  {path: '', redirectTo: '/app', pathMatch: 'full'},
  {path: '', component: LayoutComponent, children: []},
  {path: 'login', component: LoginComponent},
  {path: 'logup', component: LogupComponent},
  {path: 'terms', component: IndexTermsComponent, children: [
    {path: '', component: SiteTermsComponent},
    {path: 'user', component: UserTermsComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
