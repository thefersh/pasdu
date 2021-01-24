import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { DomService } from './services/dom.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private route = '';
  private oldRoute = '';
  private params = {};
  private oldParams = {};

  constructor(
    private dom: DomService,
    private router: Router,
    private activateRouter: ActivatedRoute
  ) {
    if (this.dom.isBrowser()) {
      this.activateRouter.queryParams.subscribe((p) => {
        this.oldParams = this.params;
        this.params = p;
      });

      this.router.events.subscribe((e) => {
        if (e instanceof NavigationEnd) {
          this.oldRoute = this.route;
          this.route = window.location.pathname;
          localStorage.setItem('back', this.oldRoute);
          localStorage.setItem('backParams', JSON.stringify(this.oldParams));
        }
      });
    }
  }
}
