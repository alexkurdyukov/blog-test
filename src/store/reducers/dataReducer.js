import {FETCH_DATA_ERROR, FETCH_DATA_LOADING, FETCH_DATA_SUCCESS} from '../actions/dataActions.js'

const defaultState = {
	data: {},
	error: "",
	loading: false,
};

export const dataReducer = (state = defaultState, action) => {
	switch (action.type) {
		case FETCH_DATA_LOADING:
			return {
				...state,
				loading: true,
			};
		case FETCH_DATA_SUCCESS:
			return {
				...state,
				loading: false,
				data: action.payload,
			};
		case FETCH_DATA_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export const fetchDataLoading = () => ({ type: FETCH_DATA_LOADING });
export const fetchDataSuccess = (payload) => ({
	type: FETCH_DATA_SUCCESS,
	payload,
});
export const fetchDataError = (payload) => ({
	type: FETCH_DATA_ERROR,
	payload,
});
