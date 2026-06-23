import { TableColumn } from "../../../../shared/components/table/types/table-types";
import { Patient } from "../../../../core/models/patient.model";
import { AvatarModule } from "primeng/avatar";
import { AvatarGroupModule } from "primeng/avatargroup";
import { GOAL_LABELS } from "../../../../core/models/patient.model";

export const PATIENT_COLUMNS: TableColumn[] = [
    {
        field: 'id',
        header: 'ID'
    },
    {
        field: 'fullName',
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