import { DynamicFormConfig } from '../../../../shared/components/types/component-types';

export const registerConfig: DynamicFormConfig = {
    fields: [
        {
            key: 'name',
            label: 'Nombre',
            type: 'text',
            required: true,
        },
        {
            key: 'email',
            label: 'Correo Electrónico',
            type: 'email',
            required: true,
        },
        {
            key: 'password',
            label: 'Contraseña',
            type: 'password',
            required: true,
        },
        {
            key: 'confirmPassword',
            label: 'Confirmar Contraseña',
            type: 'password',
            required: true,
        },
    ],
    buttons: [
        {
            label: 'Crear Cuenta',
            type: 'submit',
            severity: 'primary',
            fluid: true,
            size: 'large',
        },
    ]
};
