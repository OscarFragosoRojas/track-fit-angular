import { Routes } from '@angular/router';
import { AppLayout } from './layout/app.layout';
import { AuthGuard } from './core/guards/auth.guards';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  //AUTH
  {
    path: 'login',
    loadComponent: () => import('./features/auth/pages/login/login').then((m: any) => m.Login),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./features/auth/pages/register/register').then((m: any) => m.Register),
  },

  //DASHBOARD
  {
    path: '',
    component: AppLayout,
    //canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/auth/pages/dashboard/dashboard').then((m: any) => m.Dashboard),
      },
      {
        path: 'patients',
        loadComponent: () =>
          import('./features/patients/pages/list/patient-list').then((m) => m.PatientList),
      },
      {
        path: 'patients/new',
        loadComponent: () =>
          import('./features/patients/pages/new/patient-new').then((m) => m.PatientNew),
      },
      {
        path: 'patients/:id',
        loadComponent: () =>
          import('./features/patients/pages/detail/patient-detail').then((m) => m.PatientDetail),
      },
    ],
  },
];
