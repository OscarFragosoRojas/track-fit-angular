import { Component, input, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, CardModule],
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './card.html',
  host: {
    '[class]': 'size()'
  }
})
export class Card {
  title = input<string>('');
  size = input<string>('col-span-12 lg:col-span-8');
  hoverClass = input<string>('hover:shadow-primary/10 hover:-translate-y-1');

}
