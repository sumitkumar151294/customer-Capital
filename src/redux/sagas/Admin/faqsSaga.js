import { call, put, takeLatest } from 'redux-saga/effects';
import { callFaqsApi} from '../../../services/Admin/faqsApi';
import {
  onFaqsSubmit,
  onFaqsSubmitError,
  onFaqsSubmitSuccess,
} from '../../modules/Admin/faqsSlice';

function* Faqs({payload}) {
  try {
      const faqsResponse = yield call(callFaqsApi, payload);
    if (faqsResponse.status_code === 200) {
          yield put(onFaqsSubmitSuccess({ data: faqsResponse, message: faqsResponse.message}));
    } else {
          yield put(onFaqsSubmitError({ data: faqsResponse.data, message: faqsResponse.message,  }));
    }
  } catch (error) {
      const message = error.response || 'Something went wrong';
    yield put(onFaqsSubmitError({ data: {}, message, status_code: 400 }));
  }
}

export default function* faqsSaga() {
  yield takeLatest(onFaqsSubmit.type, Faqs);
}
