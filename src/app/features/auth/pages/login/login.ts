import { Component, inject } from '@angular/core';
import { DynamicForm } from "../../../../shared/components/dynamic-form/dynamic-form";
import { loginConfig } from './login-config';


@Component({
  selector: 'app-login',
  imports: [DynamicForm],
  templateUrl: './login.html',
})
export class Login {
  loginConfig = loginConfig;
}
