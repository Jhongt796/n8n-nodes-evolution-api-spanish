import { INodeProperties } from 'n8n-workflow';

// Opciones de messages-api (Mensajes)
export const messagesOperationsOptions: INodeProperties = {
	displayName: 'Operación',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ['messages-api'], // Value do Resource
		},
	},	options: [		// Opção = Enviar mensagem de Texto
		{
			// Send Text
			name: 'Enviar Texto',
			action: 'Enviar texto',
			description: 'Envía mensaje de Texto',
			value: 'send-text',
		},

		// Opção = Enviar Imagem
		{
			// Send Media
			name: 'Enviar Imagem',
			action: 'Enviar imagen',
			description: 'Envía mensaje de Imagen',
			value: 'send-image',
		},

		// Opção = Enviar Video
		{
			// Send Media
			name: 'Enviar Video',
			action: 'Enviar video',
			description: 'Envía mensaje de Video',
			value: 'send-video',
		},

		// Opção = Enviar Audio
		{
			// Send Narrated Audio
			name: 'Enviar Audio',
			action: 'Enviar audio',
			description: 'Envía mensaje de Audio',
			value: 'send-audio',
		},

		// Opção = Enviar Documento
		{
			// Send Media
			name: 'Enviar Documento',
			action: 'Enviar documento',
			description: 'Envía mensaje con Documento',
			value: 'send-document',
		},

		// Opção = Enviar Enquete
		{
			// Send Poll
			name: 'Enviar Enquete',
			action: 'Enviar encuesta',
			description: 'Envía una Encuesta de hasta 12 opciones',
			value: 'send-poll',
		},

		// Opção = Enviar Contato
		{
			name: 'Enviar Contato',
			action: 'Enviar contacto',
			description: 'Envía un contacto en WhatsApp',
			value: 'send-contact',
		},

		// Opção = Enviar Lista
		{
			name: 'Enviar Lista',
			action: 'Enviar lista',
			description: 'Envía una lista de opciones interactiva',
			value: 'send-list',
		},

		// Opção = Enviar Botões
		{
			name: 'Enviar Botões',
			action: 'Enviar botones',
			description: 'Envía mensaje con botones interactivos',
			value: 'send-buttons',
		},

		// Opção = Enviar PIX
		{
			name: 'Enviar PIX',
			action: 'Enviar PIX',
			description: 'Envía botón de pago PIX',
			value: 'send-pix',
		},

		// Opção = Enviar Status
		{
			name: 'Enviar Estado',
			action: 'Enviar estado',
			description: 'Publicar un Estado/Historia',
			value: 'send-stories',
		},

		// Opção = Reagir Mensagem
		{
			name: 'Reaccionar Mensaje',
			action: 'Reaccionar mensaje',
			description: 'Añade una reacción a un mensaje',
			value: 'send-reaction',
		},
	],
	// Definiendo como predeterminada la opción "Enviar Texto"
	default: 'send-text',
};
