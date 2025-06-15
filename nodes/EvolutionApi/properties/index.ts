import { INodeProperties } from 'n8n-workflow';
import { eventsFields as eventsFields } from './events.fields';
import { instancesFields } from './instances.fields';
import { integrationsFields as integrationsFields } from './integrations.fields';
import { messagesFields as messagesFields } from './messages.fields';
import { eventsOperationsOptions } from './events.operations';
import { instancesOperationsOptions } from './instances.operations';
import { integrationsOperationsOptions } from './integrations.operations';
import { messagesOperationsOptions } from './messages.operations';
import { groupsFields } from './groups.fields';
import { groupsOperations } from './groups.operations';
import { chatFields } from './chat.fields';
import { chatOperations } from './chat.operations';
import { profileFields } from './profile.fields';
import { profileOperationsOptions } from './profile.operations';
const resourcesOptions: INodeProperties = {
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
			name: 'Grupo',
			value: 'groups-api',
		},
		{
			name: 'Chat',
			value: 'chat-api',
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

export const evolutionNodeProperties = [
	resourcesOptions,
	// Funciones disponibles cuando se selecciona el recurso "Instancia"
	instancesOperationsOptions,
	// Funciones disponibles cuando se selecciona el recurso "Mensaje"
	messagesOperationsOptions,
	// Funciones disponibles cuando se selecciona el recurso "Grupo"
	groupsOperations,
	// Funciones disponibles cuando se selecciona el recurso "Evento"
	eventsOperationsOptions,
	// Funciones disponibles cuando se selecciona el recurso "Integración"
	integrationsOperationsOptions,
	// Funciones disponibles cuando se selecciona el recurso "Perfil"
	profileOperationsOptions,
	// Funciones disponibles cuando se selecciona el recurso "Chat"
	chatOperations,
	// Campos disponibles cuando se selecciona el recurso y alguna operación
	...instancesFields,
	...messagesFields,
	...groupsFields,
	...eventsFields,
	...integrationsFields,
	...chatFields,
	...profileFields,
];
