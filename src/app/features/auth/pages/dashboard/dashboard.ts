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
      comparisonLabel: 'vs semana pasada',
    },
    {
      label: 'Citas de hoy',
      value: '12',
      change: '+2',
      changeType: 'positive',
      icon: 'pi pi-calendar',
      iconBgClass: 'bg-orange-100 dark:bg-orange-900/40',
      iconColorClass: 'text-orange-500',
      trendIcon: 'pi pi-arrow-up-right',
      trendColorClass: 'text-green-500',
      comparisonLabel: 'agendadas hoy',
    },
    {
      label: 'Ingresos',
      value: '$2,100',
      change: '+5%',
      changeType: 'positive',
      icon: 'pi pi-dollar',
      iconBgClass: 'bg-cyan-100 dark:bg-cyan-900/40',
      iconColorClass: 'text-cyan-500',
      trendIcon: 'pi pi-arrow-up-right',
      trendColorClass: 'text-green-500',
      comparisonLabel: 'vs el mes pasado',
    },
    {
      label: 'Mensajes',
      value: '8',
      change: '+2 nuevos',
      changeType: 'positive',
      icon: 'pi pi-inbox',
      iconBgClass: 'bg-purple-100 dark:bg-purple-900/40',
      iconColorClass: 'text-blue-500',
      trendIcon: 'pi pi-arrow-up-right',
      trendColorClass: 'text-green-500',
      comparisonLabel: 'sin leer',
    },
  ];
}
