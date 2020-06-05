import db from "../db/db";
import firebase from "firebase/app";
import "firebase/auth";
import {
  REGISTER_USER_SUCCESS,
  SET_AUTH_USER,
  SET_USER_LOGOUT,
} from "../reducers/types";

export const registerUser = ({ email, password }) => async (dispatch) => {
  localStorage.setItem("firstTime", true);
  return await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch((error) => Promise.reject(error.message));
};

export const logout = () => (dispatch) => {
  firebase
    .auth()
    .signOut()
    .then((res) => {
      localStorage.setItem("isAuth", false);
      dispatch({ type: SET_USER_LOGOUT, payload: null });
    });
};

export const login = ({ email, password }) => (dispatch) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      localStorage.setItem("isAuth", true);
      dispatch({ type: SET_AUTH_USER, payload: user });
    })
    .catch((error) => Promise.reject(error.message));
};

export const createNewProfile = (newProfile, uid) => async (dispatch) => {
  const modifiedUser = await generateProfile(newProfile, uid);

  return db
    .collection("profiles")
    .doc(uid)
    .set(modifiedUser)
    .then((res) => {
      // dispatch({type: SET_USER_PROFILE, payload: res})
      console.log(res);
    });
};

const generateProfile = (newProfile, uid) => {
  return (newProfile = {
    fullName: newProfile.fullName,
    username: newProfile.username,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
    avatar: newProfile.avatarURL,
    posts: [],
    friends: [],
    bio: newProfile.bio,
    id: uid,
  });
};
