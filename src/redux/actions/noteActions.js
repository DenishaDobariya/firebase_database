import { collection, addDoc, updateDoc, deleteDoc, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase'; 
import { ADD_NOTE, UPDATE_NOTE, DELETE_NOTE, FETCH_NOTES, FETCH_NOTE } from '../actions/types';

export const addNote = (note) => async (dispatch) => {
  try {
    const notesCollection = collection(db, 'notes');
    const docRef = await addDoc(notesCollection, note);
    dispatch({
      type: ADD_NOTE,
      payload: { id: docRef.id, ...note },
    });
  } catch (error) {
    throw error;
  }
};

export const updateNote = (id, note) => async (dispatch) => {
  try {
    const noteDoc = doc(db, 'notes', id);
    await updateDoc(noteDoc, note);
    dispatch({
      type: UPDATE_NOTE,
      payload: { id, ...note },
    });
  } catch (error) {
    throw error;
  }
};

export const deleteNote = (id) => async (dispatch) => {
  try {
    const noteDoc = doc(db, 'notes', id);
    await deleteDoc(noteDoc);
    dispatch({
      type: DELETE_NOTE,
      payload: id,
    });
  } catch (error) {
    throw error;
  }
};

export const fetchNotes = () => async (dispatch) => {
  try {
    const notesCollection = collection(db, 'notes');
    const snapshot = await getDocs(notesCollection);
    const notes = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    dispatch({
      type: FETCH_NOTES,
      payload: notes,
    });
  } catch (error) {
    throw error;
  }
};

export const getNote = (id) => async (dispatch) => {
  try {
    const noteDoc = doc(db, 'notes', id);
    const docSnap = await getDoc(noteDoc);
    if (docSnap.exists()) {
      dispatch({
        type: FETCH_NOTE,
        payload: { id: docSnap.id, ...docSnap.data() },
      });
    } else {
      throw new Error('Note not found');
    }
  } catch (error) {
    throw error;
  }
};
