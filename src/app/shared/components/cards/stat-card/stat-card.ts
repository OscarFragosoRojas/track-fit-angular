import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KPI } from '../../types/component-types';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-stat-card',
  imports: [CardModule, CommonModule],
  templateUrl: './stat-card.html',
})
export class StatCard {
  @Input() kpi!: KPI;
}
