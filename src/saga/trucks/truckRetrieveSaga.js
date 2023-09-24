import {put, takeEvery, call} from "redux-saga/effects"
import {LOAD_TRUCK_FETCH, load_trucks} from "../../store/truckReduser";
import TruckServices from "../../services/TruckService";

function* truckRetrieveSaga(action) {
    action.payload.setIsLoading(true)
    try {
        const response = yield call(TruckServices.load_trucks)
        action.payload.setIsLoading(false)
        yield put(load_trucks(response.data))
    } catch (e) {
        action.payload.setIsLoading(false)
        yield put(load_trucks([]))
    }
}

export function* truckRetrieveWatch() {
  yield takeEvery(LOAD_TRUCK_FETCH, truckRetrieveSaga);
}