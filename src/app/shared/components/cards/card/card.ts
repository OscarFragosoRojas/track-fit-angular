import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './card.html',
})
export class Card {
  @Input() class?: string;
  @Input() hasHeader: boolean = false;
  @Input() hasFooter: boolean = false;
}
