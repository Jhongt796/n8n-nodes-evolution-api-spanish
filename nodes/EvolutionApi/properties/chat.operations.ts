import { INodeProperties } from 'n8n-workflow';

export const chatOperations: INodeProperties = {
	displayName: 'Operación',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ['chat-api'],
		},
	},
	options: [		{
			name: 'Verificar Número',
			action: 'Verificar n mero en whats app',
			description: 'Verifica si un número está registrado en WhatsApp',
			value: 'check-number',
		},
		{
			name: 'Leer Mensajes',
			action: 'Marcar mensajes como le dos',
			description: 'Marca mensajes específicos como leídos',
			value: 'read-messages',
		},
		{
			name: 'Gestionar Archivo',
			action: 'Gestionar archivo de conversaci n',
			description: 'Archiva o desarchiva una conversación',
			value: 'manage-archive',
		},
		{
			name: 'Marcar Como No Leído',
			action: 'Marcar conversaci n como no le da',
			description: 'Marca una conversación específica como no leída',
			value: 'mark-unread',
		},
		{
			name: 'Eliminar Mensaje',
			action: 'Eliminar mensaje',
			description: 'Elimina un mensaje específico para todos',
			value: 'delete-message',
		},
		{
			name: 'Buscar Foto De Perfil',
			action: 'Buscar foto de perfil',
			description: 'Obtiene la URL de la foto de perfil de un contacto',
			value: 'fetch-profile-picture',
		},		{
			name: 'Obtener Multimedia En Base64',
			action: 'Obtener multimedia en base64',
			description: 'Obtiene el contenido de un medio en formato Base64',
			value: 'get-media-base64',
		},
		{
			name: 'Editar Mensaje',
			action: 'Editar mensaje',
			description: 'Edita un mensaje enviado anteriormente',
			value: 'update-message',
		},
		{
			name: 'Enviar Presencia',
			action: 'Enviar presencia',
			description: 'Envía el estado de presencia (escribiendo/grabando) a un contacto',
			value: 'send-presence',
		},
		{
			name: 'Bloquear Contacto',
			action: 'Bloquear contacto',
			description: 'Bloquea o desbloquea un contacto',
			value: 'block-contact',
		},
		{
			name: 'Listar Contactos',
			action: 'Listar contactos',
			description: 'Lista todos los contactos o busca un contacto específico',
			value: 'find-contacts',
		},
		{
			name: 'Buscar Mensajes',
			action: 'Buscar mensajes de un contacto',
			description: 'Busca mensajes de un contacto específico',
			value: 'find-messages',
		},
		{
			name: 'Buscar Estados',
			action: 'Buscar estados de mensajes',
			description: 'Busca estados de mensajes de un contacto específico',
			value: 'find-status-messages',
		},
		{
			name: 'Buscar Chats',
			action: 'Buscar chats',
			description: 'Busca chats de un contacto específico',
			value: 'find-chats',
		},
	],
	default: 'check-number',
};
