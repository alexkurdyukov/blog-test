import {
	fetchDataError,
	fetchDataLoading,
	fetchDataSuccess,
} from "../reducers/dataReducer";

export const fetchDataAsync = () => {
	return function (dispatch) {
		dispatch(fetchDataLoading());
		const URL =
			"https://gist.githubusercontent.com/alexkurdyukov/8ce011cbc8e57a7ad2a1ff5757f033c6/raw/65777c6e0da379b2d85ac62d24d0855f8e5a98d6/data.json";
		fetch(URL)
			.then((res) => res.json())
			.then((res) => dispatch(fetchDataSuccess(res)))
			.catch((err) => dispatch(fetchDataError(err)));
	};
};
