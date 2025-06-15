import { INodeProperties } from 'n8n-workflow';

export const messagesFields: INodeProperties[] = [
	// Campos = Enviar mensaje de texto
	{
		displayName: 'Nombre De La Instancia',
		name: 'instanceName',
		type: 'string',
		default: '',

		description: 'Introduce el nombre de la instancia que enviará el mensaje',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-text'],
			},
		},
	},
	{
		displayName: 'Número Del Destinatario',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,
		description: 'RemoteJid del destinatario',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-text'],
			},
		},
	},
	{
		displayName: 'Mensaje',
		name: 'messageText',
		type: 'string',
		default: '',
		required: true,
		description: 'Introduce el mensaje de texto que será enviado',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-text'],
			},
		},
	},
	{
		displayName: 'Opciones',
		name: 'options_message',
		type: 'collection',
		placeholder: 'Añadir Campo',
		default: {},
		options: [
			{
				displayName: 'Retraso',
				name: 'delay',
				type: 'number',
				default: 1200,
				description: 'Introduce cuántos milisegundos de retraso tendrá el mensaje antes de ser enviado',
			},
			{
				displayName: 'Responder Mensaje',
				name: 'quoted',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					messageQuoted: {
						messageId: '',
					},
				},
				options: [
					{
						name: 'messageQuoted',
						displayName: 'Mensaje',
						values: [
							{
								displayName: 'ID Del Mensaje',
								name: 'messageId',
								type: 'string',
								default: '',
								description: 'ID del mensaje que será respondido',
							},
						],
					},
				],
			},
			{
				displayName: 'Menciones',
				name: 'mentions',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					mentionsSettings: {
						mentionsEveryOne: false,
						mentioned: '',
					},
				},
				options: [
					{
						name: 'mentionsSettings',
						displayName: 'Configuraciones',
						values: [
							{
								displayName: 'Mencionar a Todos',
								name: 'mentionsEveryOne',
								type: 'boolean',
								default: false,
								description: 'Define si se mencionan todos los participantes del grupo',
							},
							{
								displayName: 'Números Para Mencionar',
								name: 'mentioned',
								type: 'string',
								default: '',
								displayOptions: {
									show: {
										mentionsEveryOne: [false],
									},
								},
								description: 'Lista de números para mencionar (separados por coma)',
							},
						],
					},
				],
			},
			{
				displayName: 'Vista Previa De Enlace',
				name: 'linkPreview',
				type: 'boolean',
				default: true,
				description: 'Define si se habilita o deshabilita la vista previa de enlace en el mensaje',
			},
		],
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-text'],
			},
		},
	},

	// Campos = Enviar Imagen
	{
		displayName: 'Nombre De La Instancia',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Introduce el nombre de la instancia que enviará el mensaje',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-image'],
			},
		},
	},
	{
		displayName: 'Número Del Destinatario',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,

		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-image'],
			},
		},
	},
	{
		displayName: 'Imagen',
		name: 'media',
		type: 'string',
		default: '',
		required: true,
		description: 'URL o base64 de la imagen',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-image'],
			},
		},
	},
	{
		displayName: 'Leyenda',
		name: 'caption',
		type: 'string',
		default: '',

		description: 'Texto a enviar junto con la imagen',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-image'],
			},
		},
	},
	{
		displayName: 'Opciones',
		name: 'options_message',
		type: 'collection',
		placeholder: 'Añadir Campo',
		default: {},
		options: [
			{
				displayName: 'Retraso',
				name: 'delay',
				type: 'number',
				default: 1200,
				description: 'Introduce cuántos milisegundos de retraso tendrá el mensaje antes de ser enviado',
			},
			{
				displayName: 'Responder Mensaje',
				name: 'quoted',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					messageQuoted: {
						messageId: '',
					},
				},
				options: [
					{
						name: 'messageQuoted',
						displayName: 'Mensaje',
						values: [
							{
								displayName: 'ID Del Mensaje',
								name: 'messageId',
								type: 'string',
								default: '',
								description: 'ID del mensaje que será respondido',
							},
						],
					},
				],
			},
			{
				displayName: 'Menciones',
				name: 'mentions',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					mentionsSettings: {
						mentionsEveryOne: false,
						mentioned: '',
					},
				},
				options: [
					{
						name: 'mentionsSettings',
						displayName: 'Configuraciones',
						values: [
							{
								displayName: 'Mencionar a Todos',
								name: 'mentionsEveryOne',
								type: 'boolean',
								default: false,
								description: 'Define si se mencionan todos los participantes del grupo',
							},
							{
								displayName: 'Números Para Mencionar',
								name: 'mentioned',
								type: 'string',
								default: '',
								displayOptions: {
									show: {
										mentionsEveryOne: [false],
									},
								},
								description: 'Lista de números para mencionar (separados por coma)',
							},
						],
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-image'],
			},
		},
	},

	// Campos = Enviar Video
	{
		displayName: 'Nombre De La Instancia',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Introduce el nombre de la instancia que enviará el video',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-video'],
			},
		},
	},
	{
		displayName: 'Número Del Destinatario',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,

		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-video'],
			},
		},
	},
	{
		displayName: 'Video',
		name: 'media',
		type: 'string',
		default: '',
		required: true,
		description: 'URL o base64 del video',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-video'],
			},
		},
	},
	{
		displayName: 'Leyenda',
		name: 'caption',
		type: 'string',
		default: '',

		description: 'Texto a enviar junto con el video',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-video'],
			},
		},
	},
	{
		displayName: 'Opciones',
		name: 'options_message',
		type: 'collection',
		placeholder: 'Añadir Campo',
		default: {},
		options: [
			{
				displayName: 'Retraso',
				name: 'delay',
				type: 'number',
				default: 1200,
				description: 'Introduce cuántos milisegundos de retraso tendrá el mensaje antes de ser enviado',
			},
			{
				displayName: 'Responder Mensaje',
				name: 'quoted',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					messageQuoted: {
						messageId: '',
					},
				},
				options: [
					{
						name: 'messageQuoted',
						displayName: 'Mensaje',
						values: [
							{
								displayName: 'ID Del Mensaje',
								name: 'messageId',
								type: 'string',
								default: '',
								description: 'ID del mensaje que será respondido',
							},
						],
					},
				],
			},
			{
				displayName: 'Menciones',
				name: 'mentions',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					mentionsSettings: {
						mentionsEveryOne: false,
						mentioned: '',
					},
				},
				options: [
					{
						name: 'mentionsSettings',
						displayName: 'Configuraciones',
						values: [
							{
								displayName: 'Mencionar a Todos',
								name: 'mentionsEveryOne',
								type: 'boolean',
								default: false,
								description: 'Define si se mencionan todos los participantes del grupo',
							},
							{
								displayName: 'Números Para Mencionar',
								name: 'mentioned',
								type: 'string',
								default: '',
								displayOptions: {
									show: {
										mentionsEveryOne: [false],
									},
								},
								description: 'Lista de números para mencionar (separados por coma)',
							},
						],
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-video'],
			},
		},
	},

	// Campos = Enviar Audio
	{
		displayName: 'Nombre De La Instancia',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Introduce el nombre de la instancia que enviará el audio',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-audio'],
			},
		},
	},
	{
		displayName: 'Número Del Destinatario',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,

		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-audio'],
			},
		},
	},
	{
		displayName: 'Audio',
		name: 'media',
		type: 'string',
		default: '',
		required: true,
		description: 'URL o base64 del audio',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-audio'],
			},
		},
	},
	{
		displayName: 'Opciones',
		name: 'options_message',
		type: 'collection',
		placeholder: 'Añadir Campo',
		default: {},
		options: [
			{
				displayName: 'Retraso',
				name: 'delay',
				type: 'number',
				default: 1200,
				description: 'Introduce cuántos milisegundos de retraso tendrá el mensaje antes de ser enviado',
			},
			//{
			//	displayName: 'Responder Mensagem',
			//	name: 'quoted',
			//	type: 'fixedCollection',
			//	typeOptions: {
			//		multipleValues: false,
			//	},
			//	default: {
			//		messageQuoted: {
			//			messageId: '',
			//		},
			//	},
			//	options: [
			//		{
			//			name: 'messageQuoted',
			//			displayName: 'Mensagem',
			//			values: [
			//				{
			//					displayName: 'ID da Mensagem',
			//					name: 'messageId',
			//					type: 'string',
			//					default: '',
			//					description: 'ID da mensagem que será respondida',
			//				},
			//			],
			//		},
			//	],
			//},

			//{
			//	displayName: 'Menções',
			//	name: 'mentions',
			//	type: 'fixedCollection',
			//	typeOptions: {
			//		multipleValues: false,
			//	},
			//	default: {
			//		mentionsSettings: {
			//			mentionsEveryOne: false,
			//			mentioned: '',
			//		},
			//	},
			//	options: [
			//		{
			//			name: 'mentionsSettings',
			//			displayName: 'Configurações',
			//			values: [
			//				{
			//					displayName: 'Mencionar Todos',
			//					name: 'mentionsEveryOne',
			//					type: 'boolean',
			//					default: false,
			//					description: 'Menciona todos os participantes do grupo',
			//				},
			//				{
			//					displayName: 'Números para Mencionar',
			//					name: 'mentioned',
			//					type: 'string',
			//					default: '',
			//					displayOptions: {
			//						show: {
			//							mentionsEveryOne: [false],
			//						},
			//					},
			//					description: 'Digite os números que deseja mencionar separados por vírgula (ex: 5511999999999,5511888888888)',
			//				},
			//			],
			//		},
			//	],
			//},
		],
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-audio'],
			},
		},
	},

	// Campos = Enviar Documento
	{
		displayName: 'Nombre De La Instancia',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Introduce el nombre de la instancia que enviará el documento',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-document'],
			},
		},
	},
	{
		displayName: 'Número Del Destinatario',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,

		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-document'],
			},
		},
	},
	{
		displayName: 'Documento',
		name: 'media',
		type: 'string',
		default: '',
		required: true,
		description: 'URL o base64 del documento',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-document'],
			},
		},
	},
	{
		displayName: 'Mensaje',
		name: 'caption',
		type: 'string',
		default: '',

		description: 'Texto a enviar junto con el documento',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-document'],
			},
		},
	},
	{
		displayName: 'Nombre Del Archivo',
		name: 'fileName',
		type: 'string',
		default: 'document.pdf',

		description: 'Nombre del archivo del documento',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-document'],
			},
		},
	},
	{
		displayName: 'Opciones',
		name: 'options_message',
		type: 'collection',
		placeholder: 'Añadir Campo',
		default: {},
		options: [
			{
				displayName: 'Retraso',
				name: 'delay',
				type: 'number',
				default: 1200,
				description: 'Introduce cuántos milisegundos de retraso tendrá el mensaje antes de ser enviado',
			},
			{
				displayName: 'Responder Mensaje',
				name: 'quoted',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					messageQuoted: {
						messageId: '',
					},
				},
				options: [
					{
						name: 'messageQuoted',
						displayName: 'Mensaje',
						values: [
							{
								displayName: 'ID Del Mensaje',
								name: 'messageId',
								type: 'string',
								default: '',
								description: 'ID del mensaje que será respondido',
							},
						],
					},
				],
			},
			{
				displayName: 'Menciones',
				name: 'mentions',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					mentionsSettings: {
						mentionsEveryOne: false,
						mentioned: '',
					},
				},
				options: [
					{
						name: 'mentionsSettings',
						displayName: 'Configuraciones',
						values: [
							{
								displayName: 'Mencionar a Todos',
								name: 'mentionsEveryOne',
								type: 'boolean',
								default: false,
								description: 'Define si se mencionan todos los participantes del grupo',
							},
							{
								displayName: 'Números Para Mencionar',
								name: 'mentioned',
								type: 'string',
								default: '',
								displayOptions: {
									show: {
										mentionsEveryOne: [false],
									},
								},
								description: 'Lista de números para mencionar (separados por coma)',
							},
						],
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-document'],
			},
		},
	},

	// Campos = Enviar Encuesta
	{
		displayName: 'Nombre De La Instancia',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Introduce el nombre de la instancia que enviará la encuesta',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-poll'],
			},
		},
	},
	{
		displayName: 'Número Del Destinatario',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,

		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-poll'],
			},
		},
	},
	{
		displayName: 'Título De La Encuesta',
		name: 'caption',
		type: 'string',
		default: '',
		required: true,
		description: 'Introduce el título de tu encuesta',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-poll'],
			},
		},
	},
	{
		displayName: 'Mínimo 2 opciones, Máximo 12. Cada opción debe ser única.',
		name: 'notice',
		type: 'notice',
		default: '',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-poll'],
			},
		},
	},
	{
		displayName: 'Opciones De La Encuesta',
		name: 'options_display',
		type: 'fixedCollection',
		default: { metadataValues: [] },
		required: true,
		typeOptions: {
			multipleValues: true,
		},
		description: 'Introduce las opciones de la encuesta (mínimo 2, máximo 12). Cada opción debe ser única.',
		options: [
			{
				name: 'metadataValues',
				displayName: 'Metadatos',
				values: [
					{
						displayName: 'Opción',
						name: 'optionValue',
						type: 'string',
						default: '',
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-poll'],
			},
		},
	},
	{
		displayName: 'Opciones',
		name: 'options_message',
		type: 'collection',
		placeholder: 'Añadir Campo',
		default: {},
		options: [
			{
				displayName: 'Retraso',
				name: 'delay',
				type: 'number',
				default: 1200,
				description: 'Introduce cuántos milisegundos de retraso tendrá el mensaje antes de ser enviado',
			},
			{
				displayName: 'Responder Mensaje',
				name: 'quoted',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					messageQuoted: {
						messageId: '',
					},
				},
				options: [
					{
						name: 'messageQuoted',
						displayName: 'Mensaje',
						values: [
							{
								displayName: 'ID Del Mensaje',
								name: 'messageId',
								type: 'string',
								default: '',
								description: 'ID del mensaje que será respondido',
							},
						],
					},
				],
			},
			{
				displayName: 'Menciones',
				name: 'mentions',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					mentionsSettings: {
						mentionsEveryOne: false,
						mentioned: '',
					},
				},
				options: [
					{
						name: 'mentionsSettings',
						displayName: 'Configuraciones',
						values: [
							{
								displayName: 'Mencionar a Todos',
								name: 'mentionsEveryOne',
								type: 'boolean',
								default: false,
								description: 'Define si se mencionan todos los participantes del grupo',
							},
							{
								displayName: 'Números Para Mencionar',
								name: 'mentioned',
								type: 'string',
								default: '',
								displayOptions: {
									show: {
										mentionsEveryOne: [false],
									},
								},
								description: 'Lista de números para mencionar (separados por coma)',
							},
						],
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-poll'], // This was ['send-list'] in the original, assuming it's a typo in source and should be send-poll for this block.
			},
		},
	},

	// Campos = Enviar Estado
	{
		displayName: 'Nombre De La Instancia',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Introduce el nombre de la instancia que enviará el estado',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-stories'],
			},
		},
	},
	{
		displayName: 'Tipo De Estado',
		name: 'type',
		type: 'options',
		description: 'Elige el tipo de estado que vas a publicar',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-stories'],
			},
		},
		options: [
			{
				name: 'Estado De Texto',
				value: 'text',
			},
			{
				name: 'Estado De Imagen',
				value: 'image',
			},
			{
				name: 'Estado De Video',
				value: 'video',
			},
			{
				name: 'Estado De Audio',
				value: 'audio',
			},
		],
		default: 'text',
	},
	{
		displayName: 'Contenido O URL',
		name: 'content',
		type: 'string',
		default: '',
		required: true,
		description: 'Introduce el contenido o URL de la imagen/video/audio a publicar',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-stories'],
			},
		},
	},
	{
		displayName: 'Texto Para Estado De Imagen/Video',
		name: 'caption',
		type: 'string',
		default: '',

		description: 'Introduce el texto para estado de Imagen/Video',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-stories'],
			},
		},
	},
	{
		displayName: 'Color De Fondo',
		name: 'backgroundColor',
		type: 'color',
		default: '#000000',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-stories'],
			},
		},
	},
	{
		displayName: 'Fuente Del Texto',
		name: 'font',
		type: 'options',
		description: 'Elige el tipo de fuente de tu texto',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-stories'],
			},
		},
		options: [
			{
				name: 'SERIF',
				value: 1,
			},
			{
				name: 'NORICAN REGULAR',
				value: 2,
			},
			{
				name: 'BRYNDAN WRITE',
				value: 3,
			},
			{
				name: 'BEBASNEUE REGULAR',
				value: 4,
			},
			{
				name: 'OSWALD HEAVY',
				value: 5,
			},
		],
		default: 1,
	},

	// Campos = Enviar Documento
	{
		displayName: 'Nombre De La Instancia',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Introduce el nombre de la instancia que enviará el documento',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendDocument'],
			},
		},
	},
	{
		displayName: 'Número Del Destinatario',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,

		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendDocument'],
			},
		},
	},
	{
		displayName: 'Documento',
		name: 'media',
		type: 'string',
		default: '',
		required: true,
		description: 'URL o base64 del documento',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendDocument'],
			},
		},
	},
	{
		displayName: 'Mensaje',
		name: 'caption',
		type: 'string',
		default: '',

		description: 'Texto a enviar junto con el documento',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendDocument'],
			},
		},
	},
	{
		displayName: 'Nombre Del Archivo',
		name: 'fileName',
		type: 'string',
		default: 'document.pdf',

		description: 'Nombre del archivo del documento',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendDocument'],
			},
		},
	},
	{
		displayName: 'Opciones',
		name: 'options_message',
		type: 'collection',
		placeholder: 'Añadir Campo',
		default: {},
		options: [
			{
				displayName: 'Retraso',
				name: 'delay',
				type: 'number',
				default: 1200,
				description: 'Introduce cuántos milisegundos de retraso tendrá el mensaje antes de ser enviado',
			},
			{
				displayName: 'Responder Mensaje',
				name: 'quoted',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					messageQuoted: {
						messageId: '',
					},
				},
				options: [
					{
						name: 'messageQuoted',
						displayName: 'Mensaje',
						values: [
							{
								displayName: 'ID Del Mensaje',
								name: 'messageId',
								type: 'string',
								default: '',
								description: 'ID del mensaje que será respondido',
							},
						],
					},
				],
			},
			{
				displayName: 'Menciones',
				name: 'mentions',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					mentionsSettings: {
						mentionsEveryOne: false,
						mentioned: '',
					},
				},
				options: [
					{
						name: 'mentionsSettings',
						displayName: 'Configuraciones',
						values: [
							{
								displayName: 'Mencionar a Todos',
								name: 'mentionsEveryOne',
								type: 'boolean',
								default: false,
								description: 'Define si se mencionan todos los participantes del grupo',
							},
							{
								displayName: 'Números Para Mencionar',
								name: 'mentioned',
								type: 'string',
								default: '',
								displayOptions: {
									show: {
										mentionsEveryOne: [false],
									},
								},
								description: 'Lista de números para mencionar (separados por coma)',
							},
						],
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendDocument'],
			},
		},
	},

	// Campos = Enviar Contato
	{
		displayName: 'Nombre De La Instancia',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Introduce el nombre de la instancia que enviará el contacto',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-contact'],
			},
		},
	},
	{
		displayName: 'Número Del Destinatario',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,

		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-contact'],
			},
		},
	},
	{
		displayName: 'Contactos',
		name: 'contacts',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		default: { contactValues: [] },
		options: [
			{
				name: 'contactValues',
				displayName: 'Contacto',
				values: [
					{
						displayName: 'Nombre Completo',
						name: 'fullName',
						type: 'string',
						default: '',
						required: true,
						description: 'Nombre completo del contacto',
					},
					{
						displayName: 'Número De WhatsApp',
						name: 'wuid',
						type: 'string',
						default: '',
						required: true,
						description: 'Número de WhatsApp (solo números, ej: 5215599999999)',
					},
					{
						displayName: 'Número Formateado',
						name: 'phoneNumber',
						type: 'string',
						default: '',
						required: true,
						description: 'Número formateado (ej: +52 1 55 9999 9999)',
					},
					{
						displayName: 'Organización',
						name: 'organization',
						type: 'string',
						default: '',
						description: 'Nombre de la organización/empresa',
					},
					{
						displayName: 'Correo Electrónico',
						name: 'email',
						type: 'string',
						placeholder: 'name@email.com',
						default: '',
						description: 'Dirección de correo electrónico del contacto',
					},
					{
						displayName: 'URL',
						name: 'url',
						type: 'string',
						default: '',
						description: 'URL de la página del contacto',
					},
				],
			},
		],
		description: 'Lista de contactos para enviar',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-contact'],
			},
		},
	},

	// Campos = Enviar Lista
	{
		displayName: 'Nombre De La Instancia',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Introduce el nombre de la instancia que enviará la lista',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-list'],
			},
		},
	},
	{
		displayName: 'Número Del Destinatario',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,

		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-list'],
			},
		},
	},
	{
		displayName: 'Título De La Lista',
		name: 'title',
		type: 'string',
		default: '',
		required: true,
		description: 'Título principal de la lista',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-list'],
			},
		},
	},
	{
		displayName: 'Descripción',
		name: 'description',
		type: 'string',
		default: '',
		required: true,
		description: 'Descripción de la lista',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-list'],
			},
		},
	},
	{
		displayName: 'Texto Del Botón',
		name: 'buttonText',
		type: 'string',
		default: 'Ver Opciones',
		required: true,
		description: 'Texto que aparecerá en el botón de la lista',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-list'],
			},
		},
	},
	{
		displayName: 'Texto Del Pie De Página',
		name: 'footerText',
		type: 'string',
		default: '',
		required: true,
		description: 'Texto que aparecerá en el pie de página de la lista',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-list'],
			},
		},
	},
	{
		displayName: 'Secciones',
		name: 'sections',
		placeholder: 'Añadir Sección',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		default: {},
		options: [
			{
				name: 'sectionValues',
				displayName: 'Sección',
				values: [
					{
						displayName: 'Título De La Sección',
						name: 'title',
						type: 'string',
						default: '',

					},
					{
						displayName: 'Filas',
						name: 'rows',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: true,
						},
						default: {},
						options: [
							{
								name: 'rowValues',
								displayName: 'Fila',
								values: [
									{
										displayName: 'Título',
										name: 'title',
										type: 'string',
										default: '',
										required: true,
										description: 'Título de la fila',
									},
									{
										displayName: 'Descripción',
										name: 'description',
										type: 'string',
										default: '',
										description: 'Descripción de la fila (Opcional)',
									},
									{
										displayName: 'ID De La Fila',
										name: 'rowId',
										type: 'string',
										default: '',
										description: 'ID único de la opción',
									}
								]
							}
						]
					}
				]
			}
		],
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-list'],
			},
		}
	},
	{
		displayName: 'Opciones',
		name: 'options_message',
		type: 'collection',
		placeholder: 'Añadir Campo',
		default: {},
		options: [
			{
				displayName: 'Retraso',
				name: 'delay',
				type: 'number',
				default: 1200,
				description: 'Introduce cuántos milisegundos de retraso tendrá el mensaje antes de ser enviado',
			},
			{
				displayName: 'Responder Mensaje',
				name: 'quoted',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					messageQuoted: {
						messageId: '',
					},
				},
				options: [
					{
						name: 'messageQuoted',
						displayName: 'Mensaje',
						values: [
							{
								displayName: 'ID Del Mensaje',
								name: 'messageId',
								type: 'string',
								default: '',
								description: 'ID del mensaje que será respondido',
							},
						],
					},
				],
			},
			{
				displayName: 'Menciones',
				name: 'mentions',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					mentionsSettings: {
						mentionsEveryOne: false,
						mentioned: '',
					},
				},
				options: [
					{
						name: 'mentionsSettings',
						displayName: 'Configuraciones',
						values: [
							{
								displayName: 'Mencionar a Todos',
								name: 'mentionsEveryOne',
								type: 'boolean',
								default: false,
								description: 'Define si se mencionan todos los participantes del grupo',
							},
							{
								displayName: 'Números Para Mencionar',
								name: 'mentioned',
								type: 'string',
								default: '',
								displayOptions: {
									show: {
										mentionsEveryOne: [false],
									},
								},
								description: 'Lista de números para mencionar (separados por coma)',
							},
						],
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-list'],
			},
		},
	},

	// Campos = Enviar Botones
	{
		displayName: 'Nombre De La Instancia',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Introduce el nombre de la instancia que enviará los botones',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-buttons'],
			},
		},
	},
	{
		displayName: 'Número Del Destinatario',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,

		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-buttons'],
			},
		},
	},
	{
		displayName: 'Título',
		name: 'title',
		type: 'string',
		default: '',
		required: true,
		description: 'Título del mensaje con botones',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-buttons'],
			},
		},
	},
	{
		displayName: 'Descripción',
		name: 'description',
		type: 'string',
		default: '',
		required: true,
		description: 'Descripción del mensaje con botones',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-buttons'],
			},
		},
	},
	{
		displayName: 'Pie de página',
		name: 'footer',
		type: 'string',
		default: '',
		//required: false,
		description: 'Texto del pie de página del mensaje',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-buttons'],
			},
		},
	},
	{
		displayName: 'Botones',
		name: 'buttons',
		placeholder: 'Añadir Botón',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
			maxValue: 3,
		},
		default: {},
		options: [
			{
				name: 'buttonValues',
				displayName: 'Botón',
				values: [
					{
						displayName: 'Tipo',
						name: 'type',
						type: 'options',
						options: [
							{
								name: 'Respuesta',
								value: 'reply',
							},
							{
								name: 'Copiar',
								value: 'copy',
							},
							{
								name: 'URL',
								value: 'url',
							},
							{
								name: 'Llamar',
								value: 'call',
							},
						],
						default: 'reply',
					},
					{
						displayName: 'Texto Del Botón',
						name: 'displayText',
						type: 'string',
						default: '',
						required: true,
					},
					{
						displayName: 'ID',
						name: 'id',
						type: 'string',
						default: '',
						required: true,
						displayOptions: {
							show: {
								type: ['reply'],
							},
						},
					},
					{
						displayName: 'Código Para Copiar',
						name: 'copyCode',
						type: 'string',
						default: '',
						required: true,
						displayOptions: {
							show: {
								type: ['copy'],
							},
						},
					},
					{
						displayName: 'URL',
						name: 'url',
						type: 'string',
						default: '',
						required: true,
						displayOptions: {
							show: {
								type: ['url'],
							},
						},
					},
					{
						displayName: 'Número De Teléfono',
						name: 'phoneNumber',
						type: 'string',
						default: '',
						required: true,
						displayOptions: {
							show: {
								type: ['call'],
							},
						},
					},
				],
			},
		],
		description: 'Botones del mensaje (máximo 3)',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-buttons'],
			},
		},
	},

	// Campos = Enviar PIX
	{
		displayName: 'Nombre De La Instancia',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Introduce el nombre de la instancia que enviará el PIX',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-pix'],
			},
		},
	},
	{
		displayName: 'Número Del Destinatario',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,

		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-pix'],
			},
		},
	},
	{
		displayName: 'Nombre Del Beneficiario',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		description: 'Nombre del beneficiario del PIX',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-pix'],
			},
		},
	},
	{
		displayName: 'Tipo De Clave',
		name: 'keyType',
		type: 'options',
		options: [
			{
				name: 'Teléfono',
				value: 'phone',
			},
			{
				name: 'Correo Electrónico',
				value: 'email',
			},
			{
				name: 'CPF',
				value: 'cpf',
			},
			{
				name: 'CNPJ',
				value: 'cnpj',
			},
			{
				name: 'Aleatoria',
				value: 'random',
			},
		],
		default: 'email',
		required: true,
		description: 'Tipo de clave PIX',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-pix'],
			},
		},
	},
	{
		displayName: 'Clave PIX',
		name: 'key',
		type: 'string',
		default: '',
		required: true,
		description: 'Clave PIX del beneficiario',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-pix'],
			},
		},
	},
	{
		displayName: 'Enviar A Todos',
		name: 'allContacts',
		type: 'boolean',
		default: false,
		description: 'Define si se envía el estado a todos los contactos',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-stories'],
			},
		},
	},
	{
		displayName: 'Lista De Contactos',
		name: 'statusJidList',
		type: 'string',
		default: '',
		required: true,
		description: 'Lista de contactos que recibirán el estado (separados por coma)',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-stories'],
				allContacts: [false],
			},
		},
	},

	// Campos = Reagir Mensagem
	{
		displayName: 'Nombre De La Instancia',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Introduce el nombre de la instancia',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-reaction'],
			},
		},
	},
	{
		displayName: 'Número Del Chat',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,
		description: 'Número del chat donde está el mensaje',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-reaction'],
			},
		},
	},
	{
		displayName: 'ID Del Mensaje',
		name: 'messageId',
		type: 'string',
		default: '',
		required: true,
		description: 'ID del mensaje que recibirá la reacción',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-reaction'],
			},
		},
	},
	{
		displayName: 'Mensaje Propio',
		name: 'fromMe',
		type: 'boolean',
		default: true,
		description: 'Define si este es tu propio mensaje',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-reaction'],
			},
		},
	},
	{
		displayName: 'Emoji De La Reacción',
		name: 'reaction',
		type: 'string',
		default: '👍',
		required: true,
		description: 'Emoji que se usará como reacción',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-reaction'],
			},
		},
	}
];
