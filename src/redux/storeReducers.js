import cmsReducer from './modules/Admin/cmsSlice';
import vendorReducer from './modules/Admin/vendorSlice';
import clientReducer from './modules/Admin/clientMasterSlice';
import blogReducer from './modules/Admin/blogSlice';
import faqsReducer from './modules/Admin/faqsSlice';
import authenticationReducer from './modules/authenticationSlice';
import couponReducer from './modules/User/couponSlice';
import loginReducer from './modules/loginSlice';
import userReducer from './modules/Admin/userSlice'
import categoryReducer from './modules/Admin/categorySlice' 
import roleMasterReducer from './modules/Admin/roleMasterSlice';
import ProductReducer from './modules/Admin/productSlice';
import allocateMasterReducer from './modules/Admin/allocateMasterSlice';
import toogleReducer from './modules/User/toggleSlice';
import addSpecialReducer from './modules/UserAdmin/addSpecialSlice';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  authenticationReducer: authenticationReducer,
  vendorReducer: vendorReducer,
  clientReducer: clientReducer,
  cmsReducer:cmsReducer,
  blogReducer:blogReducer,
  faqsReducer:faqsReducer,
  couponReducer:couponReducer,
  loginReducer:loginReducer,
  userReducer:userReducer,
  categoryReducer:categoryReducer,
  roleMasterReducer: roleMasterReducer,
  ProductReducer:ProductReducer,
  allocateMasterReducer: allocateMasterReducer,
  toggleReducer:toogleReducer,
  addSpecialReducer:addSpecialReducer,

});

export default reducers;