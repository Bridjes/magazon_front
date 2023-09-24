import {put, takeEvery, call} from "redux-saga/effects"
import GarageServices from "../../services/GarageServices";
import {LOAD_GARAGE_FETCH, load_garages} from "../../store/garageReduser";

function* garageRetrieveSaga(action) {
    action.payload.setIsLoading(true)
    try {
        const response = yield call(GarageServices.load_garages)
        action.payload.setIsLoading(false)
        yield put(load_garages(response.data))
    } catch (e) {
        action.payload.setIsLoading(false)
        yield put(load_garages([]))
    }
}

export function* garageRetrieveWatch() {
  yield takeEvery(LOAD_GARAGE_FETCH, garageRetrieveSaga);
}