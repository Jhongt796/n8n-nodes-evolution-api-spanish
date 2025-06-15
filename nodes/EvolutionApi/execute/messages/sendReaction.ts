import {
	IExecuteFunctions,
	IRequestOptions,
	IHttpRequestMethods,
	NodeOperationError,
} from 'n8n-workflow';
import { evolutionRequest } from '../evolutionRequest';

export async function sendReaction(ef: IExecuteFunctions) {
	try {
		// Parámetros obligatorios
		const instanceName = ef.getNodeParameter('instanceName', 0) as string;
		const remoteJid = ef.getNodeParameter('remoteJid', 0) as string;
		const messageId = ef.getNodeParameter('messageId', 0) as string;
		const fromMe = ef.getNodeParameter('fromMe', 0) as boolean;
		const reaction = ef.getNodeParameter('reaction', 0) as string;

		// Validación de la reacción
		if (!reaction) {
			const errorData = {
				success: false,
				error: {
					message: 'Reacción inválida',
					details: 'Es necesario proporcionar un emoji para la reacción',
					code: 'INVALID_REACTION',
					timestamp: new Date().toISOString(),
				},
			};
			return {
				json: errorData,
				error: errorData,
			};
		}

		const body: any = {
			key: {
				remoteJid,
				fromMe,
				id: messageId,
			},
			reaction,
		};

		const requestOptions: IRequestOptions = {
			method: 'POST' as IHttpRequestMethods,
			headers: {
				'Content-Type': 'application/json',
			},
			uri: `/message/sendReaction/${instanceName}`,
			body,
			json: true,
		};

		const response = await evolutionRequest(ef, requestOptions);
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
					: 'Error al enviar reacción',
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
