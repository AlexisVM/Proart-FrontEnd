import { userConstants } from '../constants';

export function tiposprogramas(state = {}, action ){
	switch (action.type){
	case userConstants.GETALL_TIPO_PROGRAMA_REQUEST:
		return {
		loading: true
	  };
	case userConstants.GETALL_TIPO_PROGRAMA_SUCCESS:
		return {
		items: action.items
	  };
	case userConstants.GETALL_TIPO_PROGRAMA_FAILURE:
		return { 
		error: action.error
		};
	default:
		return state
	}



}