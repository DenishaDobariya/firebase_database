import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_REGISTER } from '../actions/types';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { app } from '../../firebase'; 

const auth = getAuth(app);

export const loginUser = (email, password) => async (dispatch) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    dispatch({
      type: AUTH_LOGIN,
      payload: userCredential.user,
    });
  } catch (error) {
    throw error;
  }
};

export const registerUser = (email, password, firstName, lastName) => async (dispatch) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(userCredential.user, {
      displayName: `${firstName} ${lastName}`,
    });
    dispatch({
      type: AUTH_REGISTER,
      payload: userCredential.user,
    });
  } catch (error) {
    throw error;
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    await signOut(auth);
    dispatch({
      type: AUTH_LOGOUT,
    });
  } catch (error) {
    throw error;
  }
};
