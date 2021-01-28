import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasduLayoutComponent } from './pasdu-layout/pasdu-layout.component';
import { PasduRoutingModule } from './router.pasdu';
import { HomePasduComponent } from './page/home-pasdu/home-pasdu.component';
import { NavbarPasduComponent } from './component/navbar-pasdu/navbar-pasdu.component';
import { SidebarPasduComponent } from './component/sidebar-pasdu/sidebar-pasdu.component';
import { AngularMaterialConfig } from 'src/app/material.conf';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RoomPasduComponent } from './page/room-pasdu/room-pasdu.component';
import { RoomViewPasduComponent } from './page/room-view-pasdu/room-view-pasdu.component';
import { DomService } from 'src/app/service/dom.service';

@NgModule({
  declarations: [
    PasduLayoutComponent,
    HomePasduComponent,
    NavbarPasduComponent,
    SidebarPasduComponent,
    RoomPasduComponent,
    RoomViewPasduComponent
  ],
  imports: [
    CommonModule,
    PasduRoutingModule,
    AngularMaterialConfig,
    NgbModule
  ],
  providers: [
    DomService
  ]
})
export class PasduModule { }
