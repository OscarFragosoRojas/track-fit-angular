import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutService } from './service/layout.service';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [CommonModule, RouterModule, MenuModule],
    template: `
        <div class="fixed top-[5rem] left-0 z-40 h-[calc(100vh-5rem)] w-[18rem] bg-surface-0 dark:bg-surface-900 shadow-lg border-r border-surface-200 dark:border-surface-700 transition-transform duration-300 flex flex-col p-4 overflow-y-auto"
             [ngClass]="{
                 '-translate-x-full': (layoutService.state().staticMenuDesktopInactive && layoutService.isDesktop()) || (!layoutService.state().staticMenuMobileActive && !layoutService.isDesktop()),
                 'translate-x-0': (!layoutService.state().staticMenuDesktopInactive && layoutService.isDesktop()) || (layoutService.state().staticMenuMobileActive && !layoutService.isDesktop())
             }">
             
            <p-menu [model]="model" styleClass="w-full border-none bg-transparent" />
        </div>
    `
})
export class AppSidebar {
    layoutService = inject(LayoutService);

    model: MenuItem[] = [
        {
            label: 'Home',
            items: [
                { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/dashboard'] }
            ]
        },
        {
            label: 'Pacientes',
            items: [
                { label: 'Lista de Pacientes', icon: 'pi pi-fw pi-users', routerLink: ['/patients'] },
                { label: 'Citas', icon: 'pi pi-fw pi-calendar', routerLink: ['/appointments'] }
            ]
        }
    ];
}
