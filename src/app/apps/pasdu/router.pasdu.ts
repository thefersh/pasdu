import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePasduComponent } from './page/home-pasdu/home-pasdu.component';
import { RoomPasduComponent } from './page/room-pasdu/room-pasdu.component';
import { RoomViewPasduComponent } from './page/room-view-pasdu/room-view-pasdu.component';
import { PasduLayoutComponent } from './pasdu-layout/pasdu-layout.component';

const routes: Routes = [
  {path: '', component: PasduLayoutComponent, children: [
      {path: '', component: HomePasduComponent}
  ]},
  {path: 'room', component: RoomPasduComponent},
  {path: 'room/:room', component: RoomViewPasduComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PasduRoutingModule { }
