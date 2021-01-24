import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LayoutComponent } from './layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DomService } from './services/dom.service';
import { LoginComponent } from './auth/login/login.component';
import { LogupComponent } from './auth/logup/logup.component';
import { IndexTermsComponent } from './terms/index-terms/index-terms.component';
import { SiteTermsComponent } from './terms/site-terms/site-terms.component';
import { UserTermsComponent } from './terms/user-terms/user-terms.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginComponent,
    LogupComponent,
    IndexTermsComponent,
    SiteTermsComponent,
    UserTermsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [
    DomService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
