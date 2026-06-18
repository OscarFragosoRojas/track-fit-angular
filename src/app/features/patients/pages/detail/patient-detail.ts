import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { TabsModule } from 'primeng/tabs';
import { BadgeModule } from 'primeng/badge';
import { Button } from '../../../../shared/components/button/button';
import { PatientService } from '../../../../core/services/patient.service';
import { GOAL_LABELS, GOAL_SEVERITY, STATUS_LABELS, STATUS_SEVERITY } from '../../../../core/models/patient.model';

@Component({
  selector: 'app-patient-detail',
  standalone: true,
  imports: [CommonModule, TabsModule, BadgeModule, Button],
  templateUrl: './patient-detail.html',
})
export class PatientDetail {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private patientService = inject(PatientService);

  patient = computed(() => {
    const id = this.route.snapshot.paramMap.get('id')!;
    return this.patientService.getById(id);
  });

  goalLabel  = computed(() => this.patient() ? GOAL_LABELS[this.patient()!.physicalStats.goal]  : '');
  goalSev    = computed(() => this.patient() ? GOAL_SEVERITY[this.patient()!.physicalStats.goal] : '');
  statusLabel = computed(() => this.patient() ? STATUS_LABELS[this.patient()!.status]            : '');
  statusSev   = computed(() => this.patient() ? STATUS_SEVERITY[this.patient()!.status]          : '');

  getAge(dob: string): number {
    const today = new Date();
    const birth = new Date(dob);
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
    return age;
  }

  goBack() { this.router.navigate(['/patients']); }
}
