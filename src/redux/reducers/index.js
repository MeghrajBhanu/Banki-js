import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import pan from './pan.js'
export default combineReducers({
  auth,
  pan,
  message,
});