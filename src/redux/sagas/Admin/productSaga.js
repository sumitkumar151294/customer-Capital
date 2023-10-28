import { call, put, takeLatest } from 'redux-saga/effects';
import { callProductApi} from '../../../services/Admin/productApi';
import {
  onProductSubmit,
    onProductSubmitError,
  onProductSubmitSuccess} from '../../modules/Admin/productSlice';

function* ProductApi() {
  try {
      const productResponse = yield call(callProductApi);
    if (productResponse.status_code === 200) {
          yield put(onProductSubmitSuccess({ data: productResponse, message: productResponse.message}));
    } else {
          yield put(onProductSubmitError({ data: productResponse.data, message: productResponse.message,  }));
    }
  } catch (error) {
      const message = error.response || 'Something went wrong';
    yield put(onProductSubmitError({ data: {}, message, status_code: 400 }));
  }
}

export default function* productSaga() {
  yield takeLatest(onProductSubmit.type, ProductApi);
}
