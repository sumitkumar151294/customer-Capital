import { call, put, takeLatest } from 'redux-saga/effects';
import { callUserApi } from '../../../services/User/couponApi';
import {onCouponSubmit ,onCouponSubmitSuccess , onCouponSubmitError} from '../../modules/User/couponSlice';

function* Coupon({payload}){
    try {
        debugger
        const couponResponse = yield call(callUserApi, payload);
      if (couponResponse.status_code === 200) {
            yield put(onCouponSubmitSuccess({ data: couponResponse, message: couponResponse.message}));
      } else {
            yield put(onCouponSubmitError({ data: couponResponse.data, message: couponResponse.message,  }));
      }
    } catch (error) {
        const message = error.response || 'Something went wrong';
      yield put(onCouponSubmitError({ data: {}, message, status_code: 400 }));
    }
  }
  
  export default function* couponSaga() {
    yield takeLatest(onCouponSubmit.type, Coupon);
  }
