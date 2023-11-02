import { call, put, takeLatest } from "redux-saga/effects";
import { ClientCommissionApi } from "../../../services/UserAdmin/ClientCommissionApi";
import {
  onClientCommissionSubmit,
  onClientCommissionSubmitSuccess,
  onClientCommissionSubmitError,
} from "../../modules/UserAdmin/ClientCommissionSlice";

function* ClientCommission() {
  try {
    const ClientCommissionResponse = yield call(ClientCommissionApi);
    if (ClientCommissionResponse.status_code === 200) {
      yield put(
        onClientCommissionSubmitSuccess({
          data: ClientCommissionResponse,
          message: ClientCommissionResponse.message,
        })
      );
    } else {
      yield put(
        onClientCommissionSubmitError({
          data: ClientCommissionResponse.data,
          message: ClientCommissionResponse.message,
        })
      );
    }
  } catch (error) {
    const message = error.response || "Something went wrong";
    yield put(
      onClientCommissionSubmitError({ data: {}, message, status_code: 400 })
    );
  }
}

export default function* ClientCommissionSaga() {
  yield takeLatest(onClientCommissionSubmit.type, ClientCommission);
}
