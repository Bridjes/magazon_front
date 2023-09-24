import {put, takeEvery, call} from "redux-saga/effects"
import TruckServices from "../../services/TruckService";
import {CREATE_TRUCK_FETCH, set_status_trucks} from "../../store/truckReduser";

function* truckCreateSaga(action) {
    action.payload.setIsLoading(true)
    try {
        const response = yield call(TruckServices.create_trucks, action.payload.data)
        action.payload.setIsLoading(false)
        yield put(set_status_trucks(true))
    } catch (e) {
        action.payload.setIsLoading(false)
        yield put(set_status_trucks(false))
    }
}

export function* truckCreateWatch() {
  yield takeEvery(CREATE_TRUCK_FETCH, truckCreateSaga);
}