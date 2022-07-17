import { combineReducers } from "redux";
import projectReducer from "./projectReducer";
import { reducer as toastrReducer } from "react-redux-toastr";

export default combineReducers({
	payload: projectReducer,
	toastr: toastrReducer,
});
