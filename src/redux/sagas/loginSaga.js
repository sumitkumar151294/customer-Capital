import { call, put, takeLatest } from 'redux-saga/effects';
import { onLoginSubmit , onLoginSubmitError , onLoginSubmitSuccess , onSignUpSubmit , onSignUpSubmitSuccess, onSignUpSubmitError , onUpdateSubmit , onUpdateSubmitSuccess , onUpdateSubmitError } from '../modules/loginSlice';
import { callLoginApi, callSignUpApi, callUpdateApi } from '../../services/loginApi';

function* Login({ payload }) {
  try {
    const loginResponse = yield call(callLoginApi, payload);
    if (loginResponse.status_code === 200) {
      yield put(onLoginSubmitSuccess({ data: loginResponse, message: loginResponse.message }));
    } else {
      yield put(onLoginSubmitError({ data: loginResponse.data, message: loginResponse.message, }));
    }
  } catch (error) {
    const message = error.response || 'Something went wrong';
    yield put(onLoginSubmitError({ data: {}, message, status_code: 400 }));
  }
}

function* SignUp({ payload }) {
  try {
    const signupResponse = yield call(callSignUpApi, payload);
    if (signupResponse.status_code === 200) {
      yield put(onSignUpSubmitSuccess({ data: signupResponse, message: signupResponse.message }));
    } else {
      yield put(onSignUpSubmitError({ data: signupResponse.data, message: signupResponse.message, }));
    }
  } catch (error) {
    const message = error.response || 'Something went wrong';
    yield put(onSignUpSubmitError({ data: {}, message, status_code: 400 }));
  }
}

function* Update({ payload }) {
  try {
    const updateResponse = yield call(callUpdateApi, payload);
    if (updateResponse.status_code === 200) {
      yield put(onUpdateSubmitSuccess({ data: updateResponse, message: updateResponse.message }));
    } else {
      yield put(onUpdateSubmitError({ data: updateResponse.data, message: updateResponse.message, }));
    }
  } catch (error) {
    const message = error.response || 'Something went wrong';
    yield put(onUpdateSubmitError({ data: {}, message, status_code: 400 }));
  }
}


export default function* loginSaga() {
  yield takeLatest(onLoginSubmit.type, Login);
  yield takeLatest(onSignUpSubmit.type, SignUp);
  yield takeLatest(onUpdateSubmit.type, Update);
}