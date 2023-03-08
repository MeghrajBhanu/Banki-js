import {
  FETCH_ONE_ID_FAIL,
  FETCH_ONE_ID_SUCCESS,
  FETCH_PANCARD_ALL_FAIL,
  FETCH_PANCARD_ALL_SUCCESS,
  FETCH_ALL_SORT_BY_FIXED_DEPO_FAIL,
  FETCH_ALL_SORT_BY_FIXED_DEPO_SUCCESS,
  FETCH_PANCARD_ALL_REQUEST,
  FETCH_ALL_SORT_BY_FIXED_DEPO_REQUEST,
  FETCH_ONE_ID_REQUEST,
  FETCH_ALL_SORT_BY_Account_Type_REQUEST,
  FETCH_ALL_SORT_BY_Account_Type_SUCCESS,
  FETCH_ALL_SORT_BY_Account_Type_FAIL,
  FETCH_PANCARD_FLAGGED_ALL_FAIL,
  FETCH_PANCARD_FLAGGED_ALL_REQUEST,
  FETCH_PANCARD_FLAGGED_ALL_SUCCESS,
  FLAG_ID_ONE_FAIL,
  FLAG_ID_ONE_REQUEST,
  FLAG_ID_ONE_SUCCESS,
  FETCH_PANCARD_BANK_ALL_REQUEST,
  FETCH_PANCARD_BANK_ALL_SUCCESS,
  FETCH_PANCARD_BANK_ALL_FAIL,
} from "./actiontypes";
import FetchService from "../services/fetchservice";
export const get_all_pancard = (pan) => (dispatch) => {
  dispatch({
    type: FETCH_PANCARD_ALL_REQUEST,
  });
  FetchService.get_all_pancard(pan)
    .then((response) => {
      console.log(response);
      dispatch({
        type: FETCH_PANCARD_ALL_SUCCESS,
        payload: response.data.data,
      });
      return Promise.resolve();
    })
    .catch(function (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: FETCH_PANCARD_ALL_FAIL,
        payload: message,
      });
      return Promise.reject();
    });
};

export const get_all_sort_fixed_depo = (pan) => (dispatch) => {
  dispatch({
    type: FETCH_ALL_SORT_BY_FIXED_DEPO_REQUEST,
  });
  FetchService.get_all_sort_fixed_depo(pan)
    .then((response) => {
      dispatch({
        type: FETCH_ALL_SORT_BY_FIXED_DEPO_SUCCESS,
        payload: response.data.data,
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
        type: FETCH_ALL_SORT_BY_FIXED_DEPO_FAIL,
        payload: message,
      });
      return Promise.reject();
    });
};

export const get_all_sort_account_type = (pan, account_type) => (dispatch) => {
  dispatch({
    type: FETCH_ALL_SORT_BY_Account_Type_REQUEST,
  });
  FetchService.get_all_sort_account_type(pan, account_type)
    .then((response) => {
      dispatch({
        type: FETCH_ALL_SORT_BY_Account_Type_SUCCESS,
        payload: response.data.data,
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
        type: FETCH_ALL_SORT_BY_Account_Type_FAIL,
        payload: message,
      });
      return Promise.reject();
    });
};
export const get_one_id = (id) => (dispatch) => {
  dispatch({
    type: FETCH_ONE_ID_REQUEST,
  });
  FetchService.get_one_id(id)
    .then((response) => {
      dispatch({
        type: FETCH_ONE_ID_SUCCESS,
        payload: response.data.data,
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
        type: FETCH_ONE_ID_FAIL,
        payload: message,
      });
      return Promise.reject();
    });
};

export const flag_account = (id, isFlagged) => (dispatch) => {
  dispatch({
    type: FLAG_ID_ONE_REQUEST,
  });
  FetchService.flag_account(id, isFlagged)
    .then((response) => {
      dispatch({
        type: FLAG_ID_ONE_SUCCESS,
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
        type: FLAG_ID_ONE_FAIL,
        payload: message,
      });
      return Promise.reject();
    });
};

export const get_all_flag_accounts = (pan) => (dispatch) => {
  dispatch({
    type: FETCH_PANCARD_FLAGGED_ALL_REQUEST,
  });
  FetchService.get_all_flag_accounts(pan)
    .then((response) => {
      if (response.status !== 200) {
        console.log(
          "Looks like there was a problem. Status Code: " + response.status
        );
        return;
      }
      console.log(response);
      dispatch({
        type: FETCH_PANCARD_FLAGGED_ALL_SUCCESS,
        payload: response.data.data,
      });
      return Promise.resolve();
    })
    .catch(function (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: FETCH_PANCARD_FLAGGED_ALL_FAIL,
        payload: message,
      });
      return Promise.reject();
    });
};

export const get_all_bankAccounts = (pan, bankName) => (dispatch) => {
  dispatch({
    type: FETCH_PANCARD_BANK_ALL_REQUEST,
  });
  FetchService.get_all_bankAccounts(pan, bankName)
    .then((response) => {
      if (response.status !== 200) {
        console.log(
          "Looks like there was a problem. Status Code: " + response.status
        );
        return;
      }
      console.log(response);
      dispatch({
        type: FETCH_PANCARD_BANK_ALL_SUCCESS,
        payload: response.data.data,
      });
      return Promise.resolve();
    })
    .catch(function (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: FETCH_PANCARD_BANK_ALL_FAIL,
        payload: message,
      });
      return Promise.reject();
    });
};
