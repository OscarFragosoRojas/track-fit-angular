import { Injectable, signal, computed } from '@angular/core';
import { Patient, CreatePatientDto, PatientStatus } from '../models/patient.model';

const MOCK_PATIENTS: Patient[] = [
  {
    id: '1',
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@email.com',
    phone: '+52 55 1234 5678',
    dateOfBirth: '1992-04-15',
    gender: 'female',
    physicalStats: { heightCm: 165, weightKg: 68, bodyFatPct: 28, goal: 'weight-loss' },
    status: 'active',
    createdAt: '2026-01-10T10:00:00Z',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: '2',
    firstName: 'Alex',
    lastName: 'Johnson',
    email: 'alex.johnson@email.com',
    phone: '+52 55 2345 6789',
    dateOfBirth: '1988-09-22',
    gender: 'male',
    physicalStats: { heightCm: 178, weightKg: 80, bodyFatPct: 18, goal: 'hypertrophy' },
    status: 'active',
    createdAt: '2026-02-03T08:30:00Z',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: '3',
    firstName: 'Maria',
    lastName: 'Garcia',
    email: 'maria.garcia@email.com',
    phone: '+52 55 3456 7890',
    dateOfBirth: '1995-12-05',
    gender: 'female',
    physicalStats: { heightCm: 160, weightKg: 58, bodyFatPct: 22, goal: 'maintenance' },
    status: 'pending',
    createdAt: '2026-05-18T14:00:00Z',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: '4',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@email.com',
    phone: '+52 55 4567 8901',
    dateOfBirth: '1985-07-30',
    gender: 'male',
    physicalStats: { heightCm: 182, weightKg: 95, bodyFatPct: 25, goal: 'hypertrophy' },
    status: 'inactive',
    createdAt: '2025-11-01T09:00:00Z',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

@Injectable({ providedIn: 'root' })
export class PatientService {
  private _patients = signal<Patient[]>(MOCK_PATIENTS);

  readonly patients = computed(() => this._patients());

  getById(id: string): Patient | undefined {
    return this._patients().find(p => p.id === id);
  }

  create(dto: CreatePatientDto): Patient {
    const newPatient: Patient = {
      ...dto,
      id: crypto.randomUUID(),
      status: 'pending' as PatientStatus,
      createdAt: new Date().toISOString(),
    };
    this._patients.update(list => [...list, newPatient]);
    return newPatient;
  }

  update(id: string, dto: Partial<CreatePatientDto>): void {
    this._patients.update(list =>
      list.map(p => p.id === id ? { ...p, ...dto } : p)
    );
  }

  delete(id: string): void {
    this._patients.update(list => list.filter(p => p.id !== id));
  }
}
