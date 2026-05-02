import { Component, inject } from '@angular/core';
import { LayoutService } from './service/layout.service';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-topbar',
    standalone: true,
    imports: [ButtonModule, RouterModule],
    template: `
        <div class="fixed top-0 left-0 z-50 w-full h-[5rem] flex items-center justify-between px-6 bg-surface-0 dark:bg-surface-900 border-b border-surface-200 dark:border-surface-700 shadow-sm transition-all duration-200">
            <div class="flex items-center gap-4">
                <!-- Botón para alternar el menú -->
                <p-button icon="pi pi-bars" [rounded]="true" [text]="true" severity="secondary" (onClick)="layoutService.onMenuToggle()" />
                
                <!-- Logo -->
                <a routerLink="/" class="text-2xl font-bold text-primary flex items-center gap-2">
                    <i class="pi pi-chart-line text-3xl"></i>
                    <span>TrackFit</span>
                </a>
            </div>

            <div class="flex items-center gap-2">
                <p-button icon="pi pi-user" [rounded]="true" [text]="true" severity="secondary" />
                <p-button icon="pi pi-cog" [rounded]="true" [text]="true" severity="secondary" />
            </div>
        </div>
    `
})
export class AppTopbar {
    layoutService = inject(LayoutService);
}
