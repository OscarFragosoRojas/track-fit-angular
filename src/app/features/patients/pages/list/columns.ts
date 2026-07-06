import { TableColumn } from "../../../../shared/components/table/types/table-types";

export const PATIENT_COLUMNS: TableColumn[] = [
    { field: 'id',       header: 'ID' },
    { field: 'fullName', header: 'Nombre' },
    { field: 'email',    header: 'Correo' },
    { field: 'phone',    header: 'Teléfono' },
    { field: 'goal',     header: 'Meta' },       // cellTemplate asignado en ngAfterViewInit
    { field: 'status',   header: 'Estado' },     // cellTemplate asignado en ngAfterViewInit
    { field: 'actions',  header: 'Acciones' },   // cellTemplate asignado en ngAfterViewInit
];