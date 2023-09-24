import {put, takeEvery, call} from "redux-saga/effects"
import {LOAD_HEADPHONES_FETCH, load_headphones} from "../../store/headphonesReduser";
import HeadphonesServices from "../../services/HeadphonesServices";

function* headphonesRetrieveSaga(action) {
    action.payload.setIsLoading(true)
    try {
        const response = yield call(HeadphonesServices.load_headphones)
        action.payload.setIsLoading(false)
        yield put(load_headphones(response.data))
    } catch (e) {
        action.payload.setIsLoading(false)
        yield put(load_headphones([]))
    }
}

export function* headphonesRetrieveWatch() {
  yield takeEvery(LOAD_HEADPHONES_FETCH, headphonesRetrieveSaga);
}