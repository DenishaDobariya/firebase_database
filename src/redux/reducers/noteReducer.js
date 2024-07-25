import { ADD_NOTE, UPDATE_NOTE, DELETE_NOTE, FETCH_NOTES } from '../actions/types';

const initialState = [];

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return [...state, action.payload];
    case UPDATE_NOTE:
      return state.map(note =>
        note.id === action.payload.id ? action.payload : note
      );
    case DELETE_NOTE:
      return state.filter(note => note.id !== action.payload);
    case FETCH_NOTES:
      return action.payload;
    default:
      return state;
  }
};

export default notesReducer;
