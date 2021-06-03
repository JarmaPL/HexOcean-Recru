import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { ORDERCREATE_FAILURE, ORDERCREATE_SUCCESS } from "../actions";

const actionReducer = (state, action) => {
	switch (action.type) {
		case ORDERCREATE_FAILURE:
			return {
				error: action.err.message,
			};
		case ORDERCREATE_SUCCESS:
			return { ...state, request_status: action.payload.status };
		case "CLEAR_STATUTS":
			return {};
		default:
			return [];
	}
};

const rootReducer = combineReducers({ actionReducer, form: formReducer });

export default rootReducer;
