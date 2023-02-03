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
} from "../actions/actiontypes";
const initialState = { data: [], error: null, isLoading: true };

const pan = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_PANCARD_ALL_REQUEST:
      return {
        ...state,

        isLoading: true,
      };
    case FETCH_PANCARD_ALL_SUCCESS:
      return {
        ...state,
        data: payload,
        isLoading: false,
      };
    case FETCH_PANCARD_ALL_FAIL:
      return {
        ...state,
        error: payload,
        isLoading: false,
      };
    case FETCH_ALL_SORT_BY_FIXED_DEPO_REQUEST:
      return {
        ...state,

        isLoading: true,
      };
    case FETCH_ALL_SORT_BY_FIXED_DEPO_SUCCESS:
      return {
        ...state,
        data: payload,
        isLoading: false,
      };
    case FETCH_ALL_SORT_BY_FIXED_DEPO_FAIL:
      return {
        ...state,
        error: payload,
        isLoading: false,
      };
    case FETCH_ALL_SORT_BY_Account_Type_REQUEST:
        return {
          ...state,
  
          isLoading: true,
        };
      case FETCH_ALL_SORT_BY_Account_Type_SUCCESS:
        return {
          ...state,
          data: payload,
          isLoading: false,
        };
      case FETCH_ALL_SORT_BY_Account_Type_FAIL:
        return {
          ...state,
          error: payload,
          isLoading: false,
        };
    case FETCH_ONE_ID_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_ONE_ID_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case FETCH_ONE_ID_SUCCESS:
      return {
        ...state,
        data: payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
export default pan;
