import { Dispatch } from 'redux';

import { ApiEndpoints, ActionHandler } from '../../utils';
import { CatsTypes } from './Types';

export const GetAllCats = () => (dispatch: Dispatch) => {
	return ActionHandler(
        // console.log(url)
		{ url: ApiEndpoints.search, method: 'GET', dispatch },

		(res: { data: { data: any; }; }) => {

            dispatch({ type: CatsTypes.LOADING_CATS})

			const { data } = res;

            // eslint-disable-next-line no-console
            console.log(data)

			dispatch({ type: CatsTypes.LOAD_ALL_CATS, payload: { data } });
		},
		(error: any) => {
			// const { data } = error.response;
            // eslint-disable-next-line 
            console.log(error)
			// dispatch({ type: ResourceTypes.Errors, payload: { errors: data } });
		},
	);
};


export const GetAllBreeds = () => (dispatch: Dispatch) => {
	return ActionHandler(
        // console.log(url)
		{ url: ApiEndpoints.breeds, method: 'GET', dispatch },

		(res: { data: { data: any; }; }) => {

            dispatch({ type: CatsTypes.LOADING_CATS})

			const { data } = res;

            // eslint-disable-next-line no-console
            console.log(data)

			dispatch({ type: CatsTypes.LOAD_ALL_BREEDS, payload: { data } });
		},
		(error: any) => {
			// const { data } = error.response;
            // eslint-disable-next-line 
            console.log(error)
			// dispatch({ type: ResourceTypes.Errors, payload: { errors: data } });
		},
	);
};

export const GetAllCategories = () => (dispatch: Dispatch) => {
	return ActionHandler(
        // console.log(url)
		{ url: ApiEndpoints.categories, method: 'GET', dispatch },

		(res: { data: { data: any; }; }) => {

            dispatch({ type: CatsTypes.LOADING_CATS})

			const { data } = res;

            // eslint-disable-next-line no-console
            console.log(data)

			dispatch({ type: CatsTypes.LOAD_ALL_CATS_CATEGORIES, payload: { data } });
		},
		(error: any) => {
			// const { data } = error.response;
            // eslint-disable-next-line 
            console.log(error)
			// dispatch({ type: ResourceTypes.Errors, payload: { errors: data } });
		},
	);
};
