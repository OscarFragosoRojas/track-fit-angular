import { TableColumn } from "../../../../shared/components/table/types/table-types";

export const PATIENT_COLUMNS: TableColumn[] = [
    {
        field: 'name',
        header: 'Nombre'
    },
    {
        field: 'email',
        header: 'Correo',
    },
    {
        field: 'goal',
        header: 'Meta',
    },
    {
        field: 'status',
        header: 'Estado'
    },
    {
        field: 'actions',
        header: 'Acciones'
    }
];