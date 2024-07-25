// src/redux/actions/authActions.js

import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { LOGIN_SUCCESS, LOGIN_FAIL, REGISTER_SUCCESS, REGISTER_FAIL, LOGOUT } from './types';

// Register action
export const registerUser = (email, password) => async (dispatch) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    dispatch({ type: REGISTER_SUCCESS });
  } catch (error) {
    dispatch({ type: REGISTER_FAIL, payload: error.message });
  }
};

// Login action
export const loginUser = (email, password) => async (dispatch) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    dispatch({ type: LOGIN_SUCCESS });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.message });
  }
};

// Logout action
export const logoutUser = () => async (dispatch) => {
  try {
    await signOut(auth);
    dispatch({ type: LOGOUT });
  } catch (error) {
    console.error("Error signing out:", error);
  }
};
