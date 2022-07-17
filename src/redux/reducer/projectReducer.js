import { PROJECT_ERROR, GET_ALL_PROJECTS, GET_PROJECT } from "../actions/types";

const initialState = {
	payload: [],
	projectError: false,
};
export default function reducer(state = initialState, action) {
	switch (action.type) {
		case GET_ALL_PROJECTS:
			console.log("action", action);
			return {
				...state,
				payload: action.payload,
				projectError: false,
			};
		case GET_PROJECT:
			return {
				...state,
				payload: action.payload,
				projectError: false,
			};
		case PROJECT_ERROR:
			return {
				...state,
				projectError: true,
				errorMessage: action.errorMessage,
			};
		default:
			return state;
	}
}
