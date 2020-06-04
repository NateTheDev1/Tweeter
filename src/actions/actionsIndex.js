import db from "../db/db";
import firebase from "firebase/app";
import "firebase/auth";
import {
  REGISTER_USER_SUCCESS,
  SET_AUTH_USER,
  SET_USER_LOGOUT,
} from "../reducers/types";

export const registerUser = ({ email, password }) => async (dispatch) => {
  return await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch((error) => Promise.reject(error.message));
};

export const logout = () => (dispatch) => {
  firebase
    .auth()
    .signOut()
    .then((res) => dispatch({ type: SET_USER_LOGOUT, payload: null }));
};

export const login = ({ email, password }) => (dispatch) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => dispatch({ type: SET_AUTH_USER, payload: user }))
    .catch((error) => Promise.reject(error.message));
};
