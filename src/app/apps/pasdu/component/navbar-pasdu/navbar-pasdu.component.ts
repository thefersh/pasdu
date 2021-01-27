import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { DomService } from 'src/app/service/dom.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navbar-pasdu',
  templateUrl: './navbar-pasdu.component.html',
  styleUrls: ['./navbar-pasdu.component.scss']
})
export class NavbarPasduComponent implements OnInit {
  appName = environment.name;
  @Output() toggle: EventEmitter<boolean> = new EventEmitter();

  constructor(
    public dom: DomService
  ) { }

  ngOnInit(): void {
  }

  sidebarToggle(): void {
    this.toggle.emit(true);
  }

}