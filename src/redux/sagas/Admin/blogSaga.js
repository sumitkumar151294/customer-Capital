import { call, put, takeLatest } from 'redux-saga/effects';
import { callBlogApi} from '../../../services/Admin/blogApi';
import {
  onBlogSubmit,
  onBlogSubmitError,
  onBlogSubmitSuccess,
} from '../../modules/Admin/blogSlice';

function* Blog({payload}) {
  try {
      const blogResponse = yield call(callBlogApi, payload);
    if (blogResponse.status_code === 200) {
          yield put(onBlogSubmitSuccess({ data: blogResponse, message: blogResponse.message}));
    } else {
          yield put(onBlogSubmitError({ data: blogResponse.data, message: blogResponse.message,  }));
    }
  } catch (error) {
      const message = error.response || 'Something went wrong';
    yield put(onBlogSubmitError({ data: {}, message, status_code: 400 }));
  }
}

export default function* blogSaga() {
  yield takeLatest(onBlogSubmit.type, Blog);
}
