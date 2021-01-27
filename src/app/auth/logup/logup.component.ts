import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';
import { UserService } from 'src/app/service/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-logup',
  templateUrl: './logup.component.html',
  styleUrls: ['./../auth.scss']
})
export class LogupComponent implements OnDestroy {
  appName = environment.name;
  form: FormGroup;
  isSubmit = false;

  userNameValid = false;
  userNameMsg = '';

  userName: Subscription;
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private user: UserService
  ) {
    document.title = 'Registro de usuarios - ' + this.appName.charAt(0).toUpperCase() + this.appName.slice(1);
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
    this.userName = this.form.controls.username.valueChanges.subscribe(u => this.user.verifyUserName(u).then(a => {
      this.userNameValid = !a.exist;
      this.userNameMsg = a.err;
    }).catch(e => {
       this.userNameMsg = 'Ups..., hubo un error de sistema';
       this.userNameValid = false;
    }));
  }

  ngOnDestroy(): void {
    this.userName.unsubscribe();
  }

  submit(): void{
    this.isSubmit = true;
    if (this.form.valid && this.userNameValid) {
      this.auth.createUser(this.form.value).finally(() => this.isSubmit = false);
    }else{
      this.isSubmit = false;
      alert('Complete los datos correctamente');
    }
  }

}
