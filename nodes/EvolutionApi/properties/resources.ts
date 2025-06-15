import { INodeProperties } from 'n8n-workflow';

export const resources: INodeProperties = {
	displayName: 'Recurso',
	name: 'resource',
	type: 'options',
	noDataExpression: true,
	options: [
		{
			name: 'Instancia',
			value: 'instances-api',
		},
		{
			name: 'Mensaje',
			value: 'messages-api',
		},
		{
			name: 'Chat',
			value: 'chat-api',
		},
		{
			name: 'Grupo',
			value: 'groups-api',
		},
		{
			name: 'Perfil',
			value: 'profile-api',
		},
		{
			name: 'Evento',
			value: 'events-api',
		},
		{
			name: 'Integración',
			value: 'integrations-api',
		},
	],
	default: 'instances-api',
};
