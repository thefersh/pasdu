import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePasduComponent } from './page/home-pasdu/home-pasdu.component';
import { PasduLayoutComponent } from './pasdu-layout/pasdu-layout.component';

const routes: Routes = [
  {path: '', component: PasduLayoutComponent, children: [
      {path: '', component: HomePasduComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PasduRoutingModule { }
