import { INodeProperties } from 'n8n-workflow';

// Opciones de events-api (Eventos)
export const eventsOperationsOptions: INodeProperties = {
	displayName: 'Operación',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ['events-api'], // Value do Resource
		},
	},
	options: [
		// Opção = Enviar mensagem de Texto
		{
			// Set/find Webhook
			name: 'Webhook',
			action: 'Webhook',
			description: 'Define/Busca integración con Webhook',
			value: 'webhook',
		},
		{
			// Set/find Rabbitmq
			name: 'RabbitMQ',
			action: 'RabbitMQ',
			description: 'Define/Busca integración con RabbitMQ',
			value: 'rabbitmq',
		},
	],
	// Definiendo como predeterminada la opción "Webhook"
	default: 'webhook',
};
