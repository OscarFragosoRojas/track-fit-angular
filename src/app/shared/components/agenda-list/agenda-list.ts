import { Component, Input } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import type { AgendaListType } from '../types/component-types';
import { BadgeModule } from 'primeng/badge';
import { getStatusLabel, getStatusSeverity } from '../../utils/agenda-status.util';

@Component({                                
  selector: 'app-agenda-list',
  standalone: true,
  imports: [CommonModule, BadgeModule],
  templateUrl: './agenda-list.html',
})
export class AgendaList {
  @Input() listItems!: AgendaListType; 

  getLabel(status: string) { return getStatusLabel(status); }
  getSeverity(status: string) { return getStatusSeverity(status); }
}
