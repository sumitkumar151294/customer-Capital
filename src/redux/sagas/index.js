import { all } from 'redux-saga/effects';
import authenticationSaga from './authenticationSaga';
import vendorSaga from './Admin/vendorSaga';
import clientMasterSaga from './Admin/clientMasterSaga';
import cmsSaga from './Admin/cmsSaga';
import blogSaga from './Admin/blogSaga';
import faqsSaga from './Admin/faqsSaga';
import couponSaga from './User/couponSaga'
import loginSaga from './loginSaga';

export default function* rootSaga() {
  yield all([
    authenticationSaga(),
    vendorSaga(),
    clientMasterSaga(),
    cmsSaga(),
    blogSaga(),
    faqsSaga(),
    couponSaga(),
    loginSaga(),

  ]);
}
