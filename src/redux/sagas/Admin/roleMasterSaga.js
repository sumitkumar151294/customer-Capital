import { call, put, takeLatest } from "redux-saga/effects";
import { callRoleMasterApi } from "../../../services/Admin/roleMasterApi";
import {
  onRoleMasterSubmit,
  onRoleMasterSubmitSuccess,
  onRoleMasterSubmitError,
} from "../../modules/Admin/roleMasterSlice";

function* roleMaster({ payload }) {
  try {
    const roleMasterResponse = yield call(callRoleMasterApi, payload.modules);
    if (roleMasterResponse.status_code === 200) {
      yield put(
        onRoleMasterSubmitSuccess({
          data: roleMasterResponse,
          message: roleMasterResponse.message,
        })
      );
    } else {
      yield put(
        onRoleMasterSubmitError({
          data: roleMasterResponse.data,
          message: roleMasterResponse.message,
        })
      );
    }
  } catch (error) {
    const message = error.response || "Something went wrong";
    yield put(onRoleMasterSubmitError({ data: {}, message, status_code: 400 }));
  }
}

export default function* roleMasterSaga() {
  yield takeLatest(onRoleMasterSubmit.type, roleMaster);
}
