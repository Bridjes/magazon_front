import {put, takeEvery, call} from "redux-saga/effects"
import AuthService from "../../services/AuthServices";
import {logout, LOGOUT_FETCH} from "../../store/curentUserReduser";

function* userLogoutSaga(action) {
    try {
        action.payload.setIsLoading(true)
        const refresh = localStorage.getItem('refresh');
        const response = yield call(AuthService.logout, refresh);
        action.payload.setIsLoading(false)

        localStorage.removeItem('access');
        localStorage.removeItem('refresh');

        const state = {user: {}, isAuth: false}
        yield put(logout(state));
    } catch (error) {
        console.log(error);
        action.payload.setIsLoading(false)
        const state = {user: {}, isAuth: false}
    }
}

export function* userLogoutWatch() {
  yield takeEvery(LOGOUT_FETCH, userLogoutSaga);
}