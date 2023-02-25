import {CREATE_ACCOUNT_SUCCESS,CREATE_ACCOUNT_FAIL} from "../actions/actiontypes"

const initialState = { error: null,success: null };
const create = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
        case CREATE_ACCOUNT_SUCCESS:
        
            return {
            ...state,
            error: null,
            success: true,
            };
        case CREATE_ACCOUNT_FAIL:
      
            return {
              ...state,
              error: payload.msg,
              success: false,
            };
        default:
            return state;
        
    }
}
export default create;
