import { Component, OnInit }        from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import {Angular2TokenService} from 'angular2-token';
import { AuthService }      from '../auth.service';
import {environment} from '../../../environments/environment';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted: boolean;
  loginForm: FormGroup;

  constructor(
    private tokenService: Angular2TokenService,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.submitted = false;
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    this
      .tokenService
      .init({
        apiBase: environment.apiBaseUrl,
        signInPath: 'auth/sign_in',
        signInRedirect: '/auth/login',
        signOutPath: 'auth/sign_out',
        signOutFailedValidate: true,
        validateTokenPath: 'auth/validate_token',
      });
  }

  submit(value: any) {
    this.submitted = true;
    if (!this.loginForm.valid) { return; }

    this.authService.logIn(value.email, value.password).subscribe(
      this.authService.redirectAfterLogin.bind(this.authService),
      this.afterFailedLogin.bind(this)
    );
  }

  signInWithGithub() {
     this.authService.signInWithGithub().subscribe(
        this.authService.redirectAfterLogin.bind(this.authService),
        this.afterFailedLogin.bind(this)
     );
  }

  afterFailedLogin(errors: any) {
    let parsed_errors = JSON.parse(errors._body).errors;
    for (let attribute in this.loginForm.controls) {
      if (parsed_errors[attribute]) {
        this.loginForm.controls[attribute].setErrors(parsed_errors[attribute]);
      }
    }
    this.loginForm.setErrors(parsed_errors);
  }
}
