import { INodeProperties } from 'n8n-workflow';

// Opciones de integrations-api (Integración)
export const integrationsOperationsOptions: INodeProperties = {
	displayName: 'Operación',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ['integrations-api'], // Value do Resource
		},
	},
	options: [		{
			// Set/find Chatwoot
			name: 'Chatwoot',
			action: 'Chatwoot',
			description: 'Define/Busca integración con Chatwoot',
			value: 'chatwoot',
		},		{
			// Create/find/fetch/Update/Delete/Start/Change Status/Fetch Sessions da Evolution Bot
			name: 'Evolution Bot',
			action: 'Evolution bot',
			description: 'Controla la integración con Evolution Bot',
			value: 'evolution-bot',
		},
		{
			// Create/find/fetch/Update/Delete/Start/Change Status/Fetch Sessions do Typebot
			name: 'Typebot',
			action: 'Typebot',
			description: 'Controla la integración con Typebot',
			value: 'typebot',
		},
		{
			// Create/find/fetch/Update/Delete/Start/Change Status/Fetch Sessions da Dify
			name: 'Dify',
			action: 'Dify',
			description: 'Controla la integración con Dify',
			value: 'difyBot',
		},
		{
			// Create/find/fetch/Update/Delete/Start/Change Status/Fetch Sessions da Dify
			name: 'Flowise',
			action: 'Flowise',
			description: 'Controla la integración con Flowise',
			value: 'flowiseBot',
		},
	],
	// Definiendo como predeterminada la opción "Chatwoot"
	default: 'chatwoot',
};
