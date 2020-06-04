import { REGISTER_USER_SUCCESS } from "./types";

// const INITIAL_STATE = {
//   user: null,
//   isAuth: false,
//   isAuthResolved: false,
// };

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case REGISTER_USER_SUCCESS:
      return state;
    default:
      return state;
  }
};
