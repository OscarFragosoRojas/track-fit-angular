import { Component, Input } from '@angular/core';
import { KPI } from '../../types/component-types';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-stat-card',
  imports: [CardModule],
  templateUrl: './stat-card.html',
})
export class StatCard {
  @Input() kpi!: KPI;
}
