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
} from "./actiontypes";
import FetchService from '../services/fetchservice'
export const get_all_pancard = (pan) => (dispatch) => {
  dispatch({
    type:FETCH_PANCARD_ALL_REQUEST,
  })
  FetchService.get_all_pancard(pan).then(
    (response) => {
     
      dispatch({
        type: FETCH_PANCARD_ALL_SUCCESS,
        payload: response.data.data,
      });
      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response && error.response.data && error.response.data.msg) ||
        error.message ||
        error.toString();

      dispatch({
        type: FETCH_PANCARD_ALL_FAIL,
        payload: message,
      });
      return Promise.reject();
    }
  );
};
export const get_all_sort_fixed_depo = (pan) => (dispatch) => {
  dispatch({
    type:FETCH_ALL_SORT_BY_FIXED_DEPO_REQUEST,
  })
  FetchService.get_all_sort_fixed_depo(pan).then(
    (response) => {
      
      dispatch({
        type: FETCH_ALL_SORT_BY_FIXED_DEPO_SUCCESS,
        payload: response.data.data,
      });
      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response && error.response.data && error.response.data.msg) ||
        error.message ||
        error.toString();

      dispatch({
        type: FETCH_ALL_SORT_BY_FIXED_DEPO_FAIL,
        payload: message,
      });
      return Promise.reject();
    }
  );
};
export const get_one_id = (id) => (dispatch) => {
  dispatch({
    type: FETCH_ONE_ID_REQUEST,
    
  });
  FetchService.get_one_id(id).then(
    (response) => {
     
      dispatch({
        type: FETCH_ONE_ID_SUCCESS,
        payload: response.data.data,
      });
      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response && error.response.data && error.response.data.msg) ||
        error.message ||
        error.toString();

      dispatch({
        type: FETCH_ONE_ID_FAIL,
        payload: message,
      });
      return Promise.reject();
    }
  );
};
