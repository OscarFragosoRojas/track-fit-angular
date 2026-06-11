import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.html',
})
export class Card {
  @Input() class?: string;
  @Input() hasHeader: boolean = false;
  @Input() hasFooter: boolean = false;
}
