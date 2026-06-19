import { TableColumn } from "../../../../shared/components/table/types/table-types";

export const PATIENT_COLUMNS: TableColumn[] = [
    {
        field: 'id',
        header: 'ID'
    },
    {
        field: 'firstName',
        header: 'Nombre'
    },
    {
        field: 'email',
        header: 'Correo',
    },
    {
        field: 'phone',
        header: 'Teléfono',
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