import {CREATE_ACCOUNT_SUCCESS ,CREATE_ACCOUNT_FAIL } from "./actiontypes";
import Fetchservice from "../services/fetchservice";
export const login = (obj) => (dispatch) => {
    return Fetchservice.create_account(obj).then(
      (data) => {
        dispatch({
          type: CREATE_ACCOUNT_SUCCESS,
          payload: { user: data.msg },
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
  