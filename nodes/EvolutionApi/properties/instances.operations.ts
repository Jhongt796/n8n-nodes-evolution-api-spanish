import { INodeProperties } from 'n8n-workflow';

// Opciones de instances-api (Instancias)
export const instancesOperationsOptions: INodeProperties = {
	displayName: 'Operación',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ['instances-api'], // Value do Resource
		},
	},
	// Opciones que se vincularán a la Operación "Instancia"
	options: [		// Opção = Criar instancia
		{
			// Create Instance Basic
			name: 'Crear Instancia',
			action: 'Crear instancia',
			description: 'Crea una nueva Instancia',
			value: 'instance-basic',
		},

		// Opção = Conectar Instância
		{
			// Instance Connect
			name: 'Conectar Instancia',
			action: 'Conectar instancia',
			description: 'Genera la conexión de una Instancia (QR o Base64)',
			value: 'instance-connect',
		},

		// Opção = Buscar Instancia
		{
			// Fetch Instances
			name: 'Buscar Instancia',
			action: 'Buscar instancia',
			description: 'Busca y lista las Instancias creadas',
			value: 'fetch-instances',
		},

		// Opção = Definir Comportamento da instancia
		{
			name: 'Definir Comportamento',
			action: 'Definir comportamiento',
			description: 'Define el comportamiento de la instancia',
			value: 'instance-settings',
		},

		// Opção = Definir presença
		{
			// Set Presence
			name: 'Definir Presencia',
			action: 'Definir presencia',
			description: 'Define la presencia en la instancia',
			value: 'set-presence',
		},		// Opção = Definit Proxy
		{
			// Set/find Proxy
			name: 'Definir/Buscar Proxy',
			action: 'Proxy',
			description: 'Define un Proxy en la instancia',
			value: 'set-proxy',
		},

		// Opção = Reiniciar instancia
		{
			// Restart Instance
			name: 'Reiniciar Instancia',
			action: 'Reiniciar instancia',
			description: 'Reinicia el socket de la Instancia',
			value: 'restart-instance',
		},

		// Opção = Desconectar instancia
		{
			// Logout Instance
			name: 'Desconectar Instancia',
			action: 'Desconectar instancia',
			description: 'Desconecta WhatsApp de la Instancia',
			value: 'logout-instance',
		},

		// Opção = Deletar instancia
		{
			// Delete Instance
			name: 'Eliminar Instancia',
			action: 'Eliminar instancia',
			description: 'Elimina una Instancia',
			value: 'delete-instance',
		},
	],
	// Definiendo como predeterminada la opción "Crear Instancia"
	default: 'instance-basic',
};
