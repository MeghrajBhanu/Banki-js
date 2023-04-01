import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
  REGISTER_REQUEST,
  LOGIN_REQUEST,
} from "./actiontypes";

import AuthService from "../services/authservice";

export const register = (obj) => (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });
  return AuthService.register(obj)
    .then((response) => {
      dispatch({
        type: REGISTER_SUCCESS,
      });
      
      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve();
    })
    .catch((error) => {
      
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: REGISTER_FAIL,
        payload: { error: message },
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    });
};

export const login = (obj, navigate) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  return AuthService.login(obj)
    .then((data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data.user, token: data.token },
      });
      console.log(data, data.token);
      localStorage.setItem("token", data.token);
      console.log(localStorage.getItem("token"));
      navigate("/login/landing");

      return Promise.resolve();
    })
    .catch((error) => {
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: LOGIN_FAIL,
        payload: { error: message },
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    });
};

export const logout = (token) => (dispatch) => {
  AuthService.logout(token).catch((error) => {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
  });
  localStorage.removeItem("token");
  dispatch({
    type: LOGOUT,
  });
};
