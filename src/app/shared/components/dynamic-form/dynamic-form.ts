import { Component, input, linkedSignal, output, ChangeDetectionStrategy } from '@angular/core';
import { form, FormField, FormRoot } from '@angular/forms/signals';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { PasswordModule } from 'primeng/password';
import { DynamicField, DynamicButton } from '../types/component-types';
import { Button } from '../button/button';

@Component({
  selector: 'app-dynamic-form',
  imports: [FormField, FormRoot, InputTextModule, Button, CheckboxModule, PasswordModule],
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './dynamic-form.html',
})
export class DynamicForm {

  fields = input<DynamicField[]>([]);
  buttons = input<DynamicButton[]>([]);
  onSubmit = output<any>();

  formModel = linkedSignal(() => {
    const initialValues: Record<string, any> = {};
    const flds = this.fields() || [];
    flds.forEach((f) => {
      initialValues[f.key] = f.type === 'checkbox' ? false : '';
    });
    return initialValues;
  });

  dynamicForm = form(this.formModel, {
    submission: {
      action: async (f) => {
        const values = f().value();
        console.log('Form values submitted:', values);
        this.onSubmit.emit(values);
      },
    },
  });

  getField(key: string): any {
    return (this.dynamicForm as any)[key];
  }
}
