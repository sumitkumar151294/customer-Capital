import { call, put, takeLatest } from 'redux-saga/effects';
import { callUserApi} from '../../../services/Admin/userApi';

import {onUserSubmit,onUserSubmitError,onUserSubmitSuccess} from '../../modules/Admin/userSlice';

function* User({payload}) {
  try {
      const userResponse = yield call(callUserApi, payload);
    if (userResponse.status_code === 200) {
          yield put(onUserSubmitSuccess({ data: userResponse, message: userResponse.message}));
    } else {
          yield put(onUserSubmitError({ data: userResponse.data, message: userResponse.message,  }));
    }
  } catch (error) {
      const message = error.response || 'Something went wrong';
    yield put(onUserSubmitError({ data: {}, message, status_code: 400 }));
  }
}

export default function* userSaga() {
  yield takeLatest(onUserSubmit.type, User);
}
