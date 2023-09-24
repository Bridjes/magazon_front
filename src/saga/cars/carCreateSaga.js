import {put, takeEvery, call} from "redux-saga/effects"
import CarServices from "../../services/CarServices";
import {CREATE_CAR_FETCH, set_status_cars} from "../../store/carReduser";

function* carCreateSaga(action) {
    action.payload.setIsLoading(true)
    try {
        const response = yield call(CarServices.create_car, action.payload.data)
        action.payload.setIsLoading(false)
        yield put(set_status_cars(true))
    } catch (e) {
        action.payload.setIsLoading(false)
        yield put(set_status_cars(false))
    }
}

export function* carCreateWatch() {
  yield takeEvery(CREATE_CAR_FETCH, carCreateSaga);
}