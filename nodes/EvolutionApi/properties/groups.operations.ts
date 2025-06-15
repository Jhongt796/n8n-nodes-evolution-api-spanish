import { INodeProperties } from 'n8n-workflow';

export const groupsOperations: INodeProperties = {
	displayName: 'Operación',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ['groups-api'],
		},
	},
	options: [
		{
			name: 'Crear Grupo',
			action: 'Crear un nuevo grupo',
			description: 'Crea un nuevo grupo en WhatsApp',
			value: 'create-group',
		},
		{
			name: 'Actualizar Imagen Del Grupo',
			action: 'Actualizar imagen del grupo',
			description: 'Actualiza la imagen de perfil del grupo',
			value: 'update-group-picture',
		},
		{
			name: 'Actualizar Nombre Del Grupo',
			action: 'Actualizar nombre del grupo',
			description: 'Actualiza el nombre/título del grupo',
			value: 'update-group-name',
		},
		{
			name: 'Actualizar Descripción Del Grupo',
			action: 'Actualizar descripción del grupo',
			description: 'Actualiza la descripción del grupo',
			value: 'update-group-description',
		},
		{
			name: 'Actualizar Configuraciones',
			action: 'Actualizar configuraciones del grupo',
			description: 'Actualiza las configurações de permisos del grupo',
			value: 'update-settings',
		},
		{
			name: 'Actualizar Miembros',
			action: 'Actualizar miembros del grupo',
			description: 'Añade, elimina o actualiza permisos de miembros',
			value: 'update-participants',
		},
		{
			name: 'Buscar Enlace De Invitación',
			action: 'Buscar enlace de invitación',
			description: 'Obtiene el enlace de invitación del grupo',
			value: 'fetch-invite-code',
		},
		{
			name: 'Revocar Enlace De Invitación',
			action: 'Revocar enlace de invitación',
			description: 'Revoca el enlace de invitación actual del grupo',
			value: 'revoke-invite-code',
		},
		{
			name: 'Enviar Enlace De Invitación',
			action: 'Enviar enlace de invitación',
			description: 'Envía el enlace de invitación del grupo a contactos',
			value: 'send-invite-link',
		},
		{
			name: 'Buscar Grupos',
			action: 'Buscar grupos',
			description: 'Busca información de grupos por diferentes métodos',
			value: 'fetch-groups',
		},
		{
			name: 'Encontrar Participantes',
			action: 'Encontrar participantes del grupo',
			description: 'Obtiene la lista de participantes de un grupo',
			value: 'find-participants',
		},
		{
			name: 'Mensajes Temporales',
			action: 'Configurar mensajes temporales',
			description: 'Define el tiempo de expiración de los mensajes en el grupo',
			value: 'toggle-ephemeral',
		},
		{
			name: 'Unirse Al Grupo',
			action: 'Unirse al grupo',
			description: 'Se une a un grupo usando el código de invitación',
			value: 'join-group',
		},
		{
			name: 'Salir Del Grupo',
			action: 'Salir del grupo',
			description: 'Elimina la instancia del grupo',
			value: 'leave-group',
		},
	],
	default: 'create-group',
};
