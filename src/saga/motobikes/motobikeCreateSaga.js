import {put, takeEvery, call} from "redux-saga/effects"
import MotorbikeServices from "../../services/MotobikeServices";
import {CREATE_MOTOBIKES_FETCH, set_status_motobikes} from "../../store/motobikeReduser";

function* motobikeCreateSaga(action) {
    action.payload.setIsLoading(true)
    try {
        const response = yield call(MotorbikeServices.create_motorbikes, action.payload.data)
        action.payload.setIsLoading(false)
        yield put(set_status_motobikes(true))
    } catch (e) {
        action.payload.setIsLoading(false)
        yield put(set_status_motobikes(false))
    }
}

export function* motobikeCreateWatch() {
  yield takeEvery(CREATE_MOTOBIKES_FETCH, motobikeCreateSaga);
}