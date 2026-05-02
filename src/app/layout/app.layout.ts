import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LayoutService } from './service/layout.service';
import { AppTopbar } from './app.topbar';
import { AppSidebar } from './app.sidebar';

@Component({
    selector: 'app-layout',
    standalone: true,
    imports: [CommonModule, RouterOutlet, AppTopbar, AppSidebar],
    template: `
        <div class="min-h-screen bg-surface-50 dark:bg-surface-950 transition-colors duration-200">
            <!-- Header -->
            <app-topbar></app-topbar>
            
            <!-- Menú Lateral -->
            <app-sidebar></app-sidebar>
            
            <!-- Contenedor Principal -->
            <div class="flex flex-col min-h-screen pt-[5rem] transition-all duration-300"
                 [ngClass]="{
                     'ml-[18rem]': !layoutService.state().staticMenuDesktopInactive && layoutService.isDesktop(),
                     'ml-0': layoutService.state().staticMenuDesktopInactive || !layoutService.isDesktop()
                 }">
                <div class="p-6 flex-auto">
                    <router-outlet></router-outlet>
                </div>
            </div>

            <!-- Overlay oscuro para dispositivos móviles cuando el menú está abierto -->
            <div *ngIf="layoutService.state().staticMenuMobileActive && !layoutService.isDesktop()" 
                 class="fixed inset-0 bg-black/40 z-30" 
                 (click)="layoutService.onOverlayClick()">
            </div>
        </div>
    `
})
export class AppLayout {
    layoutService = inject(LayoutService);
}
