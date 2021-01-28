import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class DomService {
  bp: 'sm' | 'md' | 'lg' | 'xl'; /** Tamaño de pantalla actual */
  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    @Inject(DOCUMENT) private document: Document,
    public title: Title,
    public meta: Meta
  ) { }

  isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  createLinkIcon(rel: string, href: string, size: string, type?: string): void {
    const link = this.document.createElement('link');
    link.rel = rel;
    link.href = href;
    link.setAttribute('sizes', size);
    if (typeof type !== 'undefined') {
      link.setAttribute('type', type);
    }
    this.document.querySelectorAll('head')[0].appendChild(link);
  }

}
