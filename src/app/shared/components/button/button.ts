import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-button',
  imports: [ButtonModule],
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './button.html',
})
export class Button {
  // Text and Icons
  label = input<string>();
  icon = input<string>();
  iconPos = input<'left' | 'right' | 'top' | 'bottom'>('left');

  // State
  disabled = input<boolean>(false);
  type = input<'button' | 'submit' | 'reset'>('button');

  // Styling & Variants (PrimeNG properties)
  severity = input<
    'success' | 'info' | 'warn' | 'danger' | 'help' | 'primary' | 'secondary' | 'contrast'
  >('primary');
  size = input<'small' | 'large' | undefined>(undefined);
  outlined = input<boolean>(false);
  text = input<boolean>(false);
  raised = input<boolean>(false);
  rounded = input<boolean>(false);
  fluid = input<boolean>(false); // 100% width
  styleClass = input<string>(''); // Custom tailwind classes

  // Event
  onClick = output<MouseEvent>();

  handleOnClick(event: MouseEvent) {
    if (!this.disabled()) {
      this.onClick.emit(event);
    }
  }
}
