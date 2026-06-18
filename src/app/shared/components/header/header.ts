import { Component, input, output } from '@angular/core';
import { Button } from '../button/button';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [Button],
  templateUrl: './header.html',
  host: {
    class: 'block w-full col-span-12'
  }
})
export class Header {
    message = input.required<string>();
    subtitle = input<string>();
    showBack = input<boolean>(false);
    backLabel = input<string>('Volver');
    showCreate = input<boolean>(false);
    createLabel = input<string>('Crear');
    createLink = input<string>();
    onBack = output<void>();
    onCreate = output<void>();
}
