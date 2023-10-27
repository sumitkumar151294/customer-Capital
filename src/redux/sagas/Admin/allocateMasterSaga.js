import { call, put, takeLatest } from "redux-saga/effects";
import { callAllocateMasterApi } from "../../../services/Admin/allocateMasterApi";
import {
  onAllocateMasterSubmit,
  onAllocateMasterSubmitSuccess,
  onAllocateMasterSubmitError,
} from "../../modules/Admin/allocateMasterSlice";

function* allocateMaster({ payload }) {
  try {
    const allocateMasterResponse = yield call(callAllocateMasterApi, payload.modules);
    if (allocateMasterResponse.status_code === 200) {
      yield put(
        onAllocateMasterSubmitSuccess({
          data: allocateMasterResponse,
          message: allocateMasterResponse.message,
        })
      );
    } else {
      yield put(
        onAllocateMasterSubmitError({
          data: allocateMasterResponse.data,
          message: allocateMasterResponse.message,
        })
      );
    }
  } catch (error) {
    const message = error.response || "Something went wrong";
    yield put(onAllocateMasterSubmitError({ data: {}, message, status_code: 400 }));
  }
}

export default function* allocateMasterSaga() {
  yield takeLatest(onAllocateMasterSubmit.type, allocateMaster);
}
