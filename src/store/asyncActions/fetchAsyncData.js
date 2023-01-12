import {
	fetchDataError,
	fetchDataLoading,
	fetchDataSuccess,
} from "../reducers/dataReducer";

export const fetchDataAsync = () => {
	return function (dispatch) {
		dispatch(fetchDataLoading());
		const URL =
			"https://gist.githubusercontent.com/alexkurdyukov/8ce011cbc8e57a7ad2a1ff5757f033c6/raw/db666b245b10f03614f1b8f7769a858b4d43d7ea/data.json";
		fetch(URL)
			.then((res) => res.json())
			.then((res) => dispatch(fetchDataSuccess(res)))
			.catch((err) => dispatch(fetchDataError(err)));
	};
};
