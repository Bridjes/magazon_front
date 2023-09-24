import {put, takeEvery, call} from "redux-saga/effects"
import CottageServices from "../../services/CottageServices";
import {LOAD_COTTAGE_FETCH, load_cottages} from "../../store/cottageReduser";

function* cottageRetrieveSaga(action) {
    action.payload.setIsLoading(true)
    try {
        const response = yield call(CottageServices.load_cottages)
        action.payload.setIsLoading(false)
        yield put(load_cottages(response.data))
    } catch (e) {
        action.payload.setIsLoading(false)
        yield put(load_cottages([]))
    }
}

export function* cottageRetrieveWatch() {
  yield takeEvery(LOAD_COTTAGE_FETCH, cottageRetrieveSaga);
}