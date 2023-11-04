import { call, put, takeLatest } from "redux-saga/effects";
import { offerMasterApi } from "../../../services/UserAdmin/offerMasterApi";
import {
  onofferMasterSubmit,
  onofferMasterSubmitSuccess,
  onofferMasterSubmitError,
} from "../../modules/UserAdmin/offerMasterSlice";

function* offerMaster({ payload }) {
  try {
    const offerMasterResponse = yield call(offerMasterApi, payload);
    if (offerMasterResponse.status_code === 200) {
      yield put(
        onofferMasterSubmitSuccess({
          data: offerMasterResponse,
          message: offerMasterResponse.message,
        })
      );
    } else {
      yield put(
        onofferMasterSubmitError({
          data: offerMasterResponse.data,
          message: offerMasterResponse.message,
        })
      );
    }
  } catch (error) {
    const message = error.response || "Something went wrong";
    yield put(
      onofferMasterSubmitError({ data: {}, message, status_code: 400 })
    );
  }
}

export default function* offerMasterSaga() {
  yield takeLatest(onofferMasterSubmit.type, offerMaster);
}
