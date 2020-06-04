import { REGISTER_USER_SUCCESS, SET_AUTH_USER, SET_USER_LOGOUT } from "./types";

const INITIAL_STATE = {
  user: null,
  isAuth: false,
  isAuthResolved: false,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REGISTER_USER_SUCCESS:
      return state;
    case SET_AUTH_USER:
      return { ...state, user: action.payload, isAuth: !!action.payload };
    case SET_USER_LOGOUT:
      return {
        user: null,
        isAuth: false,
        isAuthResolved: false,
      };
    default:
      return state;
  }
};
