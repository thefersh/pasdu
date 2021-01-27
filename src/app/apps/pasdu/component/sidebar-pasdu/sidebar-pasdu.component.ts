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
      {type: 'menu', name: 'Pasdu (super)', icon: 'bi bi-building', menu: [
        {type: 'link', name: 'Inicio', icon: 'bi bi-house', redirect: '/super', queryparams: {a: 'link', f: 'sidebar'}},
        {type: 'title', name: 'Institucion'},
        {type: 'link', name: 'Añadir', icon: 'bi bi-building', redirect: '/super/institution/add', queryparams: {a: 'link', f: 'sidebar'}},
      ]},
      {type: 'menu', icon: 'bi bi-briefcase', name: 'inst (Profesor)', menu: [
        {type: 'link', icon: 'bi bi-card-image', name: 'NameClase', redirect: '/course/idclase', queryparams: {a: 'link', f: 'sidebar'}}
      ]},
      {type: 'link', icon: 'bi bi-card-image', name: 'NameClase (Estudiante)', redirect: '/course/idclase', queryparams: {a: 'link', f: 'sidebar'}},
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

