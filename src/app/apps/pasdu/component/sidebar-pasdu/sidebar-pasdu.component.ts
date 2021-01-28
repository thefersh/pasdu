import { Component, OnInit } from '@angular/core';
import { GetAdminMenuInterface } from '../../interfaces/menu.interface';

@Component({
  selector: 'app-sidebar-pasdu',
  templateUrl: './sidebar-pasdu.component.html',
  styleUrls: ['./sidebar-pasdu.component.scss']
})
export class SidebarPasduComponent implements OnInit {
  sidebar: GetAdminMenuInterface[] = [];
  submenu: GetAdminMenuInterface[] = [];
  titleSubmenu = '';

  isOpen = false;
  constructor() {
    this.sidebar = [
      {type: 'link', icon: 'bi bi-house', name: 'Inicio', redirect: '/pasdu', queryparams: {a: 'link', f: 'sidebar'}},
      {type: 'link', icon: 'bi bi-camera-video', name: 'Salon', redirect: '/pasdu/room', queryparams: {a: 'link', f: 'sidebar'}},
    ];
    /*
    this.menu.getSidebar().then(s => {
      s.forEach(x => {
        if (x.type === 'link'){
          this.sidebar.push({
            ...x,
            queryparams: Object.assign({
              from: 'sidebar',
              action: 'link'
            }, x.queryparams)
          });
        }else {
          this.sidebar.push(x);
        }
      });
      this.sidebar.forEach((x, i) => {
        if (typeof x.menu === 'object') {
          x.menu.forEach((m, n) => {
            if (m.type === 'link') {
              this.sidebar[i].menu[n].queryparams = Object.assign({
                from: 'sidebar',
                action: 'link'
              }, this.sidebar[i].menu[n].queryparams);
            }
          });
        }
      });
    });
    */
  }

  ngOnInit(): void {
  }

  changeMenu(submenu: GetAdminMenuInterface[], i: number): void {
    this.isOpen = true;
    this.submenu = submenu;
  }

}

