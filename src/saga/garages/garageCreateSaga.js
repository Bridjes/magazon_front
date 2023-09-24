import {put, takeEvery, call} from "redux-saga/effects"
import {CREATE_GARAGE_FETCH, set_status_garages} from "../../store/garageReduser";
import GarageServices from "../../services/GarageServices";

function* garageCreateSaga(action) {
    action.payload.setIsLoading(true)
    try {
        const response = yield call(GarageServices.create_garages, action.payload.data)
        action.payload.setIsLoading(false)
        yield put(set_status_garages(true))
    } catch (e) {
        action.payload.setIsLoading(false)
        yield put(set_status_garages(false))
    }
}

export function* garageCreateWatch() {
  yield takeEvery(CREATE_GARAGE_FETCH, garageCreateSaga);
}