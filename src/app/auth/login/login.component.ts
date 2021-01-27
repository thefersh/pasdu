import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./../auth.scss']
})
export class LoginComponent implements OnInit {
  appName = environment.name;
  form: FormGroup;
  isSubmit = false;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService
  ) {
    document.title = 'Iniciar Sesion - ' + this.appName.charAt(0).toUpperCase() + this.appName.slice(1);
    this.form = this.fb.group({
      user: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  ngOnInit(): void {
  }

  submit(): void {
    this.isSubmit = true;
    if (this.form.valid){
      this.auth.login(this.form.value).finally(() => this.isSubmit = false);
    }else{
      alert('Rellene los datos correctamente');
      this.isSubmit = false;
    }
  }

}
