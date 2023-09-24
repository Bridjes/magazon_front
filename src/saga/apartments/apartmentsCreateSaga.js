import {put, takeEvery, call} from "redux-saga/effects"
import ApartmentServices from "../../services/ApartmentServices";
import {CREATE_APARTMENT_FETCH, set_status_apartments} from "../../store/apartmentReduser";

function* apartmentCreateSaga(action) {
    action.payload.setIsLoading(true)
    try {
        const response = yield call(ApartmentServices.create_apartments, action.payload.data)
        action.payload.setIsLoading(false)
        yield put(set_status_apartments(true))
    } catch (e) {
        action.payload.setIsLoading(false)
        yield put(set_status_apartments(false))
    }
}

export function* apartmentCreateWatch() {
  yield takeEvery(CREATE_APARTMENT_FETCH, apartmentCreateSaga);
}