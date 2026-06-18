import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { BadgeModule } from 'primeng/badge';

export interface ClinicTask {
  id: string;
  title: string;
  patient: string;
  completed: boolean;
  type: 'urgent' | 'routine' | 'followup';
}

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule, CheckboxModule, BadgeModule],
  templateUrl: './task-list.html',
})
export class TaskList {
  @Input() tasks: ClinicTask[] = [];

  toggleTask(task: ClinicTask) {
    task.completed = !task.completed;
  }

  getCompletedCount(): number {
    return this.tasks?.filter(t => t.completed).length || 0;
  }
}
