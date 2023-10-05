import cmsReducer from './modules/Admin/cmsSlice';
import vendorReducer from './modules/Admin/vendorSlice';
import clientReducer from './modules/Admin/clientMasterSlice';
import authenticationReducer from './modules/authenticationSlice';

import { combineReducers } from 'redux';
const reducers = combineReducers({
  authenticationReducer: authenticationReducer,
  vendorReducer:vendorReducer,
  clientReducer: clientReducer,
  cmsReducer:cmsReducer,
});

export default reducers;