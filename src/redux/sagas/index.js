import { all } from 'redux-saga/effects';
import authenticationSaga from './authenticationSaga';
import vendorSaga from './Admin/vendorSaga';

export default function* rootSaga() {
  yield all([
    authenticationSaga(),
    vendorSaga(),
  ]);
}
