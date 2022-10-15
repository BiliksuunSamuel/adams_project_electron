import { combineReducers } from "redux";
import {
  UserReducer,
  ResponseReducer,
  ChecksReducer,
  AppReducer,
} from "../features";
export default combineReducers({
  UserReducer,
  ResponseReducer,
  ChecksReducer,
  AppReducer,
});
