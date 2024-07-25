import { combineReducers } from 'redux';
import noteReducer from './noteReducer';
import authReducer from './authReducers'; 

const rootReducer = combineReducers({
  auth: authReducer, 
  notes: noteReducer, 
});

export default rootReducer;
