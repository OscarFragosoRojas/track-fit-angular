import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guards';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

    //AUTH
    { path: 'login', loadComponent: () => import('./features/auth/pages/login/login').then((m: any) => m.Login) },
    { path: 'register', loadComponent: () => import('./features/auth/pages/register/register').then((m: any) => m.Register) },

    { path: '**', redirectTo: 'login' }
];
