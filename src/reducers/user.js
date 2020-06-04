import { REGISTER_USER_SUCCESS, SET_AUTH_USER } from "./types";

const INITIAL_STATE = {
  user: null,
  isAuth: false,
  isAuthResolved: false,
};

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case REGISTER_USER_SUCCESS:
      return state;
    case SET_AUTH_USER:
      return { ...state, user: action.payload, isAuth: true };
    default:
      return state;
  }
};
