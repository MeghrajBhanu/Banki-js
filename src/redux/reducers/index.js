import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import pan from './pan.js'
import create from "./createAccount";
export default combineReducers({
  auth,
  pan,
  message,
  create,
});