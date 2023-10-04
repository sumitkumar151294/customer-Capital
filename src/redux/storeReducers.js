import authenticationReducer from './modules/authenticationSlice';
import { combineReducers } from 'redux';
const reducers = combineReducers({
  authenticationReducer: authenticationReducer
});

export default reducers;
