import { Component } from '@angular/core';
import { KPI } from '../../../../shared/components/types/component-types';
import { StatCard } from '../../../../shared/components/cards/stat-card/stat-card';

@Component({
  selector: 'app-dashboard',
  imports: [StatCard],
  templateUrl: './dashboard.html',
})
export class Dashboard {
  statCards: KPI[] = [
    {
      label: 'Pacientes Activos',
      value: '152',
      change: '+24 nuevos',
      changeType: 'positive',
      icon: 'pi pi-users',
      iconBgClass: 'bg-blue-100 dark:bg-blue-900/40',
      iconColorClass: 'text-blue-500',
      trendIcon: 'pi pi-arrow-up-right',
      trendColorClass: 'text-green-500',
    },
    {
      label: 'Pacientes Activos',
      value: '152',
      change: '+24 nuevos',
      changeType: 'positive',
      icon: 'pi pi-users',
      iconBgClass: 'bg-blue-100 dark:bg-blue-900/40',
      iconColorClass: 'text-blue-500',
      trendIcon: 'pi pi-arrow-up-right',
      trendColorClass: 'text-green-500',
    },
    {
      label: 'Pacientes Activos',
      value: '152',
      change: '+24 nuevos',
      changeType: 'positive',
      icon: 'pi pi-users',
      iconBgClass: 'bg-blue-100 dark:bg-blue-900/40',
      iconColorClass: 'text-blue-500',
      trendIcon: 'pi pi-arrow-up-right',
      trendColorClass: 'text-green-500',
    },
    {
      label: 'Pacientes Activos',
      value: '152',
      change: '+24 nuevos',
      changeType: 'positive',
      icon: 'pi pi-users',
      iconBgClass: 'bg-blue-100 dark:bg-blue-900/40',
      iconColorClass: 'text-blue-500',
      trendIcon: 'pi pi-arrow-up-right',
      trendColorClass: 'text-green-500',
    },
    {
      label: 'Pacientes Activos',
      value: '152',
      change: '+24 nuevos',
      changeType: 'positive',
      icon: 'pi pi-users',
      iconBgClass: 'bg-blue-100 dark:bg-blue-900/40',
      iconColorClass: 'text-blue-500',
      trendIcon: 'pi pi-arrow-up-right',
      trendColorClass: 'text-green-500',
    },
  ];
}
