import cmsReducer from './modules/Admin/cmsSlice';
import vendorReducer from './modules/Admin/vendorSlice';
import clientReducer from './modules/Admin/clientMasterSlice';
import blogReducer from './modules/Admin/blogSlice';
import faqsReducer from './modules/Admin/faqsSlice';
import authenticationReducer from './modules/authenticationSlice';
import couponReducer from './modules/User/couponSlice'

import { combineReducers } from 'redux';
const reducers = combineReducers({
  authenticationReducer: authenticationReducer,
  vendorReducer: vendorReducer,
  clientReducer: clientReducer,
  cmsReducer:cmsReducer,
  blogReducer:blogReducer,
  faqsReducer:faqsReducer,
  couponReducer:couponReducer,
});

export default reducers;