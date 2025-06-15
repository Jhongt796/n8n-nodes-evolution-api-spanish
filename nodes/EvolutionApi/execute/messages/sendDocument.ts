import {
	IExecuteFunctions,
	IRequestOptions,
	IHttpRequestMethods,
	NodeApiError,
	NodeOperationError,
} from 'n8n-workflow';
import { evolutionRequest } from '../evolutionRequest';

export async function sendDocument(ef: IExecuteFunctions) {
	try {
		// Parámetros obligatorios
		const instanceName = ef.getNodeParameter('instanceName', 0) as string;
		const remoteJid = ef.getNodeParameter('remoteJid', 0) as string;
		const media = ef.getNodeParameter('media', 0) as string;

		// Validación del campo multimedia
		if (!media.startsWith('http') && !media.startsWith('data:') && !isBase64(media)) {
			throw new NodeApiError(ef.getNode(), {
				message: 'Formato de multimedia inválido',
				description: 'El documento debe ser una URL válida o un base64',
			});
		}

		// Función auxiliar para verificar si es base64
		function isBase64(str: string) {
			try {
				return Buffer.from(str, 'base64').toString('base64') === str;
			} catch (err) {
				return false;
			}
		}

		// Parámetros opcionales con valores predeterminados
		const mimetype = (ef.getNodeParameter('mimetype', 0, 'application/pdf') as string) || 'application/pdf';
		const caption = ef.getNodeParameter('caption', 0, '') as string;
		const fileName = (ef.getNodeParameter('fileName', 0, 'document.pdf') as string) || 'document.pdf';

		// Opciones adicionales
		const options = ef.getNodeParameter('options_message', 0, {}) as {
			delay?: number;
			quoted?: {
				messageQuoted: {
					messageId: string;
				};
			};
			mentions?: {
				mentionsSettings: {
					mentionsEveryOne: boolean;
					mentioned?: string;
				};
			};
		};

		const body: any = {
			number: remoteJid,
			media: media,
			mediatype: 'document',
			mimetype: mimetype,
			caption: caption || '',
			fileName: fileName,
		};

		if (options.delay) {
			body.delay = options.delay;
		}

		if (options.quoted?.messageQuoted?.messageId) {
			body.quoted = {
				key: {
					id: options.quoted.messageQuoted.messageId,
				},
			};
		}

		if (options.mentions?.mentionsSettings) {
			const { mentionsEveryOne, mentioned } = options.mentions.mentionsSettings;

			if (mentionsEveryOne) {
				body.mentionsEveryOne = true;
			} else if (mentioned) {
				const mentionedNumbers = mentioned.split(',')
					.map(num => num.trim())
					.map(num => num.includes('@s.whatsapp.net') ? num : `${num}@s.whatsapp.net`);

				body.mentioned = mentionedNumbers;
			}
		}

		const requestOptions: IRequestOptions = {
			method: 'POST' as IHttpRequestMethods,
			headers: {
				'Content-Type': 'application/json',
			},
			uri: `/message/sendMedia/${instanceName}`,
			body,
			json: true,
		};

		return await evolutionRequest(ef, requestOptions);
	} catch (error) {
		const errorData = {
			success: false,
			error: {
				message: error.message.includes('Could not get parameter')
					? 'Parámetros inválidos o ausentes'
					: 'Error al enviar documento',
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
