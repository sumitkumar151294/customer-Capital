import { call, put, takeLatest } from 'redux-saga/effects';
import {onCategorySubmit,onCategorySubmitError,onCategorySubmitSuccess} from '../../modules/Admin/categorySlice';
import { callCategoryApi} from '../../../services/Admin/categoryApi';

function* Category({payload}){
    try {
        const categoryResponse = yield call(callCategoryApi, payload);
      if (categoryResponse.status_code === 200) {
            yield put(onCategorySubmitSuccess({ data: categoryResponse, message: categoryResponse.message}));
      } else {
            yield put(onCategorySubmitError({ data: categoryResponse.data, message: categoryResponse.message,  }));
      }
    } catch (error) {
        const message = error.response || 'Something went wrong';
      yield put(onCategorySubmitError({ data: {}, message, status_code: 400 }));
    }
  }


  export default function* categorySaga() {
    yield takeLatest(onCategorySubmit.type, Category);
  }