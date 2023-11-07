import { call, put, takeLatest } from 'redux-saga/effects';
import { callEmailEventApi } from '../../../services/UserAdmin/emailEventApi';
import { onEmailEventSubmit,onEmailEventSubmitSuccess,onEmailEventSubmitError } from '../../modules/UserAdmin/emailEventSlice';
function* EmailEvent({payload}) {
  try {
      const cmsResponse = yield call(callEmailEventApi, payload);
    if (cmsResponse.status_code === 200) {
          yield put(onEmailEventSubmitSuccess({ data: cmsResponse, message: cmsResponse.message}));
    } else {
          yield put(onEmailEventSubmitError({ data: cmsResponse.data, message: cmsResponse.message,  }));
    }
  } catch (error) {
      const message = error.response || 'Something went wrong';
    yield put(onEmailEventSubmitError({ data: {}, message, status_code: 400 }));
  }
}

export default function* emailEventSaga() {
  yield takeLatest(onEmailEventSubmit.type, EmailEvent);
}
