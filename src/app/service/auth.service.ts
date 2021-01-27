import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private snackbar: MatSnackBar
  ) { }

  login(data: any): Promise<void> {
    return new Promise((res, err) => {
      if (environment.enableApi) {} else {
        this.snackbar.open(
          'Lo sentimos, pero nuestros servicios estan en mantenimiento',
          'x',
          {duration: 2000}
        );
        res();
      }
    });
  }

  createUser(data: any): Promise<void> {
    return new Promise((res, err) => {
      if (environment.enableApi) {} else {
        this.snackbar.open(
          'Lo sentimos, pero nuestros servicios estan en mantenimiento',
          'x',
          {duration: 2000}
        );
        res();
      }
    });
  }
}
