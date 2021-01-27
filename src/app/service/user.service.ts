import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private snackbar: MatSnackBar
  ) { }

  verifyUserName(data: any): Promise<any> {
    return new Promise((res, err) => {
      if (environment.enableApi) {} else {
        this.snackbar.open(
          'Lo sentimos, pero nuestros servicios estan en mantenimiento',
          'x',
          {duration: 2000}
        );
        err();
      }
    });
  }
}
