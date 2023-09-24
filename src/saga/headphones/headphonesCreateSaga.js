import {put, takeEvery, call} from "redux-saga/effects"
import {CREATE_HEADPHONES_FETCH, set_status_headphones} from "../../store/headphonesReduser";
import HeadphonesServices from "../../services/HeadphonesServices";

function* headphonesCreateSaga(action) {
    action.payload.setIsLoading(true)
    try {
        const response = yield call(HeadphonesServices.create_headphones, action.payload.data)
        action.payload.setIsLoading(false)
        yield put(set_status_headphones(true))
    } catch (e) {
        action.payload.setIsLoading(false)
        yield put(set_status_headphones(false))
    }
}

export function* headphonesCreateWatch() {
  yield takeEvery(CREATE_HEADPHONES_FETCH, headphonesCreateSaga);
}