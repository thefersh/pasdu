import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasduLayoutComponent } from './pasdu-layout/pasdu-layout.component';
import { PasduRoutingModule } from './router.pasdu';
import { HomePasduComponent } from './page/home-pasdu/home-pasdu.component';
import { NavbarPasduComponent } from './component/navbar-pasdu/navbar-pasdu.component';
import { SidebarPasduComponent } from './component/sidebar-pasdu/sidebar-pasdu.component';
import { AngularMaterialConfig } from 'src/app/material.conf';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [PasduLayoutComponent, HomePasduComponent, NavbarPasduComponent, SidebarPasduComponent],
  imports: [
    CommonModule,
    PasduRoutingModule,
    AngularMaterialConfig,
    NgbModule
  ]
})
export class PasduModule { }
