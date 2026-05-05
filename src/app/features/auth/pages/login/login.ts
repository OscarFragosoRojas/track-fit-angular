import { Component, inject } from '@angular/core';
import { DynamicForm } from '../../../../shared/components/dynamic-form/dynamic-form';
import { loginConfig } from './login-config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [DynamicForm],
  templateUrl: './login.html',
})
export class Login {
  loginConfig = loginConfig;

  router = inject(Router);

  register() {
    this.router.navigate(['/register']);
  }

  forgotPassword() {
    this.router.navigate(['/forgot-password']);
  }

  submit() {
    this.router.navigate(['/dashboard']);
  }
}
