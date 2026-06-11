import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutService } from './service/layout.service';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, MenuModule],
  changeDetection: ChangeDetectionStrategy.Default,
  template: `
    <div
      class="fixed top-[72px] left-0 z-40 h-[calc(100vh-72px)] w-[18rem] bg-surface-0/70 dark:bg-surface-900/80 backdrop-blur-xl transition-transform duration-300 flex flex-col py-6 px-4 overflow-y-auto"
      [ngClass]="{
        '-translate-x-full':
          (layoutService.state().staticMenuDesktopInactive && layoutService.isDesktop()) ||
          (!layoutService.state().staticMenuMobileActive && !layoutService.isDesktop()),
        'translate-x-0':
          (!layoutService.state().staticMenuDesktopInactive && layoutService.isDesktop()) ||
          (layoutService.state().staticMenuMobileActive && !layoutService.isDesktop()),
      }"
    >
      <p-menu
        [model]="model"
        styleClass="w-full border-none bg-transparent! border-none!"
        [dt]="{
          background: 'transparent',
          border: 'none',
          item: { focus: { background: 'transparent' } },
        }"
      >
        <ng-template pTemplate="submenuheader" let-item>
          <div
           
            class="px-3 pt-6 pb-2 text-[11px] font-bold uppercase tracking-[0.15em] text-surface-400 dark:text-surface-500/80"
          
          >
            {{ item.label }}
          </div>
        </ng-template>
        <ng-template pTemplate="item" let-item>
          <a
            [routerLink]="item.routerLink"
            routerLinkActive="bg-primary-500! dark:bg-primary-800/90! text-white dark:text-white!"
            [routerLinkActiveOptions]="{ exact: false }"
            class="flex items-center gap-4 px-4 py-3 rounded-lg text-surface-600 dark:text-surface-300 hover:bg-primary-100 dark:hover:bg-primary-500/10 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 cursor-pointer group outline-none mb-1 mx-1"
          >
            <i
              [class]="item.icon"
              class="text-xl group-hover:scale-110 transition-transform duration-300"
            ></i>
            <span class="text-[15px] tracking-tight">{{ item.label }}</span>
          </a>
        </ng-template>
      </p-menu>
    </div>
  `,
})
export class AppSidebar {
  layoutService = inject(LayoutService);

  model: MenuItem[] = [
    {
      label: 'Home',
      items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/dashboard'] }],
    },
    {
      label: 'Pacientes',
      items: [
        { label: 'Lista de Pacientes', icon: 'pi pi-fw pi-users', routerLink: ['/patients'] },
        { label: 'Citas', icon: 'pi pi-fw pi-calendar', routerLink: ['/appointments'] },
      ],
    },
  ];
}
