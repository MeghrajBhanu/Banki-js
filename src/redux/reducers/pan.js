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
  FETCH_PANCARD_FLAGGED_ALL_SUCCESS,
  FETCH_PANCARD_FLAGGED_ALL_REQUEST,
  FLAG_ID_ONE_SUCCESS,
  FLAG_ID_ONE_FAIL,
  FLAG_ID_ONE_REQUEST,
} from "../actions/actiontypes";
const initialState = { data: [], error: null, isLoading: true, success: null };

const pan = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_PANCARD_ALL_REQUEST:
    case FETCH_PANCARD_FLAGGED_ALL_REQUEST:
      return {
        ...state,
        success: null,
        isLoading: true,
      };
    case FETCH_PANCARD_ALL_SUCCESS:
    case FETCH_PANCARD_FLAGGED_ALL_SUCCESS:
      return {
        ...state,
        data: payload,
        isLoading: false,
        success: null,
      };
    case FETCH_PANCARD_ALL_FAIL:
    case FETCH_PANCARD_FLAGGED_ALL_FAIL:
      return {
        ...state,
        error: payload,
        isLoading: false,
        success: null,
      };
    case FETCH_ALL_SORT_BY_FIXED_DEPO_REQUEST:
      return {
        ...state,

        isLoading: true,
        success: null,
      };
    case FETCH_ALL_SORT_BY_FIXED_DEPO_SUCCESS:
      return {
        ...state,
        data: payload,
        isLoading: false,
        success: null,
      };
    case FETCH_ALL_SORT_BY_FIXED_DEPO_FAIL:
      return {
        ...state,
        error: payload,
        isLoading: false,
        success: null,
      };
    case FETCH_ALL_SORT_BY_Account_Type_REQUEST:
      return {
        ...state,

        isLoading: true,
        success: null,
      };
    case FETCH_ALL_SORT_BY_Account_Type_SUCCESS:
      return {
        ...state,
        data: payload,
        isLoading: false,
        success: null,
      };
    case FETCH_ALL_SORT_BY_Account_Type_FAIL:
      return {
        ...state,
        error: payload,
        isLoading: false,
        success: null,
      };
    case FETCH_ONE_ID_REQUEST:
      return {
        ...state,
        isLoading: true,
        success: null,
      };
    case FETCH_ONE_ID_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
        success: null,
      };
    case FETCH_ONE_ID_SUCCESS:
      return {
        ...state,
        data: payload,
        isLoading: false,
      };
    case FLAG_ID_ONE_REQUEST:
      return {
        ...state,
        success: null,
      };
    case FLAG_ID_ONE_SUCCESS:
      return {
        ...state,
        success: true,
      };
    case FLAG_ID_ONE_FAIL:
      return {
        ...state,
        error: payload,
        success: null,
      };

    default:
      return state;
  }
};
export default pan;
