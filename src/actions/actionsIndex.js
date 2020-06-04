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
