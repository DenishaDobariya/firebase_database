// src/redux/actions/noteActions.js

import { ADD_NOTE, UPDATE_NOTE, DELETE_NOTE, FETCH_NOTES } from './types';
import { db } from '../../firebase'; // Your Firebase configuration file
import { collection, addDoc, doc, updateDoc, deleteDoc, getDocs } from 'firebase/firestore';

// Add note action
export const addNote = (note) => async (dispatch) => {
  try {
    const docRef = await addDoc(collection(db, 'notes'), note);
    dispatch({ type: ADD_NOTE, payload: { ...note, id: docRef.id } });
  } catch (error) {
    console.error('Error adding note:', error);
  }
};

// Update note action
export const updateNote = (id, note) => async (dispatch) => {
  try {
    const noteRef = doc(db, 'notes', id);
    await updateDoc(noteRef, note);
    dispatch({ type: UPDATE_NOTE, payload: { id, note } });
  } catch (error) {
    console.error('Error updating note:', error);
  }
};

// Delete note action
export const deleteNote = (id) => async (dispatch) => {
  try {
    await deleteDoc(doc(db, 'notes', id));
    dispatch({ type: DELETE_NOTE, payload: id });
  } catch (error) {
    console.error('Error deleting note:', error);
  }
};

// Fetch notes action
export const fetchNotes = () => async (dispatch) => {
  try {
    const querySnapshot = await getDocs(collection(db, 'notes'));
    const notes = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    dispatch({ type: FETCH_NOTES, payload: notes });
  } catch (error) {
    dispatch({ type: FETCH_NOTES_FAIL, payload: error.message });
  }
};

