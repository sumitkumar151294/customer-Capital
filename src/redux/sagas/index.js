import { all } from 'redux-saga/effects';
import authenticationSaga from './authenticationSaga';
import vendorSaga from './Admin/vendorSaga';
import clientMasterSaga from './Admin/clientMasterSaga';
import cmsSaga from './UserAdmin/cmsSaga';
import blogSaga from './Admin/blogSaga';
import couponSaga from './User/couponSaga'
import loginSaga from './loginSaga';
import userSaga from './Admin/userSaga';
import categorySaga from './Admin/categorySaga';
import roleMasterSaga from './Admin/roleMasterSaga';
import productSaga from './Admin/productSaga';
import allocateMasterSaga from './Admin/allocateMasterSaga';
import addSpecialSaga from './UserAdmin/addSpecialSaga';
import AbandonedSaga from './UserAdmin/AbandonedCartSaga';
import ClientCommissionSaga from './UserAdmin/ClientCommissionSaga';
import offerMasterSaga from './UserAdmin/offerMasterSaga';
import BannerMasterSaga from './UserAdmin/BannerMasterSaga';
import faqsSaga from './UserAdmin/faqsSaga';
import emailEventSaga from './UserAdmin/emailEventSaga';

export default function* rootSaga() {
  yield all([
    authenticationSaga(),
    emailEventSaga(),
    BannerMasterSaga(),
    offerMasterSaga(),
    ClientCommissionSaga(),
    AbandonedSaga(),
    vendorSaga(),
    clientMasterSaga(),
    cmsSaga(),
    blogSaga(),
    faqsSaga(),
    couponSaga(),
    loginSaga(),
    userSaga(),
    categorySaga(),
    roleMasterSaga(),
    productSaga(),
    allocateMasterSaga(),
    addSpecialSaga(),
  ]);
}
