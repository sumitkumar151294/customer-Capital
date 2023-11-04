import { call, put, takeLatest } from "redux-saga/effects";
import { bannerMasterApi } from "../../../services/UserAdmin/bannerMasterApi";
import {
  onBannerMasterSubmit,
  onBannerMasterSubmitSuccess,
  onBannerMasterSubmitError,
} from "../../modules/UserAdmin/BannerMasterSlice";

function* BannerMaster({ payload }) {
  try {
    const BannerMasterResponse = yield call(bannerMasterApi, payload);
    if (BannerMasterResponse.status_code === 200) {
      yield put(
        onBannerMasterSubmitSuccess({
          data: BannerMasterResponse,
          message: BannerMasterResponse.message,
        })
      );
    } else {
      yield put(
        onBannerMasterSubmitError({
          data: BannerMasterResponse.data,
          message: BannerMasterResponse.message,
        })
      );
    }
  } catch (error) {
    const message = error.response || "Something went wrong";
    yield put(
      onBannerMasterSubmitError({ data: {}, message, status_code: 400 })
    );
  }
}

export default function* BannerMasterSaga() {
  yield takeLatest(onBannerMasterSubmit.type, BannerMaster);
}
