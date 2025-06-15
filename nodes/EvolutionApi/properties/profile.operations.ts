import { INodeProperties } from 'n8n-workflow';

export const profileOperationsOptions: INodeProperties = {
    displayName: 'Operación',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    displayOptions: {
        show: {
            resource: ['profile-api'],
        },
    },
    options: [        {
            name: 'Buscar Perfil',
            value: 'fetch-profile',
            description: 'Busca información del perfil',
            action: 'Buscar perfil',
        },
        {
            name: 'Buscar Perfil Profesional',
            value: 'fetch-business-profile',
            description: 'Busca información del perfil profesional',
            action: 'Buscar perfil profesional',
        },
        {
					name: 'Actualizar Nombre Del Perfil',
					value: 'update-profile-name',
					description: 'Actualiza el nombre del perfil',
					action: 'Actualizar nombre del perfil',
        },
        {
					name: 'Actualizar Estado',
            value: 'update-profile-status',
            description: 'Actualiza el estado del perfil',
            action: 'Actualizar estado del perfil',
					},        {
					name: 'Actualizar Foto De Perfil',
            value: 'update-profile-picture',
            description: 'Actualiza la foto de perfil',
            action: 'Actualizar foto de perfil',
					},{
					name: 'Eliminar Foto De Perfil',
					value: 'remove-profile-picture',
					description: 'Elimina la foto de perfil',
					action: 'Eliminar foto de perfil',
        },
				{
						name: 'Buscar Configuraciones De Privacidad',
						value: 'fetch-privacy-settings',
						description: 'Busca las configuraciones de privacidad de la instancia',
						action: 'Buscar configuraciones de privacidad',
				},
        {
            name: 'Actualizar Configuraciones De Privacidad',
            value: 'update-privacy-settings',
            description: 'Actualiza las configuraciones de privacidad de la instancia',
            action: 'Actualizar configuraciones de privacidad',
        },
    ],
    default: 'fetch-profile',
};
