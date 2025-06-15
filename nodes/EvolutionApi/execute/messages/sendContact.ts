import {
	IExecuteFunctions,
	IRequestOptions,
	IHttpRequestMethods,
	NodeOperationError,
} from 'n8n-workflow';
import { evolutionRequest } from '../evolutionRequest';

export async function sendContact(ef: IExecuteFunctions) {
	try {
		// Parámetros obligatorios
		const instanceName = ef.getNodeParameter('instanceName', 0);
		const remoteJid = ef.getNodeParameter('remoteJid', 0);
		const contacts = ef.getNodeParameter('contacts.contactValues', 0) as {
			fullName: string;
			wuid: string;
			phoneNumber: string;
			organization?: string;
			email?: string;
			url?: string;
		}[];

		// Validación de los contactos
		if (!Array.isArray(contacts) || contacts.length === 0) {
			const errorData = {
				success: false,
				error: {
					message: 'Lista de contactos inválida',
					details: 'Es necesario proporcionar al menos un contacto',
					code: 'INVALID_CONTACTS',
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
			contact: contacts.map(contact => ({
				fullName: contact.fullName,
				wuid: contact.wuid,
				phoneNumber: contact.phoneNumber,
				...(contact.organization && { organization: contact.organization }),
				...(contact.email && { email: contact.email }),
				...(contact.url && { url: contact.url }),
			})),
		};

		const requestOptions: IRequestOptions = {
			method: 'POST' as IHttpRequestMethods,
			headers: {
				'Content-Type': 'application/json',
			},
			uri: `/message/sendContact/${instanceName}`,
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
					: 'Error al enviar contacto',
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
