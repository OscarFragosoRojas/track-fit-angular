import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StepperModule } from 'primeng/stepper';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { InputNumberModule } from 'primeng/inputnumber';
import { DatePickerModule } from 'primeng/datepicker';
import { Button } from '../../../../shared/components/button/button';
import { PatientService } from '../../../../core/services/patient.service';
import { PatientGender, PatientGoal, CreatePatientDto } from '../../../../core/models/patient.model';

@Component({
  selector: 'app-patient-new',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StepperModule,
    InputTextModule,
    SelectModule,
    InputNumberModule,
    DatePickerModule,
    Button,
  ],
  templateUrl: './patient-new.html',
})
export class PatientNew {
  private fb = inject(FormBuilder);
  private patientService = inject(PatientService);
  private router = inject(Router);

  activeStep = signal(0);
  isSubmitting = signal(false);

  genderOptions: { label: string; value: PatientGender }[] = [
    { label: 'Masculino', value: 'male' },
    { label: 'Femenino', value: 'female' },
    { label: 'Otro', value: 'other' },
  ];

  goalOptions: { label: string; value: PatientGoal }[] = [
    { label: 'Pérdida de Peso', value: 'weight-loss' },
    { label: 'Hipertrofia', value: 'hypertrophy' },
    { label: 'Mantenimiento', value: 'maintenance' },
    { label: 'Resistencia', value: 'endurance' },
    { label: 'Rehabilitación', value: 'rehabilitation' },
  ];

  personalForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    lastName:  ['', [Validators.required, Validators.minLength(2)]],
    email:     ['', [Validators.required, Validators.email]],
    phone:     ['', Validators.required],
    dateOfBirth: [null as Date | null, Validators.required],
    gender:    [null as PatientGender | null, Validators.required],
  });

  statsForm = this.fb.group({
    heightCm:   [null as number | null, [Validators.required, Validators.min(100), Validators.max(250)]],
    weightKg:   [null as number | null, [Validators.required, Validators.min(20),  Validators.max(300)]],
    bodyFatPct: [null as number | null, [Validators.min(1), Validators.max(70)]],
    goal:       [null as PatientGoal | null, Validators.required],
  });

  nextStep() {
    if (this.personalForm.valid) this.activeStep.set(1);
    else this.personalForm.markAllAsTouched();
  }

  prevStep() { this.activeStep.set(0); }

  submit() {
    if (this.statsForm.invalid) {
      this.statsForm.markAllAsTouched();
      return;
    }
    this.isSubmitting.set(true);
    const pf = this.personalForm.value;
    const sf = this.statsForm.value;

    const dto: CreatePatientDto = {
      firstName:   pf.firstName!,
      lastName:    pf.lastName!,
      email:       pf.email!,
      phone:       pf.phone!,
      dateOfBirth: (pf.dateOfBirth as Date).toISOString().split('T')[0],
      gender:      pf.gender!,
      physicalStats: {
        heightCm:   sf.heightCm!,
        weightKg:   sf.weightKg!,
        bodyFatPct: sf.bodyFatPct ?? undefined,
        goal:       sf.goal!,
      },
    };

    this.patientService.create(dto);
    this.router.navigate(['/patients']);
  }

  cancel() { this.router.navigate(['/patients']); }

  // Helper for error display
  hasError(form: 'personal' | 'stats', field: string): boolean {
    const ctrl = form === 'personal' ? this.personalForm.get(field) : this.statsForm.get(field);
    return !!(ctrl?.invalid && ctrl?.touched);
  }
}
