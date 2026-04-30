import { Component } from '@angular/core';
import { DynamicForm } from "../../../../shared/components/dynamic-form/dynamic-form";
import { registerConfig } from './register-config';

@Component({
  selector: 'app-register',
  imports: [DynamicForm],
  templateUrl: './register.html',
})
export class Register {
  registerConfig = registerConfig;
}
