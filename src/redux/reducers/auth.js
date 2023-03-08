import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    LOGIN_REQUEST,
    REGISTER_REQUEST,
  } from "../actions/actiontypes";
  
 
  
const initialState = { isLoggedIn: false, user: null,token:null,error:null,success:false };
  
const auth= (state = initialState, action)=> {
    const { type, payload } = action;
  
    switch (type) {
      case REGISTER_SUCCESS:
        return {
          ...state,
          isLoggedIn: false,
          error:null,
          success:true,
        };
      case REGISTER_FAIL:
        return {
          ...state,
          isLoggedIn: false,
          success:false,
          error:payload.error,
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          isLoggedIn: true,
          user: payload.user,
          token:payload.token,
          error:null,
          success:true,
        };
      case LOGIN_FAIL:
        return {
          ...state,
          isLoggedIn: false,
          user: null,
          token:null,
          error:payload.error,
          success:false,
        };
      case LOGIN_REQUEST:
      case REGISTER_REQUEST:
        return{
          ...state,
          error:null,
          success:false
        }
      case LOGOUT:
        return {
          ...state,
          isLoggedIn: false,
          user: null,
          token:null,
        };
      default:
        return state;
    }
  }
  export default auth;