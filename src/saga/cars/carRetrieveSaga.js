import {put, takeEvery, call} from "redux-saga/effects"
import CarServices from "../../services/CarServices";
import {load_cars, LOAD_CAR_FETCH} from "../../store/carReduser";

function* carRetrieveSaga(action) {
    action.payload.setIsLoading(true)
    try {
        const response = yield call(CarServices.load_cars)
        action.payload.setIsLoading(false)
        yield put(load_cars(response.data))
    } catch (e) {
        action.payload.setIsLoading(false)
        yield put(load_cars([]))
    }
}

export function* carRetrieveWatch() {
  yield takeEvery(LOAD_CAR_FETCH, carRetrieveSaga);
}