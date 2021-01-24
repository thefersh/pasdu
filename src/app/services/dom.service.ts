import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DomService {

  constructor(
    @Inject(PLATFORM_ID) private readonly platformId: object
  ) {
    console.log(this.platformId);
  }

  public isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }
}
