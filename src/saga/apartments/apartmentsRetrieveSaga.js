import {put, takeEvery, call} from "redux-saga/effects"
import {LOAD_APARTMENT_FETCH, load_apartments} from "../../store/apartmentReduser";
import ApartmentServices from "../../services/ApartmentServices";

function* apartmentRetrieveSaga(action) {
    action.payload.setIsLoading(true)
    try {
        const response = yield call(ApartmentServices.load_apartments)
        action.payload.setIsLoading(false)
        yield put(load_apartments(response.data))
    } catch (e) {
        action.payload.setIsLoading(false)
        yield put(load_apartments([]))
    }
}

export function* apartmentRetrieveWatch() {
  yield takeEvery(LOAD_APARTMENT_FETCH, apartmentRetrieveSaga);
}