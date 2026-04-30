import { Component, input, linkedSignal } from '@angular/core';
import { form, FormField, FormRoot } from '@angular/forms/signals';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { PasswordModule } from 'primeng/password';
import { DynamicField, DynamicButton } from '../types/component-types';
import { Button } from '../button/button';

@Component({
  selector: 'app-dynamic-form',
  imports: [FormField, FormRoot, InputTextModule, Button, CheckboxModule, PasswordModule],
  templateUrl: './dynamic-form.html',
})
export class DynamicForm {
  fields = input<DynamicField[]>([]);
  buttons = input<DynamicButton[]>([]);
  
  formModel = linkedSignal(() => {
    const initialValues: Record<string, any> = {};
    const flds = this.fields() || [];
    flds.forEach(f => {
      initialValues[f.key] = f.type === 'checkbox' ? false : '';
    });
    return initialValues;
  });
  
  // The Signal Form instance
  dynamicForm = form(this.formModel);

  // Helper to dynamically get a specific form control from the signal form
  getField(key: string): any {
    // In Signal Forms, child fields are exposed directly as properties on the FieldTree object
    return (this.dynamicForm as any)[key];
  }

  onSubmit(event: Event) {
    event.preventDefault();
    // dynamicForm is a FieldTree (a function), calling it returns the FieldState
    console.log('Form values submitted:', this.dynamicForm().value());
  }
}
