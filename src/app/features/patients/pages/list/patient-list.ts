import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { BadgeModule } from 'primeng/badge';
import { TooltipModule } from 'primeng/tooltip';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { Button } from '../../../../shared/components/button/button';
import { PatientService } from '../../../../core/services/patient.service';
import { Header } from '../../../../shared/components/header/header';
import { Patient, GOAL_LABELS, GOAL_SEVERITY, STATUS_LABELS, STATUS_SEVERITY } from '../../../../core/models/patient.model';

@Component({
  selector: 'app-patient-list',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    InputTextModule,
    IconFieldModule,
    InputIconModule,
    BadgeModule,
    TooltipModule,
    ConfirmDialogModule,
    ToastModule,
    Button,
    Header,
  ],
  providers: [ConfirmationService, MessageService],
  templateUrl: './patient-list.html',
})
export class PatientList {
  private patientService = inject(PatientService);
  private router = inject(Router);
  private confirmSvc = inject(ConfirmationService);
  private messageSvc = inject(MessageService);

  patients = this.patientService.patients;
  searchQuery = signal('');

  filteredPatients = computed(() => {
    const q = this.searchQuery().toLowerCase().trim();
    if (!q) return this.patients();
    return this.patients().filter(p =>
      `${p.firstName} ${p.lastName}`.toLowerCase().includes(q) ||
      p.email.toLowerCase().includes(q)
    );
  });

  // Expose helpers to template
  goalLabel = (p: Patient) => GOAL_LABELS[p.physicalStats.goal];
  goalSeverity = (p: Patient) => GOAL_SEVERITY[p.physicalStats.goal];
  statusLabel = (p: Patient) => STATUS_LABELS[p.status];
  statusSeverity = (p: Patient) => STATUS_SEVERITY[p.status];

  getAge(dob: string): number {
    const today = new Date();
    const birth = new Date(dob);
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
    return age;
  }

  navigateToNew() { this.router.navigate(['/patients/new']); }
  navigateToDetail(id: string) { this.router.navigate(['/patients', id]); }

  confirmDelete(patient: Patient) {
    this.confirmSvc.confirm({
      message: `¿Estás seguro de eliminar a ${patient.firstName} ${patient.lastName}?`,
      header: 'Confirmar Eliminación',
      icon: 'pi pi-trash',
      acceptButtonProps: { label: 'Eliminar', severity: 'danger' },
      rejectButtonProps: { label: 'Cancelar', outlined: true },
      accept: () => {
        this.patientService.delete(patient.id);
        this.messageSvc.add({ severity: 'success', summary: 'Eliminado', detail: 'Paciente eliminado correctamente.' });
      },
    });
  }
}
