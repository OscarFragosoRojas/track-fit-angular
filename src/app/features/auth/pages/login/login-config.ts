import { DynamicFormConfig } from '../../../../shared/components/types/component-types';

export const loginConfig: DynamicFormConfig = {
    fields: [
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
        key: 'rememberMe',
        label: 'Recordarme',
        type: 'checkbox',
    }
    ],
    buttons: [
        {
            label: 'Iniciar Sesión',
            type: 'submit',
            severity: 'primary',
            fluid: true,
            size: 'large',
        },
    ]
};