import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { DomService } from 'src/app/service/dom.service';

@Component({
  selector: 'app-pasdu-layout',
  templateUrl: './pasdu-layout.component.html',
  styleUrls: ['./pasdu-layout.component.scss']
})
export class PasduLayoutComponent implements AfterViewInit {
  @ViewChild('snav') snav: MatSidenav;

  constructor(
    public dom: DomService
  ) {
    this.dom.title.setTitle('Pasdu');
    this.dom.createLinkIcon('apple-touch-icon', '/assets/pasdu/apple-icon-57x57.png', '57x57');
    this.dom.createLinkIcon('apple-touch-icon', '/assets/pasdu/apple-icon-60x60.png', '60x60');
    this.dom.createLinkIcon('apple-touch-icon', '/assets/pasdu/apple-icon-72x72.png', '72x72');
    this.dom.createLinkIcon('apple-touch-icon', '/assets/pasdu/apple-icon-76x76.png', '76x76');
    this.dom.createLinkIcon('apple-touch-icon', '/assets/pasdu/apple-icon-114x114.png', '114x114');
    this.dom.createLinkIcon('apple-touch-icon', '/assets/pasdu/apple-icon-120x120.png', '120x120');
    this.dom.createLinkIcon('apple-touch-icon', '/assets/pasdu/apple-icon-144x144.png', '144x144');
    this.dom.createLinkIcon('apple-touch-icon', '/assets/pasdu/apple-icon-152x152.png', '152x152');
    this.dom.createLinkIcon('apple-touch-icon', '/assets/pasdu/apple-icon-180x180.png', '180x180');
    this.dom.createLinkIcon('icon', '/assets/pasdu/android-icon-192x192.png', '192x192', 'image/png');
    this.dom.createLinkIcon('icon', '/assets/pasdu/favicon-32x32.png', '32x32', 'image/png');
    this.dom.createLinkIcon('icon', '/assets/pasdu/favicon-96x96.png', '96x96', 'image/png');
    this.dom.createLinkIcon('icon', '/assets/pasdu/favicon-16x16.png', '16x16', 'image/png');
    this.dom.meta.addTags([
      {name: 'theme-color', content: '#000'},
      {name: 'msapplication-TileImage', content: '/assets/pasdu/ms-icon-144x144.png'},
      {name: 'msapplication-TileColor', content: '#000'}
    ]);
  }

  ngAfterViewInit(): void {
    if (this.dom.bp !== 'sm' && this.dom.bp !== 'md') {
      setTimeout(()=> this.snav.toggle(true), 500);
    }
  }

  toggle(a?: boolean): void{
    this.snav.toggle();
  }

}