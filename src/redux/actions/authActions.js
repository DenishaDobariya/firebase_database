import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, REGISTER_SUCCESS, REGISTER_FAILURE } from '../types';
import axios from 'axios';

export const login = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post('/api/auth/login', { email, password });
    dispatch({ type: LOGIN_SUCCESS, payload: response.data });
    localStorage.setItem('token', response.data.token);
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error.response.data.message });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch({ type: LOGOUT });
};

export const register = (userData) => async (dispatch) => {
  try {
    const response = await axios.post('/api/auth/register', userData);
    dispatch({ type: REGISTER_SUCCESS, payload: response.data });
    localStorage.setItem('token', response.data.token);
  } catch (error) {
    dispatch({ type: REGISTER_FAILURE, payload: error.response.data.message });
  }
};
