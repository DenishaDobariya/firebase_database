import { ADD_NOTE, UPDATE_NOTE, DELETE_NOTE, FETCH_NOTES, FETCH_NOTE } from '../actions/types';

const initialState = {
  notes: [],
  selectedNote: null,
};

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    case UPDATE_NOTE:
      return {
        ...state,
        notes: state.notes.map(note => (note.id === action.payload.id ? action.payload : note)),
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== action.payload),
      };
    case FETCH_NOTES:
      return {
        ...state,
        notes: action.payload,
      };
    case FETCH_NOTE:
      return {
        ...state,
        selectedNote: action.payload,
      };
    default:
      return state;
  }
};

export default noteReducer;
