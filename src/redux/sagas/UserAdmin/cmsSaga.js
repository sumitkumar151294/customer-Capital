import { call, put, takeLatest } from 'redux-saga/effects';
import { callCmsApi } from '../../../services/UserAdmin/cmsApi';
import {
  onCmsSubmit,
  onCmsSubmitError,
  onCmsSubmitSuccess,
} from '../../modules/UserAdmin/cmsSlice';

function* Cms({payload}) {
  try {
      const cmsResponse = yield call(callCmsApi, payload);
    if (cmsResponse.status_code === 200) {
          yield put(onCmsSubmitSuccess({ data: cmsResponse, message: cmsResponse.message}));
    } else {
          yield put(onCmsSubmitError({ data: cmsResponse.data, message: cmsResponse.message,  }));
    }
  } catch (error) {
      const message = error.response || 'Something went wrong';
    yield put(onCmsSubmitError({ data: {}, message, status_code: 400 }));
  }
}

export default function* cmsSaga() {
  yield takeLatest(onCmsSubmit.type, Cms);
}
