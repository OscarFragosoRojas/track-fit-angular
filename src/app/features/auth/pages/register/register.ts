import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { Router } from '@angular/router';
import { DynamicForm } from '../../../../shared/components/dynamic-form/dynamic-form';
import { registerConfig } from './register-config';
import { RegisterCredentials } from '../../../../core/models/user.model';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-register',
  imports: [DynamicForm],
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './register.html',
})
export class Register {
  registerConfig = registerConfig;
  private authService = inject(AuthService);
  private router = inject(Router);
  
  login() {
    this.router.navigate(['/login']);
  }

  register(newUser: RegisterCredentials) {
    this.authService.register(newUser).subscribe({
      next: (response) => {
        //this.router.navigate(['/dashboard']);
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
