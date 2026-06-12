export type AgendaStatus = 'attended' | 'pending' | 'in-consultation' | 'canceled' | string;

export function getStatusLabel(status: AgendaStatus): string {
  switch (status?.toLowerCase()) {
    case 'attended': return 'Atendido';
    case 'pending': return 'Pendiente';
    case 'in-consultation': return 'En consulta';
    case 'canceled': return 'Cancelado';
    default: return status || 'Desconocido';
  }
}

export function getStatusSeverity(status: AgendaStatus): 'success' | 'info' | 'warn' | 'danger' | 'secondary' | 'contrast' | undefined {
  switch (status?.toLowerCase()) {
    case 'attended': return 'success';
    case 'pending': return 'warn';
    case 'in-consultation': return 'info';
    case 'canceled': return 'danger';
    default: return 'secondary';
  }
}
