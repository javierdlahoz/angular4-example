import 'rxjs/add/operator/finally';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { environment } from '../../environments/environment';
import { Logger } from '../core/logger.service';
import { AuthService } from '../services/auth.service';

const log = new Logger('Login');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  version: string = environment.version;
  error: string = null;
  isLoading = false;
  loginForm: FormGroup;
  user: Object;
  myUser: Object;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private authService: AuthService) {
    this.createForm();
  }

  ngOnInit() { }

  login() {
    this.isLoading = true;
    this.authService.login(this.loginForm.value).then((data) => {
      this.user = data.user;
      this.router.navigate(['/']); 
    });
  }

  private createForm() {
    this.loginForm = this.formBuilder.group({
      email: ['javier@mkitdigital.com', Validators.required],
      password: ['12345', Validators.required],
      remember: true
    });
  }
}
