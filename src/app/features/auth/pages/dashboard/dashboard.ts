import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { KPI } from '../../../../shared/components/types/component-types';
import { StatCard } from '../../../../shared/components/cards/stat-card/stat-card';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-dashboard',
  imports: [StatCard, ChartModule],
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './dashboard.html',
})
export class Dashboard implements OnInit {
  data: any;
  options: any;

  ngOnInit() {
    let textColor = '#ffffff';
    let textColorSecondary = '#9ca3af';
    let surfaceBorder = '#374151';

    if (typeof document !== 'undefined') {
      const documentStyle = getComputedStyle(document.documentElement);
      textColor = documentStyle.getPropertyValue('--p-text-color') || textColor;
      textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color') || textColorSecondary;
      surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color') || surfaceBorder;
    }
    
    this.data = {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
      datasets: [
        {
          label: 'Nuevos Pacientes',
          data: [12, 19, 15, 25, 22, 30, 28],
          fill: true,
          borderColor: '#6366f1',
          backgroundColor: 'rgba(99, 102, 241, 0.2)',
          tension: 0.4
        }
      ]
    };

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        x: {
          ticks: { color: textColorSecondary },
          grid: { color: surfaceBorder, drawBorder: false }
        },
        y: {
          ticks: { color: textColorSecondary },
          grid: { color: surfaceBorder, drawBorder: false }
        }
      }
    };
  }
  statCards: KPI[] = [
    {
      label: 'Pacientes Activos',
      value: '152',
      change: '+24 nuevos',
      changeType: 'positive',
      icon: 'pi pi-users',
      iconBgClass: 'bg-blue-100 dark:bg-blue-900/40',
      iconColorClass: 'text-primary-contrast',
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
