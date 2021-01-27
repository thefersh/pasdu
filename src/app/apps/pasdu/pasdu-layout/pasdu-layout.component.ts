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
  ) {}

  ngAfterViewInit(): void {
    if (this.dom.bp !== 'sm' && this.dom.bp !== 'md') {
      setTimeout(()=> this.snav.toggle(true), 500);
    }
  }

  toggle(a?: boolean): void{
    this.snav.toggle();
  }

}