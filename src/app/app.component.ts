import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { DomService } from './service/dom.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appName = environment.name;
  bp: 'sm' | 'md' | 'lg' | 'xl'; /** Tamaño de pantalla actual */

  isRoom = true;

  constructor(
    private dom: DomService,
    private router: Router,
    private bpo: BreakpointObserver
  ) {
    /** Vijila las navegacion del usuario */
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.isRoom = !(/login/).test(window.location.pathname) || !(/logup/).test(window.location.pathname);
      }
    });

    /** vijila el tamaño de pantalla */
    this.bpo.observe([
      '(max-width: 767.98px)',
      '(min-width: 768px) and (max-width: 991.98px)',
      '(min-width: 992px) and (max-width: 1199.98px)',
      '(min-width: 1200px)'
    ]).subscribe(s => {
      if (s.breakpoints['(max-width: 767.98px)']) { this.bp = 'sm'; }
      if (s.breakpoints['(min-width: 768px) and (max-width: 991.98px)']) { this.bp = 'md'; }
      if (s.breakpoints['(min-width: 992px) and (max-width: 1199.98px)']) { this.bp = 'lg'; }
      if (s.breakpoints['(min-width: 1200px)']) { this.bp = 'xl'; }
      this.dom.bp = this.bp;
    });
  }
}
