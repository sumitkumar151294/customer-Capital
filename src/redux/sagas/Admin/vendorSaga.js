import { call, put, takeLatest } from 'redux-saga/effects';
import { callVendorApi} from '../../../services/Admin/vendorApi';
import {
  onVendorSubmit,
  onVendorSubmitError,
  onVendorSubmitSuccess,
} from '../../modules/Admin/vendorSlice';

function* Vendor({payload}) {
  try {
    debugger
      const vendorResponse = yield call(callVendorApi, payload);
    if (vendorResponse.status_code === 200) {
          yield put(onVendorSubmitSuccess({ data: vendorResponse, message: vendorResponse.message}));
    } else {
          yield put(onVendorSubmitError({ data: vendorResponse.data, message: vendorResponse.message,  }));
    }
  } catch (error) {
      const message = error.response || 'Something went wrong';
    yield put(onVendorSubmitError({ data: {}, message, status_code: 400 }));
  }
}

export default function* vendorSaga() {
  yield takeLatest(onVendorSubmit.type, Vendor);
}
