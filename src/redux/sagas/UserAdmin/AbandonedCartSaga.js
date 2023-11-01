import { call, put, takeLatest } from 'redux-saga/effects';
import { AbandonedCartApi } from '../../../services/UserAdmin/AbandonedCartApi';
import {onAbandonedSubmit ,onAbandonedSubmitSuccess , onAbandonedSubmitError} from '../../modules/UserAdmin/AbandonedCartSlice'

function* Abandoned(){
    try {
        
        const AbandonedCart = yield call(AbandonedCartApi);
      if (AbandonedCart.status_code === 200) {
            yield put(onAbandonedSubmitSuccess({ data: AbandonedCart, message: AbandonedCart.message}));
      } else {
            yield put(onAbandonedSubmitError({ data: AbandonedCart.data, message: AbandonedCart.message,  }));
      }
    } catch (error) {
        const message = error.response || 'Something went wrong';
      yield put(onAbandonedSubmitError({ data: {}, message, status_code: 400 }));
    }
  }
  
  export default function* AbandonedSaga() {
    yield takeLatest(onAbandonedSubmit.type, Abandoned);
  }
