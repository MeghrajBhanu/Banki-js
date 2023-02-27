import {CREATE_ACCOUNT_SUCCESS ,CREATE_ACCOUNT_FAIL,SET_MESSAGE, } from "./actiontypes";
import Fetchservice from "../services/fetchservice";
export const create_account = (obj) => (dispatch) => {
    return Fetchservice.create_account(obj).then(
      (data) => {
        dispatch({
          type: CREATE_ACCOUNT_SUCCESS,
          payload: { success: data.msg },
        });
        dispatch({
          type: SET_MESSAGE,
          payload: data.msg,
        });
  
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.msg) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: CREATE_ACCOUNT_FAIL,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  };
  