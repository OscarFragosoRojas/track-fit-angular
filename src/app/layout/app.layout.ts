import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LayoutService } from './service/layout.service';
import { AppTopbar } from './app.topbar';
import { AppSidebar } from './app.sidebar';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AppTopbar, AppSidebar],
  changeDetection: ChangeDetectionStrategy.Default,
  template: `
    <div class="min-h-screen bg-surface-50 dark:bg-surface-950 transition-colors duration-200 relative overflow-x-hidden">
      <!-- Decorative background blobs -->
      <div class="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div class="absolute top-[10%] right-[5%] w-[40%] h-[40%] rounded-full bg-blue-500/20 dark:bg-blue-600/10 blur-[120px]"></div>
        <div class="absolute bottom-[10%] left-[10%] w-[50%] h-[50%] rounded-full bg-indigo-500/20 dark:bg-indigo-600/10 blur-[120px]"></div>
      </div>
      <!-- Header -->
      <app-topbar></app-topbar>

      <!-- Menú Lateral -->
      <app-sidebar></app-sidebar>

      <!-- Contenedor Principal -->
      <div
        class="flex flex-col min-h-screen pt-20 transition-all duration-300"
        [ngClass]="{
          'ml-72': !layoutService.state().staticMenuDesktopInactive && layoutService.isDesktop(),
          'ml-0': layoutService.state().staticMenuDesktopInactive || !layoutService.isDesktop(),
        }"
      >
        <div class="p-6 flex-auto">
          <router-outlet></router-outlet>
        </div>
      </div>

      <!-- Overlay oscuro para dispositivos móviles cuando el menú está abierto -->
      <div
        *ngIf="layoutService.state().staticMenuMobileActive && !layoutService.isDesktop()"
        class="fixed inset-0 bg-black/40 z-30"
        (click)="layoutService.onOverlayClick()"
      ></div>
    </div>
  `,
})
export class AppLayout {
  layoutService = inject(LayoutService);
}
