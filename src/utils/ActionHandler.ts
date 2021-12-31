import { Dispatch } from 'redux';
import axios from './AxiosConfig'
import { Method } from 'axios';
// import { setError } from './';

interface AxiosHandler {
	method: Method;
	url: string;
	data?: any;
	dispatch: Dispatch;
	contentType?: string;
}
export const ActionHandler = async (
	values: AxiosHandler,
	response: (values: any) => void,
	reject: (values: any) => void,
): Promise<void> => {
	const { method, url, dispatch, data, contentType } = values;

	try {
		const ContentTypes = contentType ? contentType : 'application/json';
		const token = localStorage.getItem('token');
		if (token) {
			const res = await axios({
				method,
				headers: {
					'Content-Type': ContentTypes,
                    'x-api-key':`${process.env.REACT_APP_API_KEY}`
				},
				data,
				url,
			});
			response(res);
		} else {
			const res = await axios({
				method,
				headers: {
					'Content-Type': ContentTypes,
				},
				data,
				url,
			});
			
			response(res);
		}
	} catch (error:any) {
		// eslint-disable-next-line no-console
		console.log("network error here",error?.response)
			const { status, data } = error?.response;
		if (error && error.response) {
			if (status === 500) {
				// setError(data.error || 'An error occurred due to internal server error')(dispatch);
			}
		}
		reject(data);
	}
};

