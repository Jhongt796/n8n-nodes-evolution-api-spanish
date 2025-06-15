import { INodeProperties } from 'n8n-workflow';

export const integrationsFields: INodeProperties[] = [
	// Campos = Chatwoot
	{
		displayName: 'Nombre De La Instancia',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Introduce el nombre de la instancia para la integración con Chatwoot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['chatwoot'],
			},
		},
	},
	{
		displayName: 'Qué Desea Hacer',
		name: 'resourceForChatwoot',
		type: 'options',
		options: [
			{
				name: 'Definir Chatwoot',
				value: 'setChatwoot',
			},
			{
				name: 'Verificar Chatwoot',
				value: 'findChatwoot',
			},
		],
		default: 'setChatwoot',
		description: 'Elige entre activar/desactivar Chatwoot o verificar Chatwoot existente',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['chatwoot'],
			},
		},
	},
	{
		displayName: 'Activar Chatwoot',
		name: 'enabled',
		type: 'boolean',
		default: true,
		description: 'Define si se habilita o deshabilita la integración con Chatwoot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['chatwoot'],
				resourceForChatwoot: ['setChatwoot'],
			},
		},
	},
	{
		displayName: 'Enlace De Chatwoot',
		name: 'chatwootUrl',
		type: 'string',
		default: '',
		required: true,
		description: 'Introduce el enlace de Chatwoot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['chatwoot'],
				resourceForChatwoot: ['setChatwoot'],
			},
		},
	},
	{
		displayName: 'ID De La Cuenta De Chatwoot',
		name: 'chatwootAccountId',
		type: 'string',
		default: '',
		required: true,
		description: 'Introduce el ID de la cuenta de Chatwoot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['chatwoot'],
				resourceForChatwoot: ['setChatwoot'],
			},
		},
	},
	{
		displayName: 'Token De Admin De Chatwoot',
		name: 'chatwootToken',
		type: 'string',
		required: true,
		typeOptions: {
			password: true,
		},
		default: '',
		description: 'Introduce el token de admin de Chatwoot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['chatwoot'],
				resourceForChatwoot: ['setChatwoot'],
			},
		},
	},
	{
		displayName: 'Firma Del Agente De Chatwoot',
		name: 'chatwootSignMsg',
		type: 'boolean',
		default: false,
		description: 'Define si se habilita o deshabilita la firma del agente de Chatwoot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['chatwoot'],
				resourceForChatwoot: ['setChatwoot'],
			},
		},
	},
	{
		displayName: 'Reabrir Mensajes En Chatwoot',
		name: 'chatwootReopenConversation',
		type: 'boolean',
		default: false,
		description: 'Define si se habilita o deshabilita la reapertura de mensajes en Chatwoot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['chatwoot'],
				resourceForChatwoot: ['setChatwoot'],
			},
		},
	},
	{
		displayName: 'Iniciar Conversaciones Como Pendientes En Chatwoot',
		name: 'chatwootConversationPending',
		type: 'boolean',
		default: false,
		description: 'Define si se inician las conversaciones como pendientes en Chatwoot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['chatwoot'],
				resourceForChatwoot: ['setChatwoot'],
			},
		},
	},
	{
		displayName: 'Importar Contactos Para Chatwoot',
		name: 'chatwootImportContacts',
		type: 'boolean',
		default: false,
		description: 'Define si se importan los contactos a Chatwoot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['chatwoot'],
				resourceForChatwoot: ['setChatwoot'],
			},
		},
	},
	{
		displayName: 'Nombre De La Bandeja De Entrada De Chatwoot',
		name: 'chatwootNameInbox',
		type: 'string',
		default: '',
		description: 'Opcional: Introduce el nombre de la Bandeja de Entrada de Chatwoot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['chatwoot'],
				resourceForChatwoot: ['setChatwoot'],
			},
		},
	},
	{
		displayName: 'Unir Contactos Brasileños En Chatwoot',
		name: 'chatwootMergeBrazilContacts',
		type: 'boolean',
		default: false,
		description: 'Define si se unen los contactos brasileños en Chatwoot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['chatwoot'],
				resourceForChatwoot: ['setChatwoot'],
			},
		},
	},
	{
		displayName: 'Importar Mensajes Para Chatwoot',
		name: 'chatwootImportMessages',
		type: 'boolean',
		default: false,
		description: 'Define si se importan los mensajes a Chatwoot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['chatwoot'],
				resourceForChatwoot: ['setChatwoot'],
			},
		},
	},
	{
		displayName: 'Importar Mensajes De Cuántos Días Para Chatwoot',
		name: 'chatwootDaysLimitImportMessages',
		type: 'number',
		default: 0,
		description:
			'Opcional: Introduce el número de días para limitar la importación de mensajes para Chatwoot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['chatwoot'],
				resourceForChatwoot: ['setChatwoot'],
			},
		},
	},
	{
		displayName: 'Crear Bandeja De Entrada',
		name: 'chatwootAutoCreate',
		type: 'boolean',
		default: true,
		description: 'Define si se crea una bandeja de entrada automáticamente',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['chatwoot'],
				resourceForChatwoot: ['setChatwoot'],
			},
		},
	},
	{
		displayName: 'Nombre Del Contacto De Código QR En Chatwoot',
		name: 'chatwootOrganization',
		type: 'string',
		default: '',
		description: 'Opcional: Introduce el nombre del contacto de Código QR en Chatwoot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['chatwoot'],
				resourceForChatwoot: ['setChatwoot'],
			},
		},
	},
	{
		displayName: 'URL Del Logo Para El Contacto En Chatwoot',
		name: 'chatwootLogo',
		type: 'string',
		default: 'https://github.com/user-attachments/assets/4d1e9cd6-377a-4383-820a-9a97e6cfbb63',
		description: 'Opcional: Introduce la URL del logo para el contacto en Chatwoot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['chatwoot'],
				resourceForChatwoot: ['setChatwoot'],
			},
		},
	},

	// Campos = Typebot
	{
		displayName: 'Nombre De La Instancia',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Introduce el nombre de la instancia para la integración con Typebot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['typebot'],
			},
		},
	},

	{
		displayName: 'Qué Desea Hacer',
		name: 'resourceForTypebot',
		type: 'options',
		options: [
			{
				name: 'Añadir Typebot',
				value: 'createTypebot',
			},
			{
				name: 'Verificar Typebot',
				value: 'findTypebot',
			},
			{
				name: 'Actualizar Typebot',
				value: 'updateTypebot',
			},
			{
				name: 'Eliminar Typebot',
				value: 'deleteTypebot',
			},
			{
				name: 'Iniciar Typebot',
				value: 'startTypebot',
			},
			{
				name: 'Buscar Sesión En Typebot',
				value: 'fetchSessionsTypebot',
			},
			{
				name: 'Cambiar Estado De La Sesión En Typebot',
				value: 'changeStatusTypebot',
			},
		],
		default: 'createTypebot',
		description: 'Elige una opción para realizar con la integración de Typebot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['typebot'],
			},
		},
	},

	// updateTypebot
	{
		displayName: 'ID De Typebot',
		name: 'typebotId',
		type: 'string',
		default: '',
		description: 'Introduce el ID de Typebot que deseas buscar, déjalo vacío para buscar todos',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['typebot'],
				resourceForTypebot: [
					'updateTypebot',
					'findTypebot',
					'deleteTypebot',
					'fetchSessionsTypebot',
					'changeStatusTypebot',
				],
			},
		},
	},

	//Se createTypebot ou updateTypebot
	{
		displayName: 'URL De La API De Typebot',
		name: 'url',
		type: 'string',
		default: '',
		required: true,
		description: 'Introduce la URL de tu Typebot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['typebot'],
				resourceForTypebot: ['createTypebot', 'updateTypebot', 'startTypebot'],
			},
		},
	},
	{
		displayName: 'Nombre Do Typebot',
		name: 'typebot',
		type: 'string',
		default: '',
		required: true,
		description: 'Digite o nome do seu fluxo no typebot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['typebot'],
				resourceForTypebot: ['createTypebot', 'updateTypebot', 'startTypebot'],
			},
		},
	},
	{
		displayName: 'Tipo De Disparador',
		name: 'triggerType',
		type: 'options',
		options: [
			{
				name: 'Palabra Clave',
				value: 'keyword',
			},
			{
				name: 'Todos',
				value: 'all',
			},
		],
		default: 'keyword',
		description: 'Elige una opción para realizar con la integración de Typebot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['typebot'],
				resourceForTypebot: ['createTypebot', 'updateTypebot'],
			},
		},
	},
	{
		displayName: 'Operador Del Disparador',
		name: 'triggerOperator',
		type: 'options',
		options: [
			{
				name: 'Contiene',
				value: 'contains',
			},
			{
				name: 'Igual A',
				value: 'equals',
			},
			{
				name: 'Comienza con',
				value: 'startsWith',
			},
			{
				name: 'Termina con',
				value: 'endsWith',
			},
			{
				name: 'Regex',
				value: 'regex',
			},
		],
		default: 'contains',
		description: 'Elige una opción para realizar con la integración de Typebot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['typebot'],
				resourceForTypebot: ['createTypebot', 'updateTypebot'],
				triggerType: ['keyword'],
			},
		},
	},
	{
		displayName: 'Disparador',
		name: 'triggerValue',
		type: 'string',
		default: '',
		required: true,
		description:
			'Introduce la palabra/frase o regex que se usará como disparador para iniciar Typebot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['typebot'],
				resourceForTypebot: ['createTypebot', 'updateTypebot'],
				triggerType: ['keyword'],
			},
		},
	},
	{
		displayName: 'Expira En (Minutos)',
		name: 'expire',
		type: 'number',
		default: 0,
		required: true,
		description: 'Introduce cuántos minutos sin respuesta el bot deberá ser desactivado',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['typebot'],
				resourceForTypebot: ['createTypebot', 'updateTypebot'],
			},
		},
	},
	{
		displayName: 'Palabra Clave De Finalización',
		name: 'keywordFinish',
		type: 'string',
		default: '#salir',
		required: true,
		description: 'Introduce la palabra/frase que se usará para cerrar el bot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['typebot'],
				resourceForTypebot: ['createTypebot', 'updateTypebot'],
			},
		},
	},
	{
		displayName: 'Retraso Predeterminado Del Mensaje (En Milisegundos)',
		name: 'delayMessage',
		type: 'number',
		default: 1000,
		required: true,
		description: 'Introduce cuántos milisegundos de retraso tendrá el bot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['typebot'],
				resourceForTypebot: ['createTypebot', 'updateTypebot'],
			},
		},
	},
	{
		displayName: 'Mensaje Desconocido',
		name: 'unknownMessage',
		type: 'string',
		default: 'Mensaje no reconocido',
		required: true,
		description: 'Mensaje que se mostrará cuando el bot no entienda la entrada del usuario',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['typebot'],
				resourceForTypebot: ['createTypebot', 'updateTypebot'],
			},
		},
	},
	{
		displayName: 'Escucha Mensajes Enviadas Por Mim',
		name: 'listeningFromMe',
		type: 'boolean',
		default: false,
		description: 'Define si el bot escucha los mensajes enviados por mí',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['typebot'],
				resourceForTypebot: ['createTypebot', 'updateTypebot'],
			},
		},
	},
	{
		displayName: 'Pausa O Bot Quando Eu Enviar Uma Mensagem',
		name: 'stopBotFromMe',
		type: 'boolean',
		default: false,
		description: 'Define si el bot se pausa cuando envío un mensaje',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['typebot'],
				resourceForTypebot: ['createTypebot', 'updateTypebot'],
			},
		},
	},
	{
		displayName: 'Mantem a Sessão Do Bot Aberta',
		name: 'keepOpen',
		type: 'boolean',
		default: false,
		description: 'Define si se mantiene abierta la sesión del bot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['typebot'],
				resourceForTypebot: ['createTypebot', 'updateTypebot'],
			},
		},
	},
	{
		displayName: 'Tempo De Espera (Em Segundos)',
		name: 'debounceTime',
		type: 'number',
		default: 0,
		required: true,
		description:
			'Este es el tiempo que el bot esperará los próximos mensajes después de recibir uno, luego unirá todos los mensajes en uno solo',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['typebot'],
				resourceForTypebot: ['createTypebot', 'updateTypebot'],
			},
		},
	},

	// startTypebot
	{
		displayName: 'Número Del Destinatario',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,
		description: 'RemoteJid del destinatario',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['typebot'],
				resourceForTypebot: ['startTypebot', 'changeStatusTypebot'],
			},
		},
	},
	{
		displayName: 'Iniciar Sesión',
		name: 'startSession',
		type: 'boolean',
		default: false,
		description: 'Define si se habilita o deshabilita la integración con Chatwoot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['typebot'],
				resourceForTypebot: ['startTypebot'],
			},
		},
	},
	{
		displayName: 'Variables',
		name: 'variables',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		default: {},
		options: [
			{
				name: 'variable',
				displayName: 'Variable',
				values: [
					{
						displayName: 'Nombre De La Variable',
						name: 'name',
						type: 'string',
						default: '',
						description: 'Nombre da variável',
					},
					{
						displayName: 'Valor De La Variable',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Valor da variável',
					},
				],
			},
		],
		description: 'Variables para enviar a Typebot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['typebot'],
				resourceForTypebot: ['startTypebot'],
			},
		},
	},

	// Change Session Status
	{
		displayName: 'Estado',
		name: 'status',
		type: 'options',
		options: [
			{
				name: 'Abierta',
				value: 'opened',
			},
			{
				name: 'Pausada',
				value: 'paused',
			},
			{
				name: 'Cerrada',
				value: 'closed',
			},
		],
		default: 'opened',
		description: 'Elige cuál será el estado de la sesión',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['typebot'],
				resourceForTypebot: ['changeStatusTypebot'],
			},
		},
	},

	// EVOLUTION BOT
	{
		displayName: 'Nombre De La Instancia',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Introduce el nombre de la instancia para la integración con Evolution Bot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['evolution-bot'],
			},
		},
	},

	{
		displayName: 'Qué Desea Hacer',
		name: 'resourceForEvolutionBot',
		type: 'options',
		options: [
			{
				name: 'Añadir Evolution Bot',
				value: 'createEvolutionBot',
			},
			{
				name: 'Verificar Evolution Bot',
				value: 'findEvolutionBot',
			},
			{
				name: 'Actualizar Evolution Bot',
				value: 'updateEvolutionBot',
			},
			{
				name: 'Eliminar Evolution Bot',
				value: 'deleteEvolutionBot',
			},
			{
				name: 'Buscar Sesión En Evolution Bot',
				value: 'fetchSessionsEvolutionBot',
			},
			{
				name: 'Cambiar Estado De La Sesión En Evolution Bot',
				value: 'changeStatusEvolutionBot',
			},
		],
		default: 'createEvolutionBot',
		description: 'Elige una opción para realizar con la integración de EvolutionBot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['evolution-bot'],
			},
		},
	},

	// update EvolutionBot
	{
		displayName: 'ID De Evolution Bot',
		name: 'evolutionBotId',
		type: 'string',
		default: '',
		description: 'Introduce el ID de Evolution Bot que deseas buscar, déjalo vacío para buscar todos',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['evolution-bot'],
				resourceForEvolutionBot: [
					'findEvolutionBot',
					'updateEvolutionBot',
					'deleteEvolutionBot',
					'fetchSessionsEvolutionBot',
					'changeStatusEvolutionBot',
				],
			},
		},
	},

	//Se createEvolutionBot ou updateEvolutionBot
	{
		displayName: 'URL De La API De Evolution Bot',
		name: 'apiUrl',
		type: 'string',
		default: '',
		required: true,
		description: 'Introduce la URL de tu Evolution Bot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['evolution-bot'],
				resourceForEvolutionBot: ['createEvolutionBot', 'updateEvolutionBot'],
			},
		},
	},
	{
		displayName: 'APIKey De Evolution Bot',
		name: 'apiKeyBot',
		type: 'string',
		typeOptions: { password: true },
		default: '',
		description: 'Introduce la APIKey de tu Evolution Bot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['evolution-bot'],
				resourceForEvolutionBot: ['createEvolutionBot', 'updateEvolutionBot'],
			},
		},
	},
	{
		displayName: 'Tipo De Disparador',
		name: 'triggerType',
		type: 'options',
		options: [
			{
				name: 'Palabra Clave',
				value: 'keyword',
			},
			{
				name: 'Todos',
				value: 'all',
			},
		],
		default: 'keyword',
		description: 'Elige una opción para realizar con la integración de EvolutionBot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['evolution-bot'],
				resourceForEvolutionBot: ['createEvolutionBot', 'updateEvolutionBot'],
			},
		},
	},
	{
		displayName: 'Operador Del Disparador',
		name: 'triggerOperator',
		type: 'options',
		options: [
			{
				name: 'Contiene',
				value: 'contains',
			},
			{
				name: 'Igual A',
				value: 'equals',
			},
			{
				name: 'Comienza con',
				value: 'startsWith',
			},
			{
				name: 'Termina con',
				value: 'endsWith',
			},
			{
				name: 'Regex',
				value: 'regex',
			},
		],
		default: 'contains',
		description: 'Elige una opción para realizar con la integración de EvolutionBot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['evolution-bot'],
				resourceForEvolutionBot: ['createEvolutionBot', 'updateEvolutionBot'],
				triggerType: ['keyword'],
			},
		},
	},
	{
		displayName: 'Disparador',
		name: 'triggerValue',
		type: 'string',
		default: '',
		required: true,
		description:
			'Introduce la palabra/frase o regex que se usará como disparador para iniciar EvolutionBot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['evolution-bot'],
				resourceForEvolutionBot: ['createEvolutionBot', 'updateEvolutionBot'],
				triggerType: ['keyword'],
			},
		},
	},
	{
		displayName: 'Expira En (Minutos)',
		name: 'expire',
		type: 'number',
		default: 0,
		required: true,
		description: 'Introduce cuántos minutos sin respuesta el bot deberá ser desactivado',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['evolution-bot'],
				resourceForEvolutionBot: ['createEvolutionBot', 'updateEvolutionBot'],
			},
		},
	},
	{
		displayName: 'Palabra Clave De Finalización',
		name: 'keywordFinish',
		type: 'string',
		default: '#salir',
		required: true,
		description: 'Introduce la palabra/frase que se usará para cerrar el bot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['evolution-bot'],
				resourceForEvolutionBot: ['createEvolutionBot', 'updateEvolutionBot'],
			},
		},
	},
	{
		displayName: 'Retraso Predeterminado Del Mensaje (En Milisegundos)',
		name: 'delayMessage',
		type: 'number',
		default: 1000,
		required: true,
		description: 'Introduce cuántos milisegundos de retraso tendrá el bot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['evolution-bot'],
				resourceForEvolutionBot: ['createEvolutionBot', 'updateEvolutionBot'],
			},
		},
	},
	{
		displayName: 'Mensaje Desconocido',
		name: 'unknownMessage',
		type: 'string',
		default: 'Mensaje no reconocido',
		required: true,
		description: 'Mensaje que se mostrará cuando el bot no entienda la entrada del usuario',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['evolution-bot'],
				resourceForEvolutionBot: ['createEvolutionBot', 'updateEvolutionBot'],
			},
		},
	},
	{
		displayName: 'Escucha Mensajes Enviadas Por Mim',
		name: 'listeningFromMe',
		type: 'boolean',
		default: false,
		description: 'Define si el bot escucha los mensajes enviados por mí',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['evolution-bot'],
				resourceForEvolutionBot: ['createEvolutionBot', 'updateEvolutionBot'],
			},
		},
	},
	{
		displayName: 'Pausa O Bot Quando Eu Enviar Uma Mensagem',
		name: 'stopBotFromMe',
		type: 'boolean',
		default: false,
		description: 'Define si el bot se pausa cuando envío un mensaje',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['evolution-bot'],
				resourceForEvolutionBot: ['createEvolutionBot', 'updateEvolutionBot'],
			},
		},
	},
	{
		displayName: 'Mantem a Sessão Do Bot Aberta',
		name: 'keepOpen',
		type: 'boolean',
		default: false,
		description: 'Define si se mantiene abierta la sesión del bot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['evolution-bot'],
				resourceForEvolutionBot: ['createEvolutionBot', 'updateEvolutionBot'],
			},
		},
	},
	{
		displayName: 'Tempo De Espera (Em Segundos)',
		name: 'debounceTime',
		type: 'number',
		default: 0,
		required: true,
		description:
			'Este es el tiempo que el bot esperará los próximos mensajes después de recibir uno, luego unirá todos los mensajes en uno solo',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['evolution-bot'],
				resourceForEvolutionBot: ['createEvolutionBot', 'updateEvolutionBot'],
			},
		},
	},

	// Change Session Status EvolutionBot
	{
		displayName: 'Número Del Destinatario',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,
		description: 'RemoteJid del destinatario',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['evolution-bot'],
				resourceForEvolutionBot: ['changeStatusEvolutionBot'],
			},
		},
	},
	{
		displayName: 'Estado',
		name: 'status',
		type: 'options',
		options: [
			{
				name: 'Abierta',
				value: 'opened',
			},
			{
				name: 'Pausada',
				value: 'paused',
			},
			{
				name: 'Cerrada',
				value: 'closed',
			},
		],
		default: 'opened',
		description: 'Elige cuál será el estado de la sesión',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['evolution-bot'],
				resourceForEvolutionBot: ['changeStatusEvolutionBot'],
			},
		},
	},

	// Dify
	{
		displayName: 'Nombre De La Instancia',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Introduce el nombre de la instancia para la integración con Dify',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['difyBot'],
			},
		},
	},
	{
		displayName: 'Qué Desea Hacer',
		name: 'resourceForDifyBot',
		type: 'options',
		options: [
			{
				name: 'Añadir Dify',
				value: 'createDify',
			},
			{
				name: 'Verificar Dify',
				value: 'findDify',
			},
			{
				name: 'Actualizar Dify',
				value: 'updateDify',
			},
			{
				name: 'Eliminar Dify',
				value: 'deleteDify',
			},
			{
				name: 'Buscar Sesión En Dify',
				value: 'fetchSessionsDify',
			},
			{
				name: 'Cambiar Estado De La Sesión En Dify',
				value: 'changeStatusDify',
			},
		],
		default: 'createDify',
		description: 'Elige una opción para realizar con la integración de Dify',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['difyBot'],
			},
		},
	},
	{
		displayName: 'Tipo De Bot',
		name: 'botType',
		type: 'options',
		options: [
			{
				name: 'Bot De Chat',
				value: 'chatBot',
			},
			{
				name: 'Generador De Texto',
				value: 'textGenerator',
			},
			{
				name: 'Agente',
				value: 'agent',
			},
			{
				name: 'Flujo De Trabajo',
				value: 'workflow',
			},
		],
		default: 'chatBot',
		required: true,
		description: 'Elige el tipo de bot Dify',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['dify'], // Kept as is, but noted as potential original typo
				resourceForDifyBot: ['createDify'],
			},
		},
	},

	// update Dify
	{
		displayName: 'ID De Dify',
		name: 'difyBotId',
		type: 'string',
		default: '',
		description: 'Introduce el ID de Dify que deseas buscar, déjalo vacío para buscar todos',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['difyBot'],
				resourceForDifyBot: [
					'findDify',
					'updateDify',
					'deleteDify',
					'fetchSessionsDify',
					'changeStatusDify',
				],
			},
		},
	},

	//Se createDify ou updateDify
	{
		displayName: 'URL De Dify',
		name: 'apiUrl',
		type: 'string',
		default: '',
		required: true,
		description: 'Introduce la URL de tu Dify',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['difyBot'],
				resourceForDifyBot: ['createDify', 'updateDify'],
			},
		},
	},
	{
		displayName: 'APIKey De Dify',
		name: 'apiKeyBot',
		type: 'string',
		typeOptions: { password: true },
		default: '',
		required: true,
		description: 'Introduce la APIKey de tu bot de Dify',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['difyBot'],
				resourceForDifyBot: ['createDify', 'updateDify'],
			},
		},
	},
	{
		displayName: 'Tipo De Disparador',
		name: 'triggerType',
		type: 'options',
		options: [
			{
				name: 'Palabra Clave',
				value: 'keyword',
			},
			{
				name: 'Todos',
				value: 'all',
			},
		],
		default: 'keyword',
		description: 'Elige una opción para realizar con la integración de Dify',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['difyBot'],
				resourceForDifyBot: ['createDify', 'updateDify'],
			},
		},
	},
	{
		displayName: 'Operador Del Disparador',
		name: 'triggerOperator',
		type: 'options',
		options: [
			{
				name: 'Contiene',
				value: 'contains',
			},
			{
				name: 'Igual A',
				value: 'equals',
			},
			{
				name: 'Comienza con',
				value: 'startsWith',
			},
			{
				name: 'Termina con',
				value: 'endsWith',
			},
			{
				name: 'Regex',
				value: 'regex',
			},
		],
		default: 'contains',
		description: 'Elige una opción para realizar con la integración de Dify',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['difyBot'],
				resourceForDifyBot: ['createDify', 'updateDify'],
				triggerType: ['keyword'],
			},
		},
	},
	{
		displayName: 'Disparador',
		name: 'triggerValue',
		type: 'string',
		default: '',
		required: true,
		description: 'Introduce la palabra/frase o regex que se usará como disparador para iniciar Dify',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['difyBot'],
				resourceForDifyBot: ['createDify', 'updateDify'],
				triggerType: ['keyword'],
			},
		},
	},
	{
		displayName: 'Expira En (Minutos)',
		name: 'expire',
		type: 'number',
		default: 0,
		required: true,
		description: 'Introduce cuántos minutos sin respuesta el bot deberá ser desactivado',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['difyBot'],
				resourceForDifyBot: ['createDify', 'updateDify'],
			},
		},
	},
	{
		displayName: 'Palabra Clave De Finalización',
		name: 'keywordFinish',
		type: 'string',
		default: '#salir',
		required: true,
		description: 'Introduce la palabra/frase que se usará para cerrar el bot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['difyBot'],
				resourceForDifyBot: ['createDify', 'updateDify'],
			},
		},
	},
	{
		displayName: 'Retraso Predeterminado Del Mensaje (En Milisegundos)',
		name: 'delayMessage',
		type: 'number',
		default: 1000,
		required: true,
		description: 'Introduce cuántos milisegundos de retraso tendrá el bot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['difyBot'],
				resourceForDifyBot: ['createDify', 'updateDify'],
			},
		},
	},
	{
		displayName: 'Mensaje Desconocido',
		name: 'unknownMessage',
		type: 'string',
		default: 'Mensaje no reconocido',
		required: true,
		description: 'Mensaje que se mostrará cuando el bot no entienda la entrada del usuario',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['difyBot'],
				resourceForDifyBot: ['createDify', 'updateDify'],
			},
		},
	},
	{
		displayName: 'Escucha Mensajes Enviadas Por Mim',
		name: 'listeningFromMe',
		type: 'boolean',
		default: false,
		description: 'Define si el bot escucha los mensajes enviados por mí',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['difyBot'],
				resourceForDifyBot: ['createDify', 'updateDify'],
			},
		},
	},
	{
		displayName: 'Pausa O Bot Quando Eu Enviar Uma Mensagem',
		name: 'stopBotFromMe',
		type: 'boolean',
		default: false,
		description: 'Define si el bot se pausa cuando envío un mensaje',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['difyBot'],
				resourceForDifyBot: ['createDify', 'updateDify'],
			},
		},
	},
	{
		displayName: 'Mantem a Sessão Do Bot Aberta',
		name: 'keepOpen',
		type: 'boolean',
		default: false,
		description: 'Define si se mantiene abierta la sesión del bot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['difyBot'],
				resourceForDifyBot: ['createDify', 'updateDify'],
			},
		},
	},
	{
		displayName: 'Tempo De Espera (Em Segundos)',
		name: 'debounceTime',
		type: 'number',
		default: 0,
		required: true,
		description:
			'Este es el tiempo que el bot esperará los próximos mensajes después de recibir uno, luego unirá todos los mensajes en uno solo',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['difyBot'],
				resourceForDifyBot: ['createDify', 'updateDify'],
			},
		},
	},

	// Change Session Status Dify
	{
		displayName: 'Número Del Destinatario',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,
		description: 'RemoteJid del destinatario',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['difyBot'],
				resourceForDifyBot: ['changeStatusDify'],
			},
		},
	},
	{
		displayName: 'Estado',
		name: 'status',
		type: 'options',
		options: [
			{
				name: 'Abierta',
				value: 'opened',
			},
			{
				name: 'Pausada',
				value: 'paused',
			},
			{
				name: 'Cerrada',
				value: 'closed',
			},
		],
		default: 'opened',
		description: 'Elige cuál será el estado de la sesión',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['difyBot'],
				resourceForDifyBot: ['changeStatusDify'],
			},
		},
	},

	{
		displayName: 'Nombre De La Instancia',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Introduce el nombre de la instancia para la integración con Flowise',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['flowiseBot'],
			},
		},
	},
	{
		displayName: 'Qué Desea Hacer',
		name: 'resourceForFlowiseBot',
		type: 'options',
		options: [
			{
				name: 'Añadir Flowise',
				value: 'createFlowise',
			},
			{
				name: 'Verificar Flowise',
				value: 'findFlowise',
			},
			{
				name: 'Actualizar Flowise',
				value: 'updateFlowise',
			},
			{
				name: 'Eliminar Flowise',
				value: 'deleteFlowise',
			},
			{
				name: 'Buscar Sesión En Flowise',
				value: 'fetchSessionsFlowise',
			},
			{
				name: 'Cambiar Estado De La Sesión En Flowise',
				value: 'changeStatusFlowise',
			},
		],
		default: 'createFlowise',
		description: 'Elige una opción para realizar con la integración de Flowise',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['flowiseBot'],
			},
		},
	},

	// update Flowise
	{
		displayName: 'ID De Flowise',
		name: 'flowiseBotId',
		type: 'string',
		default: '',
		description: 'Introduce el ID de Flowise que deseas buscar, déjalo vacío para buscar todos',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['flowiseBot'],
				resourceForFlowiseBot: [
					'updateFlowise',
					'findFlowise',
					'deleteFlowise',
					'fetchSessionsFlowise',
					'changeStatusFlowise',
				],
			},
		},
	},

	//Se createFlowise ou updateFlowise
	{
		displayName: 'URL De Flowise',
		name: 'apiUrl',
		type: 'string',
		default: '',
		required: true,
		description: 'Introduce la URL de tu Flowise',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['flowiseBot'],
				resourceForFlowiseBot: ['createFlowise', 'updateFlowise'],
			},
		},
	},
	{
		displayName: 'APIKey De Flowise',
		name: 'apiKeyBot',
		type: 'string',
		typeOptions: { password: true },
		default: '',
		description: 'Introduce la APIKey de tu bot de Flowise',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['flowiseBot'],
				resourceForFlowiseBot: ['createFlowise', 'updateFlowise'],
			},
		},
	},
	{
		displayName: 'Tipo De Disparador',
		name: 'triggerType',
		type: 'options',
		options: [
			{
				name: 'Palabra Clave',
				value: 'keyword',
			},
			{
				name: 'Todos',
				value: 'all',
			},
		],
		default: 'keyword',
		description: 'Elige una opción para realizar con la integración de Flowise',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['flowiseBot'],
				resourceForFlowiseBot: ['createFlowise', 'updateFlowise'],
			},
		},
	},
	{
		displayName: 'Operador Del Disparador',
		name: 'triggerOperator',
		type: 'options',
		options: [
			{
				name: 'Contiene',
				value: 'contains',
			},
			{
				name: 'Igual A',
				value: 'equals',
			},
			{
				name: 'Comienza con',
				value: 'startsWith',
			},
			{
				name: 'Termina con',
				value: 'endsWith',
			},
			{
				name: 'Regex',
				value: 'regex',
			},
		],
		default: 'contains',
		description: 'Elige una opción para realizar con la integración de Flowise',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['flowiseBot'],
				resourceForFlowiseBot: ['createFlowise', 'updateFlowise'],
				triggerType: ['keyword'],
			},
		},
	},
	{
		displayName: 'Disparador',
		name: 'triggerValue',
		type: 'string',
		default: '',
		required: true,
		description:
			'Introduce la palabra/frase o regex que se usará como disparador para iniciar Flowise',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['flowiseBot'],
				resourceForFlowiseBot: ['createFlowise', 'updateFlowise'],
				triggerType: ['keyword'],
			},
		},
	},
	{
		displayName: 'Expira En (Minutos)',
		name: 'expire',
		type: 'number',
		default: 0,
		required: true,
		description: 'Introduce cuántos minutos sin respuesta el bot deberá ser desactivado',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['flowiseBot'],
				resourceForFlowiseBot: ['createFlowise', 'updateFlowise'],
			},
		},
	},
	{
		displayName: 'Palabra Clave De Finalización',
		name: 'keywordFinish',
		type: 'string',
		default: '#salir',
		required: true,
		description: 'Introduce la palabra/frase que se usará para cerrar el bot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['flowiseBot'],
				resourceForFlowiseBot: ['createFlowise', 'updateFlowise'],
			},
		},
	},
	{
		displayName: 'Retraso Predeterminado Del Mensaje (En Milisegundos)',
		name: 'delayMessage',
		type: 'number',
		default: 1000,
		required: true,
		description: 'Introduce cuántos milisegundos de retraso tendrá el bot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['flowiseBot'],
				resourceForFlowiseBot: ['createFlowise', 'updateFlowise'],
			},
		},
	},
	{
		displayName: 'Mensaje Desconocido',
		name: 'unknownMessage',
		type: 'string',
		default: 'Mensaje no reconocido',
		required: true,
		description: 'Mensaje que se mostrará cuando el bot no entienda la entrada del usuario',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['flowiseBot'],
				resourceForFlowiseBot: ['createFlowise', 'updateFlowise'],
			},
		},
	},
	{
		displayName: 'Escucha Mensajes Enviadas Por Mim',
		name: 'listeningFromMe',
		type: 'boolean',
		default: false,
		description: 'Define si el bot escucha los mensajes enviados por mí',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['flowiseBot'],
				resourceForFlowiseBot: ['createFlowise', 'updateFlowise'],
			},
		},
	},
	{
		displayName: 'Pausa O Bot Quando Eu Enviar Uma Mensagem',
		name: 'stopBotFromMe',
		type: 'boolean',
		default: false,
		description: 'Define si el bot se pausa cuando envío un mensaje',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['flowiseBot'],
				resourceForFlowiseBot: ['createFlowise', 'updateFlowise'],
			},
		},
	},
	{
		displayName: 'Mantem a Sessão Do Bot Aberta',
		name: 'keepOpen',
		type: 'boolean',
		default: false,
		description: 'Define si se mantiene abierta la sesión del bot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['flowiseBot'],
				resourceForFlowiseBot: ['createFlowise', 'updateFlowise'],
			},
		},
	},
	{
		displayName: 'Tempo De Espera (Em Segundos)',
		name: 'debounceTime',
		type: 'number',
		default: 0,
		required: true,
		description:
			'Este es el tiempo que el bot esperará los próximos mensajes después de recibir uno, luego unirá todos los mensajes en uno solo',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['flowiseBot'],
				resourceForFlowiseBot: ['createFlowise', 'updateFlowise'],
			},
		},
	},

	// Change Session Status Flowise
	{
		displayName: 'Número Del Destinatario',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,
		description: 'RemoteJid del destinatario',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['flowiseBot'],
				resourceForFlowiseBot: ['changeStatusFlowise'],
			},
		},
	},
	{
		displayName: 'Estado',
		name: 'status',
		type: 'options',
		options: [
			{
				name: 'Abierta',
				value: 'opened',
			},
			{
				name: 'Pausada',
				value: 'paused',
			},
			{
				name: 'Cerrada',
				value: 'closed',
			},
		],
		default: 'opened',
		description: 'Elige cuál será el estado de la sesión',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['flowiseBot'],
				resourceForFlowiseBot: ['changeStatusFlowise'],
			},
		},
	},

	{
		displayName: 'JIDs Ignorados',
		name: 'ignoreJids',
		type: 'string',
		typeOptions: {
			multipleValues: true,
		},
		default: [],
		description: 'Lista de JIDs que serán ignorados pelo bot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['evolution-bot'],
				resourceForEvolutionBot: ['createEvolutionBot', 'updateEvolutionBot'],
			},
		},
	},
	{
		displayName: 'Operador Del Disparador',
		name: 'triggerOperator',
		type: 'options',
		options: [
			{
				name: 'Contiene',
				value: 'contains',
			},
			{
				name: 'Igual A',
				value: 'equals',
			},
			{
				name: 'Comienza con',
				value: 'startsWith',
			},
			{
				name: 'Termina con',
				value: 'endsWith',
			},
			{
				name: 'Regex',
				value: 'regex',
			},
			{
				name: 'Ninguno',
				value: 'none',
			},
		],
		default: 'equals',
		description: 'Escolha o tipo de operador para o gatilho',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['evolution-bot'],
				resourceForEvolutionBot: ['createEvolutionBot', 'updateEvolutionBot'],
			},
		},
	}
];
