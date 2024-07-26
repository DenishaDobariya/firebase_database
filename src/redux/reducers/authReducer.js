import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_REGISTER } from '../actions/types';

const initialState = {
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
    case AUTH_REGISTER:
      return {
        ...state,
        user: action.payload,
      };
    case AUTH_LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
