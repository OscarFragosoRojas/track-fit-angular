import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { LayoutService } from './service/layout.service';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [ButtonModule, RouterModule],
  changeDetection: ChangeDetectionStrategy.Default,
  template: `
    <nav
      class="fixed top-0 left-0 z-50 w-full h-[72px] flex items-center justify-between px-6 lg:px-8 bg-surface-0/70 dark:bg-surface-900/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.1)] transition-all duration-300"
    >
      <div class="flex items-center gap-4 lg:gap-6">
        <!-- Botón para alternar el menú -->
        <p-button
          icon="pi pi-bars"
          [rounded]="true"
          [text]="true"
          severity="secondary"
          (onClick)="layoutService.onMenuToggle()"
        />

        <!-- Logo -->
        <a routerLink="/" class="flex items-center gap-3 group focus:outline-none">
          <div
            class="w-10 h-10 rounded-xl bg-linear-to-tr from-primary to-primary-600 flex items-center justify-center text-primary-contrast shadow-lg shadow-primary/30 group-hover:scale-105 group-hover:-rotate-3 transition-all duration-300"
          >
            <i class="pi pi-chart-line text-xl"></i>
          </div>
          <span
            class="text-2xl font-extrabold tracking-tight text-surface-900 dark:text-surface-0 group-hover:text-primary transition-colors duration-300"
          >
            TrackFit
          </span>
        </a>
      </div>

      <div class="flex items-center gap-1 sm:gap-2">
        <p-button icon="pi pi-bell" [rounded]="true" [text]="true" severity="secondary" />
        <p-button icon="pi pi-user" [rounded]="true" [text]="true" severity="secondary" />
        <p-button icon="pi pi-cog" [rounded]="true" [text]="true" severity="secondary" />
      </div>
    </nav>
  `,
})
export class AppTopbar {
  layoutService = inject(LayoutService);
}
