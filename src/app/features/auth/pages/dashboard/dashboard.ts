import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { AgendaListType, KPI } from '../../../../shared/components/types/component-types';
import { StatCard } from '../../../../shared/components/cards/stat-card/stat-card';
import { ChartModule } from 'primeng/chart';
import { Card } from '../../../../shared/components/cards/card/card';
import { CommonModule } from '@angular/common';
import { AgendaList } from "../../../../shared/components/agenda-list/agenda-list";
import { Header } from "../../../../shared/components/header/header";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, StatCard, ChartModule, Card, AgendaList, Header ],
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
      iconBgClass: 'bg-primary-100 dark:bg-primary-900/40',
      iconColorClass: 'text-primary-500',
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
      iconColorClass: 'text-primary-500',
      trendIcon: 'pi pi-arrow-up-right',
      trendColorClass: 'text-green-500',
      comparisonLabel: 'sin leer',
    },
  ];

 
  patientCards: AgendaListType = {
    agendaItems: [
    {
      name: 'John Doe',
      status: 'attended',
      time: '10:30 AM',
      image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Jane Smith',
      status: 'pending',
      time: '10:45 AM',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Alex Johnson',
      status: 'in-consultation',
      time: '11:00 AM',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Maria Garcia',
      status: 'canceled',
      time: '11:15 AM',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    }
  ]
 }
}
