import {put, takeEvery, call} from "redux-saga/effects"
import {CREATE_COTTAGE_FETCH, set_status_cottages} from "../../store/cottageReduser";
import CottageServices from "../../services/CottageServices";

function* cottageCreateSaga(action) {
    action.payload.setIsLoading(true)
    try {
        const response = yield call(CottageServices.create_cottages, action.payload.data)
        action.payload.setIsLoading(false)
        yield put(set_status_cottages(true))
    } catch (e) {
        action.payload.setIsLoading(false)
        yield put(set_status_cottages(false))
    }
}

export function* cottageCreateWatch() {
  yield takeEvery(CREATE_COTTAGE_FETCH, cottageCreateSaga);
}