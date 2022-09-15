import { combineReducers } from "redux";
import { UserReducer, ResponseReducer, ChecksReducer } from "../features";
export default combineReducers({ UserReducer, ResponseReducer, ChecksReducer });
