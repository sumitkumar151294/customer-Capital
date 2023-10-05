import vendorReducer from './modules/Admin/vendorSlice';
import authenticationReducer from './modules/authenticationSlice';

import { combineReducers } from 'redux';
const reducers = combineReducers({
  authenticationReducer: authenticationReducer,
  vendorReducer: vendorReducer
});

export default reducers;