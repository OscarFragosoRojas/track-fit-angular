export type PatientGender = 'male' | 'female' | 'other';
export type PatientGoal = 'weight-loss' | 'hypertrophy' | 'maintenance' | 'endurance' | 'rehabilitation';
export type PatientStatus = 'active' | 'inactive' | 'pending';

export interface PhysicalStats {
  heightCm: number;
  weightKg: number;
  bodyFatPct?: number;
  goal: PatientGoal;
}

export interface Patient {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string; // ISO date string
  gender: PatientGender;
  physicalStats: PhysicalStats;
  status: PatientStatus;
  createdAt: string;
  avatar?: string;
}

export interface CreatePatientDto {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: PatientGender;
  physicalStats: PhysicalStats;
}

export const GOAL_LABELS: Record<PatientGoal, string> = {
  'weight-loss': 'Pérdida de Peso',
  'hypertrophy': 'Hipertrofia',
  'maintenance': 'Mantenimiento',
  'endurance': 'Resistencia',
  'rehabilitation': 'Rehabilitación',
};

export const GOAL_SEVERITY: Record<PatientGoal, string> = {
  'weight-loss': 'info',
  'hypertrophy': 'warn',
  'maintenance': 'success',
  'endurance': 'secondary',
  'rehabilitation': 'danger',
};

export const STATUS_LABELS: Record<PatientStatus, string> = {
  'active': 'Activo',
  'inactive': 'Inactivo',
  'pending': 'Pendiente',
};

export const STATUS_SEVERITY: Record<PatientStatus, string> = {
  'active': 'success',
  'inactive': 'danger',
  'pending': 'warn',
};
