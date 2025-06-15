import {
	IExecuteFunctions,
	IRequestOptions,
	IHttpRequestMethods,
	NodeOperationError,
} from 'n8n-workflow';
import { evolutionRequest } from '../evolutionRequest';

export async function sendPoll(ef: IExecuteFunctions) {
	try {
		// Parámetros obligatorios
		const instanceName = ef.getNodeParameter('instanceName', 0);
		const remoteJid = ef.getNodeParameter('remoteJid', 0);
		const pollTitle = ef.getNodeParameter('caption', 0);
		const options = ef.getNodeParameter('options_display.metadataValues', 0) as {
			optionValue: string;
		}[];

		// Opciones adicionales
		const options_message = ef.getNodeParameter('options_message', 0, {}) as {
			delay?: number;
			quoted?: {
				messageQuoted: {
					messageId: string;
				};
			};
		};

		// Verifica si las opciones son un array y no están vacías
		const pollOptions = Array.isArray(options) ? options.map((option) => option.optionValue) : [];

		if (pollOptions.length === 0) {
			const errorData = {
				success: false,
				error: {
					message: 'Opciones de encuesta inválidas',
					details: 'La encuesta necesita tener al menos una opción',
					code: 'INVALID_POLL_OPTIONS',
					timestamp: new Date().toISOString(),
				},
			};
			return {
				json: errorData,
				error: errorData,
			};
		}

		const body: any = {
			number: remoteJid,
			name: pollTitle,
			selectableCount: 1,
			values: pollOptions,
		};

		// Añade retraso si se especifica
		if (options_message.delay) {
			body.delay = options_message.delay;
		}

		// Añade quoted si se especifica
		if (options_message.quoted?.messageQuoted?.messageId) {
			body.quoted = {
				key: {
					id: options_message.quoted.messageQuoted.messageId,
				},
			};
		}

		const requestOptions: IRequestOptions = {
			method: 'POST' as IHttpRequestMethods,
			headers: {
				'Content-Type': 'application/json',
			},
			uri: `/message/sendPoll/${instanceName}`,
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
					: 'Error al enviar encuesta',
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
