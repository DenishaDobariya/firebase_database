import { combineReducers } from 'redux';
import noteReducer from './noteReducer';
import authReducer from './authReducers';

const rootReducer = combineReducers({
  authReducer,
  noteReducer,
});

export default rootReducer;
