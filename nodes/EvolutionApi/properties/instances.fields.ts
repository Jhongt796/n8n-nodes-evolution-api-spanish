import { INodeProperties } from 'n8n-workflow';

// Campos de las instancias
export const instancesFields: INodeProperties[] = [
	// Campos = Criar Instancia
	{
		displayName: 'Nombre De La Instancia',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Introduce el nombre para la instancia',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['instance-basic'],
			},
		},
	},
	{
		displayName: 'APIKey Para Instancia',
		name: 'token',
		type: 'string',
		typeOptions: {
			password: true,
		},
		default: '',

		description: 'Opcional: Introduce un Token para la instancia',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['instance-basic'],
			},
		},
	},
	{
		displayName: 'Número De WhatsApp',
		name: 'number',
		type: 'string',
		default: '',

		description:
			'Opcional: Número que se conectará en la instancia, para recibir el Código de emparejamiento',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['instance-basic'],
			},
		},
	},
	{
		displayName: 'Opciones',
		name: 'options_Create_instance',
		type: 'collection',
		placeholder: 'Añadir Campo',
		default: {},
		options: [
			{
				displayName: 'Chatwoot',
				name: 'chatwoot',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: { settings: {} },
				options: [
					{
						displayName: 'Configuraciones De Chatwoot',
						name: 'chatwootSettings',
						values: [
							{
								displayName: 'ID De La Cuenta De Chatwoot',
								name: 'chatwootAccountId',
								type: 'string',
								default: '',
								description: 'Introduce el ID de la cuenta de Chatwoot',
							},
							{
								displayName: 'Token De Admin De Chatwoot',
								name: 'chatwootToken',
								type: 'string',
								typeOptions: {
									password: true,
								},
								default: '',
								description: 'Introduce el token de admin de Chatwoot',
							},
							{
								displayName: 'Enlace De Chatwoot',
								name: 'chatwootUrl',
								type: 'string',
								default: '',
								description: 'Introduce el enlace de Chatwoot',
							},
							{
								displayName: 'Firma Del Agente De Chatwoot',
								name: 'chatwootSignMsg',
								type: 'boolean',
								default: false,
								description: 'Define si se habilita o deshabilita la firma del agente de Chatwoot',
							},
							{
								displayName: 'Reabrir Mensajes En Chatwoot',
								name: 'chatwootReopenConversation',
								type: 'boolean',
								default: false,
								description: 'Define si se habilita o deshabilita la reapertura de mensajes en Chatwoot',
							},
							{
								displayName: 'Iniciar Conversaciones Como Pendientes En Chatwoot',
								name: 'chatwootConversationPending',
								type: 'boolean',
								default: false,
								description: 'Define si se inician las conversaciones como pendientes en Chatwoot',
							},
							{
								displayName: 'Importar Contactos Para Chatwoot',
								name: 'chatwootImportContacts',
								type: 'boolean',
								default: false,
								description: 'Define si se importan los contactos a Chatwoot',
							},
							{
								displayName: 'Nombre De La Bandeja De Entrada De Chatwoot',
								name: 'chatwootNameInbox',
								type: 'string',
								default: '',
								description: 'Introduce el nombre de la Bandeja de Entrada de Chatwoot',
							},
							{
								displayName: 'Unir Contactos Brasileños En Chatwoot',
								name: 'chatwootMergeBrazilContacts',
								type: 'boolean',
								default: false,
								description: 'Define si se unen los contactos brasileños en Chatwoot',
							},
							{
								displayName: 'Importar Mensajes Para Chatwoot',
								name: 'chatwootImportMessages',
								type: 'boolean',
								default: false,
								description: 'Define si se importan los mensajes a Chatwoot',
							},
							{
								displayName: 'Importar Mensajes De Cuántos Días Para Chatwoot',
								name: 'chatwootDaysLimitImportMessages',
								type: 'number',
								default: 0,
								description:
									'Introduce el número de días para limitar la importación de mensajes para Chatwoot',
							},
							{
								displayName: 'Nombre Del Contacto De Código QR En Chatwoot',
								name: 'chatwootOrganization',
								type: 'string',
								default: '',
								description: 'Introduce el nombre del contacto de Código QR en Chatwoot',
							},
							{
								displayName: 'URL Del Logo Para El Contacto En Chatwoot',
								name: 'chatwootLogo',
								type: 'string',
								default:
									'https://github.com/user-attachments/assets/4d1e9cd6-377a-4383-820a-9a97e6cfbb63',
								description: 'Introduce la URL del logo para el contacto en Chatwoot',
							},
						],
					},
				],
				description: 'Configuraciones de Chatwoot',
			},
			{
				displayName: 'Comportamiento',
				name: 'instanceSettings',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: { settings: {} },
				options: [
					{
						displayName: 'Comportamiento De La Instancia',
						name: 'settings',
						values: [
							{
								displayName: 'Rechazar Llamadas',
								name: 'rejectCall',
								type: 'boolean',
								default: false,
								description: 'Define si se rechazan automáticamente las llamadas entrantes',
							},
							{
								displayName: 'Mensaje Al Rechazar',
								name: 'msgCall',
								type: 'string',
								default: '',
								description:
									'Define si se envía un mensaje después de rechazar una llamada y, de ser así, qué mensaje',
							},
							{
								displayName: 'Ignorar Grupos',
								name: 'groupsIgnore',
								type: 'boolean',
								default: false,
								description: 'Define si se ignoran los mensajes de los grupos',
							},
							{
								displayName: 'Siempre En Línea',
								name: 'alwaysOnline',
								type: 'boolean',
								default: false,
								description: 'Define si se mantiene el estado siempre como En Línea',
							},
							{
								displayName: 'Leer Mensajes',
								name: 'readMessages',
								type: 'boolean',
								default: false,
								description: 'Define si se marcan automáticamente los mensajes como leídos',
							},
							{
								displayName: 'Leer Estados',
								name: 'readStatus',
								type: 'boolean',
								default: false,
								description: 'Define si se permite a la API ver el Estado de los contactos agregados',
							},
							{
								displayName: 'Sincronizar Historial',
								name: 'syncFullHistory',
								type: 'boolean',
								default: false,
								description: 'Define si se sincroniza el historial completo de mensajes con la API',
							},
						],
					},
				],
				description: 'Comportamiento de la instancia',
			},
			{
				displayName: 'Proxy',
				name: 'proxy',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: { settings: {} },
				options: [
					{
						displayName: 'Configuraciones Del Proxy',
						name: 'proxySettings',
						values: [
							{
								displayName: 'Host Del Proxy',
								name: 'proxyHost',
								type: 'string',
								default: '',
								description: 'Introduce el host del proxy',
							},
							{
								displayName: 'Puerto Del Proxy',
								name: 'proxyPort',
								type: 'string',
								default: '1234',
								description: 'Introduce el puerto del proxy',
							},
							{
								displayName: 'Protocolo Del Proxy',
								name: 'proxyProtocol',
								type: 'options',
								options: [
									{
										name: 'HTTP',
										value: 'http',
									},
									{
										name: 'HTTPS',
										value: 'https',
									},
								],
								default: 'http',
								description: 'Selecciona el protocolo del proxy',
							},
							{
								displayName: 'Usuario Del Proxy',
								name: 'proxyUsername',
								type: 'string',
								default: '',
								description: 'Introduce el usuario del proxy',
							},
							{
								displayName: 'Contraseña Del Proxy',
								name: 'proxyPassword',
								type: 'string',
								typeOptions: {
									password: true,
								},
								default: '',
								description: 'Introduce la contraseña del proxy',
							},
						],
					},
				],
				description: 'Configuraciones del proxy',
			},
			{
				displayName: 'RabbitMQ',
				name: 'rabbitmq',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: { settings: {} },
				options: [
					{
						displayName: 'Configuraciones De RabbitMQ',
						name: 'rabbitmqSettings',
						values: [
							{
								displayName: 'Activa O Desactiva RabbitMQ',
								name: 'rabbitmqEnabled',
								type: 'boolean',
								default: false,
								description: 'Define si se envían datos multimedia en formato base64 en RabbitMQ',
							},
							{
								displayName: 'Eventos',
								name: 'rabbitmqEvents',
								type: 'multiOptions',
								default: [],
								options: [
									{
										name: 'CALL',
										value: 'CALL',
									},
									{
										name: 'CHATS_DELETE',
										value: 'CHATS_DELETE',
									},
									{
										name: 'CHATS_SET',
										value: 'CHATS_SET',
									},
									{
										name: 'CHATS_UPDATE',
										value: 'CHATS_UPDATE',
									},
									{
										name: 'CHATS_UPSERT',
										value: 'CHATS_UPSERT',
									},
									{
										name: 'CONNECTION_UPDATE',
										value: 'CONNECTION_UPDATE',
									},
									{
										name: 'CONTACTS_SET',
										value: 'CONTACTS_SET',
									},
									{
										name: 'CONTACTS_UPDATE',
										value: 'CONTACTS_UPDATE',
									},
									{
										name: 'CONTACTS_UPSERT',
										value: 'CONTACTS_UPSERT',
									},
									{
										name: 'GROUP_PARTICIPANTS_UPDATE',
										value: 'GROUP_PARTICIPANTS_UPDATE',
									},
									{
										name: 'GROUP_UPDATE',
										value: 'GROUP_UPDATE',
									},
									{
										name: 'GROUPS_UPSERT',
										value: 'GROUPS_UPSERT',
									},
									{
										name: 'LABELS_ASSOCIATION',
										value: 'LABELS_ASSOCIATION',
									},
									{
										name: 'LABELS_EDIT',
										value: 'LABELS_EDIT',
									},
									{
										name: 'MESSAGES_DELETE',
										value: 'MESSAGES_DELETE',
									},
									{
										name: 'MESSAGES_SET',
										value: 'MESSAGES_SET',
									},
									{
										name: 'MESSAGES_UPDATE',
										value: 'MESSAGES_UPDATE',
									},
									{
										name: 'MESSAGES_UPSERT',
										value: 'MESSAGES_UPSERT',
									},
									{
										name: 'PRESENCE_UPDATE',
										value: 'PRESENCE_UPDATE',
									},
									{
										name: 'QRCODE_UPDATED',
										value: 'QRCODE_UPDATED',
									},
									{
										name: 'SEND_MESSAGE',
										value: 'SEND_MESSAGE',
									},
									{
										name: 'TYPEBOT_CHANGE_STATUS',
										value: 'TYPEBOT_CHANGE_STATUS',
									},
									{
										name: 'TYPEBOT_START',
										value: 'TYPEBOT_START',
									},
								],
							},
						],
					},
				],
				description: 'Los eventos a monitorear',
			},
			{
				displayName: 'Webhook',
				name: 'webhook',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: { settings: {} },
				options: [
					{
						displayName: 'Configuraciones De Webhook',
						name: 'webhookSettings',
						values: [
							{
								displayName: 'URL Del Webhook',
								name: 'webhookUrl',
								type: 'string',
								default: '',
								description: 'Introduce la URL que recibirá los eventos del Webhook',
							},
							{
								displayName: 'Webhook Por Eventos',
								name: 'webhookByEvents',
								type: 'boolean',
								default: false,
								description:
									'Define si se crea una ruta para cada evento anexando el nombre del evento al final de la URL',
							},
							{
								displayName: 'Base64 En Webhook',
								name: 'webhookBase64',
								type: 'boolean',
								default: false,
								description: 'Define si se envían datos multimedia en formato base64 en el webhook',
							},
							{
								displayName: 'Eventos',
								name: 'webhookEvents',
								type: 'multiOptions',
								default: [],
								options: [
									{
										name: 'CALL',
										value: 'CALL',
									},
									{
										name: 'CHATS_DELETE',
										value: 'CHATS_DELETE',
									},
									{
										name: 'CHATS_SET',
										value: 'CHATS_SET',
									},
									{
										name: 'CHATS_UPDATE',
										value: 'CHATS_UPDATE',
									},
									{
										name: 'CHATS_UPSERT',
										value: 'CHATS_UPSERT',
									},
									{
										name: 'CONNECTION_UPDATE',
										value: 'CONNECTION_UPDATE',
									},
									{
										name: 'CONTACTS_SET',
										value: 'CONTACTS_SET',
									},
									{
										name: 'CONTACTS_UPDATE',
										value: 'CONTACTS_UPDATE',
									},
									{
										name: 'CONTACTS_UPSERT',
										value: 'CONTACTS_UPSERT',
									},
									{
										name: 'GROUP_PARTICIPANTS_UPDATE',
										value: 'GROUP_PARTICIPANTS_UPDATE',
									},
									{
										name: 'GROUP_UPDATE',
										value: 'GROUP_UPDATE',
									},
									{
										name: 'GROUPS_UPSERT',
										value: 'GROUPS_UPSERT',
									},
									{
										name: 'LABELS_ASSOCIATION',
										value: 'LABELS_ASSOCIATION',
									},
									{
										name: 'LABELS_EDIT',
										value: 'LABELS_EDIT',
									},
									{
										name: 'MESSAGES_DELETE',
										value: 'MESSAGES_DELETE',
									},
									{
										name: 'MESSAGES_SET',
										value: 'MESSAGES_SET',
									},
									{
										name: 'MESSAGES_UPDATE',
										value: 'MESSAGES_UPDATE',
									},
									{
										name: 'MESSAGES_UPSERT',
										value: 'MESSAGES_UPSERT',
									},
									{
										name: 'PRESENCE_UPDATE',
										value: 'PRESENCE_UPDATE',
									},
									{
										name: 'QRCODE_UPDATED',
										value: 'QRCODE_UPDATED',
									},
									{
										name: 'SEND_MESSAGE',
										value: 'SEND_MESSAGE',
									},
									{
										name: 'TYPEBOT_CHANGE_STATUS',
										value: 'TYPEBOT_CHANGE_STATUS',
									},
									{
										name: 'TYPEBOT_START',
										value: 'TYPEBOT_START',
									},
								],
							},
						],
					},
				],
				description: 'Los eventos a monitorear',
			},
		],
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['instance-basic'],
			},
		},
	},

	// Campos = Conectar Instância
	{
		displayName: 'Nombre De La Instancia',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Introduce el nombre de la instancia que deseas buscar',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['instance-connect'],
			},
		},
	},

	// Campos = Buscar Instancia
	{
		displayName: 'Nombre De La Instancia',
		name: 'instanceName',
		type: 'string',
		default: '',

		description: 'Introduce el nombre de la instancia que deseas buscar',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['fetch-instances'],
			},
		},
	},

	// Campos = Definir Comportamento
	{
		displayName: 'Nombre De La Instancia',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Introduce el nombre para la instancia',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['instance-settings'],
			},
		},
	},
	{
		displayName: 'Rechazar Llamadas',
		name: 'rejectCall',
		type: 'boolean',
		default: false,
		description: 'Define si se rechazan las llamadas o no',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['instance-settings'],
			},
		},
	},
	{
		displayName: 'Mensaje De Llamadas',
		name: 'msgCall',
		type: 'string',
		default: 'No aceptamos llamadas telefónicas.',

		description: 'Mensaje a enviar si se rechazan las llamadas',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['instance-settings'],
			},
		},
	},
	{
		displayName: 'Ignorar Grupos',
		name: 'groupsIgnore',
		type: 'boolean',
		default: false,
		description: 'Define si se ignoran los mensajes de grupos',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['instance-settings'],
			},
		},
	},
	{
		displayName: 'Siempre En Línea',
		name: 'alwaysOnline',
		type: 'boolean',
		default: false,
		description: 'Define si la instancia debe estar siempre en línea o no',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['instance-settings'],
			},
		},
	},
	{
		displayName: 'Leer Mensajes',
		name: 'readMessages',
		type: 'boolean',
		default: false,
		description: 'Define si los mensajes se marcan como leídos automáticamente',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['instance-settings'],
			},
		},
	},
	{
		displayName: 'Sincronizar Historial Completo',
		name: 'syncFullHistory',
		type: 'boolean',
		default: false,
		description: 'Define si se sincroniza todo el historial o no',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['instance-settings'],
			},
		},
	},
	{
		displayName: 'Leer Estados',
		name: 'readStatus',
		type: 'boolean',
		default: false,
		description: 'Define si se leen los estados de los contactos',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['instance-settings'],
			},
		},
	},

	// Campos = Definir presença
	{
		displayName: 'Nombre De La Instancia',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Introduce el nombre de la instancia',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['set-presence'],
			},
		},
	},
	{
		displayName: 'Presencia',
		name: 'presence',
		type: 'options',
		options: [
			{
				name: 'Disponible',
				value: 'available',
			},
			{
				name: 'No disponible',
				value: 'unavailable',
			},
		],
		default: 'available',
		required: true,
		description: 'Estado de presencia de la instancia',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['set-presence'],
			},
		},
	},

	// Campos = Proxy
	{
		displayName: 'Nombre De La Instancia',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Introduce el nombre de la instancia para la configuración del proxy',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['set-proxy'],
			},
		},
	},

	{
		displayName: 'Qué Desea Hacer',
		name: 'resourceForProxy',
		type: 'options',
		options: [
			{
				name: 'Definir Proxy',
				value: 'setProxy',
			},
			{
				name: 'Verificar Proxy',
				value: 'findProxy',
			},
		],
		default: 'setProxy',
		description: 'Elige entre activar/desactivar el proxy o verificar el proxy existente',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['set-proxy'],
			},
		},
	},
	{
		displayName: 'Activar Proxy',
		name: 'enabled',
		type: 'boolean',
		default: true,
		description: 'Define si se habilita o deshabilita la integración con el proxy',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['set-proxy'],
				resourceForProxy: ['setProxy'],
			},
		},
	},
	{
		displayName: 'Protocolo Del Proxy',
		name: 'proxyProtocol',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['set-proxy'],
				resourceForProxy: ['setProxy'],
			},
		},
		type: 'options',
		options: [
			{
				name: 'HTTP',
				value: 'http',
			},
			{
				name: 'HTTPS',
				value: 'https',
			},
		],
		default: 'http',
		description: 'Selecciona el protocolo del proxy',
	},
	{
		displayName: 'Host Del Proxy',
		name: 'proxyHost',
		type: 'string',
		default: '',
		required: true,
		description: 'Introduce el host del proxy',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['set-proxy'],
				resourceForProxy: ['setProxy'],
			},
		},
	},
	{
		displayName: 'Puerto Del Proxy',
		name: 'proxyPort',
		type: 'string',
		default: '1234',
		required: true,
		description: 'Introduce el puerto del proxy',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['set-proxy'],
				resourceForProxy: ['setProxy'],
			},
		},
	},
	{
		displayName: 'Usuario Del Proxy',
		name: 'proxyUsername',
		type: 'string',
		default: '',
		required: true,
		description: 'Introduce el usuario del proxy',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['set-proxy'],
				resourceForProxy: ['setProxy'],
			},
		},
	},
	{
		displayName: 'Contraseña Del Proxy',
		name: 'proxyPassword',
		type: 'string',
		required: true,
		typeOptions: {
			password: true,
		},
		default: '',
		description: 'Introduce la contraseña del proxy',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['set-proxy'],
				resourceForProxy: ['setProxy'],
			},
		},
	},

	// Campos = Reiniciar instancia
	{
		displayName: 'Nombre De La Instancia',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Introduce el nombre de la instancia que deseas buscar',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['restart-instance'],
			},
		},
	},

	// Campos = Desconectar instancia
	{
		displayName: 'Nombre De La Instancia',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Introduce el nombre de la instancia que deseas buscar',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['logout-instance'],
			},
		},
	},

	// Campos = Deletar instancia
	{
		displayName: 'Nombre De La Instancia',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Introduce el nombre de la instancia que será eliminada',
		displayOptions: {
			show: {
				resource: ['instances-api'],
				operation: ['delete-instance'],
			},
		},
	},
];
