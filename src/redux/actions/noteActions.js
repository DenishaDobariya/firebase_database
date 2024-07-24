import { ADD_NOTE, EDIT_NOTE, DELETE_NOTE, GET_NOTES } from '../types';
import axios from 'axios';

export const getNotes = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/notes');
    dispatch({ type: GET_NOTES, payload: response.data });
  } catch (error) {
    console.error('Failed to fetch notes:', error);
  }
};

export const addNote = (note) => async (dispatch) => {
  try {
    const response = await axios.post('/api/notes', note);
    dispatch({ type: ADD_NOTE, payload: response.data });
  } catch (error) {
    console.error('Failed to add note:', error);
  }
};

export const editNote = (id, updatedNote) => async (dispatch) => {
  try {
    const response = await axios.put(`/api/notes/${id}`, updatedNote);
    dispatch({ type: EDIT_NOTE, payload: response.data });
  } catch (error) {
    console.error('Failed to edit note:', error);
  }
};

export const deleteNote = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/notes/${id}`);
    dispatch({ type: DELETE_NOTE, payload: id });
  } catch (error) {
    console.error('Failed to delete note:', error);
  }
};
