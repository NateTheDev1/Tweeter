import db from "../db/db";
import firebase from "firebase/app";
import "firebase/auth";
import { REGISTER_USER_SUCCESS } from "../reducers/types";

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
    .then((res) => console.log(res));
};

export const login = ({ email, password }) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch((error) => Promise.reject(error.message));
};
