import { INodeProperties, NodePropertyTypes } from 'n8n-workflow';

export const groupsFields: INodeProperties[] = [
	{
		displayName: 'Nombre De La Instancia',
		name: 'instanceName',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Introduce el nombre de la instancia que creará el grupo',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['create-group'],
			},
		},
	},
	{
		displayName: 'Nombre Del Grupo',
		name: 'subject',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Introduce el nombre del grupo que será creado',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['create-group'],
			},
		},
	},
	{
		displayName: 'Descripción',
		name: 'description',
		type: 'string' as NodePropertyTypes,
		default: '',

		description: 'Introduce la descripción del grupo (opcional)',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['create-group'],
			},
		},
	},
	{
		displayName: 'Participantes',
		name: 'participants',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Introduce los números de los participantes separados por coma (ej: 5511999999999,5511888888888)',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['create-group'],
			},
		},
	},
	{
		displayName: 'Nombre De La Instancia',
		name: 'instanceName',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Introduce el nombre de la instancia que actualizará la imagen',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['update-group-picture'],
			},
		},
	},
	{
		displayName: 'ID Del Grupo',
		name: 'groupJid',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'ID del grupo cuya imagen será actualizada',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['update-group-picture'],
			},
		},
	},
	{
		displayName: 'URL De La Imagen',
		name: 'image',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'URL de la imagen que se definirá como foto del grupo',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['update-group-picture'],
			},
		},
	},
	{
		displayName: 'Nombre De La Instancia',
		name: 'instanceName',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Introduce el nombre de la instancia que actualizará el nombre del grupo',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['update-group-name'],
			},
		},
	},
	{
		displayName: 'ID Del Grupo',
		name: 'groupJid',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'ID del grupo cuyo nombre será actualizado',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['update-group-name'],
			},
		},
	},
	{
		displayName: 'Nuevo Nombre Del Grupo',
		name: 'subject',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Nuevo nombre que se definirá para el grupo',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['update-group-name'],
			},
		},
	},
	{
		displayName: 'Nombre De La Instancia',
		name: 'instanceName',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Introduce el nombre de la instancia que actualizará la descripción',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['update-group-description'],
			},
		},
	},
	{
		displayName: 'ID Del Grupo',
		name: 'groupJid',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'ID del grupo cuya descripción será actualizada',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['update-group-description'],
			},
		},
	},
	{
		displayName: 'Nueva Descrição',
		name: 'description',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Nueva descripción que se definirá para el grupo',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['update-group-description'],
			},
		},
	},
	{
		displayName: 'Nombre De La Instancia',
		name: 'instanceName',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Introduce el nombre de la instancia que buscará el código',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['fetch-invite-code'],
			},
		},
	},
	{
		displayName: 'ID Del Grupo',
		name: 'groupJid',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'ID del grupo para obtener el código de invitación',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['fetch-invite-code'],
			},
		},
	},
	{
		displayName: 'Nombre De La Instancia',
		name: 'instanceName',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Introduce el nombre de la instancia que revocará el código',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['revoke-invite-code'],
			},
		},
	},
	{
		displayName: 'ID Del Grupo',
		name: 'groupJid',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'ID del grupo para revocar el código de invitación',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['revoke-invite-code'],
			},
		},
	},
	{
		displayName: 'Nombre De La Instancia',
		name: 'instanceName',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Introduce el nombre de la instancia que enviará la invitación',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['send-invite-link'],
			},
		},
	},
	{
		displayName: 'ID Del Grupo',
		name: 'groupJid',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'ID del grupo para enviar la invitación',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['send-invite-link'],
			},
		},
	},
	{
		displayName: 'Mensaje De La Invitación',
		name: 'description',
		type: 'string' as NodePropertyTypes,
		default: 'Aquí tienes el enlace del grupo',
		required: true,
		description: 'Mensaje que se enviará junto con el enlace de invitación',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['send-invite-link'],
			},
		},
	},
	{
		displayName: 'Destinatarios',
		name: 'numbers',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Introduce los números de los destinatarios separados por coma (ej: 5511999999999,5511888888888)',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['send-invite-link'],
			},
		},
	},
	{
		displayName: 'Nombre De La Instancia',
		name: 'instanceName',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Introduce el nombre de la instancia que buscará el grupo',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['fetch-group-by-code'],
			},
		},
	},
	{
		displayName: 'Código De Invitación',
		name: 'inviteCode',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Código de invitación del grupo (ej: JZNHJLvnNd04UvGefiEZAA)',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['fetch-group-by-code'],
			},
		},
	},
	{
		displayName: 'Nombre De La Instancia',
		name: 'instanceName',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Introduce el nombre de la instancia',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['fetch-groups'],
			},
		},
	},
	{
		displayName: 'Método De Búsqueda',
		name: 'searchMethod',
		type: 'options' as NodePropertyTypes,
		options: [
			{
				name: 'Por Código De Invitación',
				value: 'inviteCode',
			},
			{
				name: 'Por ID Del Grupo',
				value: 'groupJid',
			},
			{
				name: 'Buscar Todos Los Grupos',
				value: 'fetchAll',
			},
		],
		default: 'inviteCode',
		required: true,
		description: 'Elige el método para buscar los grupos',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['fetch-groups'],
			},
		},
	},
	{
		displayName: 'Código De Invitación',
		name: 'inviteCode',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Código de invitación del grupo (ej: JZNHJLvnNd04UvGefiEZAA)',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['fetch-groups'],
				searchMethod: ['inviteCode'],
			},
		},
	},
	{
		displayName: 'ID Del Grupo',
		name: 'groupJid',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'ID del grupo para buscar información',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['fetch-groups'],
				searchMethod: ['groupJid'],
			},
		},
	},
	{
		displayName: 'Obtener Participantes',
		name: 'getParticipants',
		type: 'boolean' as NodePropertyTypes,
		default: false,

		description: 'Si se debe obtener la lista de participantes de los grupos',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['fetch-groups'],
				searchMethod: ['fetchAll'],
			},
		},
	},
	{
		displayName: 'Nombre De La Instancia',
		name: 'instanceName',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Introduce el nombre de la instancia',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['find-participants'],
			},
		},
	},
	{
		displayName: 'ID Del Grupo',
		name: 'groupJid',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'ID del grupo para buscar los participantes',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['find-participants'],
			},
		},
	},
	{
		displayName: 'Nombre De La Instancia',
		name: 'instanceName',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Introduce el nombre de la instancia',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['update-participants'],
			},
		},
	},
	{
		displayName: 'ID Del Grupo',
		name: 'groupJid',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'ID del grupo para actualizar los miembros',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['update-participants'],
			},
		},
	},
	{
		displayName: 'Acción',
		name: 'action',
		type: 'options' as NodePropertyTypes,
		options: [
			{
				name: 'Añadir Miembro',
				value: 'add',
			},
			{
				name: 'Eliminar Miembro',
				value: 'remove',
			},
			{
				name: 'Promover a Administrador',
				value: 'promote',
			},
			{
				name: 'Degradar a Miembro',
				value: 'demote',
			},
		],
		default: 'add',
		required: true,
		description: 'Acción a ejecutar con los miembros',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['update-participants'],
			},
		},
	},
	{
		displayName: 'Miembros',
		name: 'participants',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Lista de números de los miembros separados por coma (ej: 5511999999999,5511888888888)',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['update-participants'],
			},
		},
	},
	{
		displayName: 'Nombre De La Instancia',
		name: 'instanceName',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Introduce el nombre de la instancia',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['update-settings'],
			},
		},
	},
	{
		displayName: 'ID Del Grupo',
		name: 'groupJid',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'ID del grupo para actualizar las configuraciones',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['update-settings'],
			},
		},
	},
	{
		displayName: 'Acción',
		name: 'action',
		type: 'options' as NodePropertyTypes,
		options: [
			{
				name: 'Solo Admins Envían Mensajes',
				value: 'announcement',
			},
			{
				name: 'Todos Envían Mensajes',
				value: 'not_announcement',
			},
			{
				name: 'Solo Admins Editan Configuraciones',
				value: 'locked',
			},
			{
				name: 'Todos Editan Configuraciones',
				value: 'unlocked',
			},
		],
		default: 'not_announcement',
		required: true,
		description: 'Configuración a aplicar en el grupo',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['update-settings'],
			},
		},
	},
	{
		displayName: 'Nombre De La Instancia',
		name: 'instanceName',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Introduce el nombre de la instancia',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['toggle-ephemeral'],
			},
		},
	},
	{
		displayName: 'ID Del Grupo',
		name: 'groupJid',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'ID del grupo para configurar mensajes temporales',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['toggle-ephemeral'],
			},
		},
	},
	{
		displayName: 'Expiración',
		name: 'expiration',
		type: 'options' as NodePropertyTypes,
		options: [
			{
				name: 'Desactivado',
				value: 0,
			},
			{
				name: '24 Horas',
				value: 86400,
			},
			{
				name: '7 Días',
				value: 604800,
			},
			{
				name: '90 Días',
				value: 7776000,
			},
		],
		default: 0,
		required: true,
		description: 'Tiempo de expiración de los mensajes',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['toggle-ephemeral'],
			},
		},
	},
	{
		displayName: 'Nombre De La Instancia',
		name: 'instanceName',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Introduce el nombre de la instancia',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['leave-group'],
			},
		},
	},
	{
		displayName: 'ID Del Grupo',
		name: 'groupJid',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'ID del grupo del que deseas salir',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['leave-group'],
			},
		},
	},
	{
		displayName: 'Nombre De La Instancia',
		name: 'instanceName',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Introduce el nombre de la instancia que va a unirse al grupo',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['join-group'],
			},
		},
	},
	{
		displayName: 'Código De Invitación',
		name: 'inviteCode',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Introduce el código de invitación del grupo (ej: JZNHJLvnNd04UvGefiEZAA)',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['join-group'],
			},
		},
	},
];
