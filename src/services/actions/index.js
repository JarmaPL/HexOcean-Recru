import { store } from "../store";

export const ORDERCREATE_SUCCESS = "ORDERCREATE_SUCCESS";
export const ORDERCREATE_FAILURE = "ORDERCREATE_FAILURE";

const url = process.env.REACT_APP_SERVER_URI;

export const createOrder = () => (dispatch) => {
	let fields = store.getState().form.dish.registeredFields;
	const values = store.getState().form.dish.values;
	const clearValues = () => {
		let resoult = {};
		Object.keys(fields).forEach((e) => {
			resoult[e] = values[e];
		});
		return resoult;
	};

	const body = clearValues();

	return fetch(url, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(body),
	})
		.then((payload) => {
			dispatch({ type: ORDERCREATE_SUCCESS, payload });
		})
		.catch((err) => {
			dispatch({ type: ORDERCREATE_FAILURE, err });
		});
};

export const cleanStatuts = () => (dispatch) => {
	dispatch({ type: "CLEAR_STATUTS" });
};
