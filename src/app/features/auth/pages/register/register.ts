import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { DynamicForm } from '../../../../shared/components/dynamic-form/dynamic-form';
import { registerConfig } from './register-config';

@Component({
  selector: 'app-register',
  imports: [DynamicForm],
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './register.html',
})
export class Register {
  registerConfig = registerConfig;

  constructor(private router: Router) {}

  login() {
    this.router.navigate(['/login']);
  }
}
