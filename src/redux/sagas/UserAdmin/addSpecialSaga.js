import { call, put, takeLatest } from 'redux-saga/effects';
import {callAddSpecialApi } from '../../../services/UserAdmin/addSpecialApi';
import { onAddSpecialSubmit, onAddSpecialSubmitError, onAddSpecialSubmitSuccess } from '../../modules/UserAdmin/addSpecialSlice';


function* AddSpecial({payload}) {
  try {
      const addSpecialResponse = yield call(callAddSpecialApi, payload);
    if (addSpecialResponse.status_code === 200) {
          yield put(onAddSpecialSubmitSuccess({ data: addSpecialResponse, message: addSpecialResponse.message}));
    } else {
          yield put(onAddSpecialSubmitError({ data: addSpecialResponse.data, message: addSpecialResponse.message,  }));
    }
  } catch (error) {
      const message = error.response || 'Something went wrong';
    yield put(onAddSpecialSubmitError({ data: {}, message, status_code: 400 }));
  }
}

export default function* addSpecialSaga() {
  yield takeLatest(onAddSpecialSubmit.type, AddSpecial);
}
