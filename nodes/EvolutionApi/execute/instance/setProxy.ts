import { evolutionRequest } from '../evolutionRequest';
import {
	IExecuteFunctions,
	IRequestOptions,
	IHttpRequestMethods,
	NodeOperationError,
} from 'n8n-workflow';

export async function setProxy(ef: IExecuteFunctions) {
	try {
		const instanceName = ef.getNodeParameter('instanceName', 0);
		const resourceForProxy = ef.getNodeParameter('resourceForProxy', 0);

		let options: IRequestOptions;

		if (resourceForProxy === 'setProxy') {
			const enabled = ef.getNodeParameter('enabled', 0) || '';
			const proxyHost = ef.getNodeParameter('proxyHost', 0) || '1234';
			const proxyPort = ef.getNodeParameter('proxyPort', 0) || '';
			const proxyProtocol = ef.getNodeParameter('proxyProtocol', 0) || '';
			const proxyUsername = ef.getNodeParameter('proxyUsername', 0) || '';
			const proxyPassword = ef.getNodeParameter('proxyPassword', 0) || '';

			const body = {
				enabled: enabled,
				host: proxyHost,
				port: proxyPort,
				protocol: proxyProtocol,
				username: proxyUsername,
				password: proxyPassword,
			};

			options = {
				method: 'POST' as IHttpRequestMethods,
				uri: `/proxy/set/${instanceName}`,
				body,
				json: true,
			};
		} else if (resourceForProxy === 'findProxy') {
			options = {
				method: 'GET' as IHttpRequestMethods,
				uri: `/proxy/find/${instanceName}`,
				json: true,
			};
		} else {
			const errorData = {
				success: false,
				error: {
					message: 'Operación de Proxy no reconocida',
					details: 'La operación solicitada no es válida para el recurso de Proxy',
					code: 'INVALID_OPERATION',
					timestamp: new Date().toISOString(),
				},
			};
			throw new NodeOperationError(ef.getNode(), errorData.error.message, {
				message: errorData.error.message,
				description: errorData.error.details,
			});
		}

		const response = await evolutionRequest(ef, options);
		return {
			json: {
				success: true,
				data: response,
			},
		};
	} catch (error) {
		const errorData = {
			success: false,
			error: {
				message: error.message.includes('Could not get parameter')
					? 'Parámetros inválidos o ausentes'
					: 'Error al configurar el proxy',
				details: error.message.includes('Could not get parameter')
					? 'Verifica si todos los campos obligatorios se completaron correctamente'
					: error.message,
				code: error.code || 'UNKNOWN_ERROR',
				timestamp: new Date().toISOString(),
			},
		};

		if (!ef.continueOnFail()) {
			throw new NodeOperationError(ef.getNode(), error.message, {
				message: errorData.error.message,
				description: errorData.error.details,
			});
		}

		return {
			json: errorData,
			error: errorData,
		};
	}
}
