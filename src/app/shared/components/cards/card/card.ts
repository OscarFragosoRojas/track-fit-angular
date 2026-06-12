import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, CardModule],
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './card.html',
  host: {
    '[class]': 'size'
  }
})
export class Card {
  @Input() title!: string;
  @Input() size: string = 'col-span-12 lg:col-span-8';
  @Input() hoverClass: string = 'hover:shadow-primary/10 hover:-translate-y-1';

}
