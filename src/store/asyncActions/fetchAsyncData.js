import {
	fetchDataError,
	fetchDataLoading,
	fetchDataSuccess,
} from "../reducers/dataReducer";

export const fetchDataAsync = () => {
	return function (dispatch) {
		dispatch(fetchDataLoading());
		const URL =
			"https://gist.githubusercontent.com/alexkurdyukov/8ce011cbc8e57a7ad2a1ff5757f033c6/raw/ca51c4ec105ab1b5cf2151304f0e5d6960796725/data.json";
		fetch(URL)
			.then((res) => res.json())
			.then((res) => dispatch(fetchDataSuccess(res)))
			.catch((err) => dispatch(fetchDataError(err)));
	};
};
