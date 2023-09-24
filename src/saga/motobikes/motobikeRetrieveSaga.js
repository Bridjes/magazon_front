import {put, takeEvery, call} from "redux-saga/effects"
import {load_motobikes, LOAD_MOTOBIKES_FETCH} from "../../store/motobikeReduser"
import MotorbikeServices from "../../services/MotobikeServices"

function* motobikeRetrieveSaga(action) {
    action.payload.setIsLoading(true)
    try {
        const response = yield call(MotorbikeServices.load_motorbikes)
        action.payload.setIsLoading(false)
        yield put(load_motobikes(response.data))
    } catch (e) {
        action.payload.setIsLoading(false)
        yield put(load_motobikes([]))
    }
}

export function* motobikeRetrieveWatch() {
  yield takeEvery(LOAD_MOTOBIKES_FETCH, motobikeRetrieveSaga);
}