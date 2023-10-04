import { call, put, takeLatest } from 'redux-saga/effects';
import { callLoginApi} from '../../services/loginApi';
import {
  onLoginSubmit,
  onLoginSubmitError,
  onLoginSubmitSuccess,
} from '../modules/authenticationSlice';

function* Login({payload}) {
  try {
      const loginResponse = yield call(callLoginApi, payload.email, payload.pass);
    if (loginResponse.status_code === 200) {
          yield put(onLoginSubmitSuccess({ data: loginResponse, message: loginResponse.message}));
    } else {
          yield put(onLoginSubmitError({ data: loginResponse.data, message: loginResponse.message,  }));
    }
  } catch (error) {
      const message = error.response || 'Something went wrong';
    yield put(onLoginSubmitError({ data: {}, message, status_code: 400 }));
  }
}

export default function* authenticationSaga() {
  yield takeLatest(onLoginSubmit.type, Login);
}
