import { all } from 'redux-saga/effects';
import authenticationSaga from './authenticationSaga';
import vendorSaga from './Admin/vendorSaga';
import clientMasterSaga from './Admin/clientMasterSaga';

export default function* rootSaga() {
  yield all([
    authenticationSaga(),
    vendorSaga(),
    clientMasterSaga()
  ]);
}
