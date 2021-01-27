import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DomService {
  bp: 'sm' | 'md' | 'lg' | 'xl'; /** Tamaño de pantalla actual */
  constructor() { }
}
