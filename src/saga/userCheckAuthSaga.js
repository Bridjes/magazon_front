import {put, takeEvery, call} from "redux-saga/effects"
import AuthService from "../services/AuthServices";
import {CHECK_AUTH_FETCH, checkAuth, login, LOGIN_FETCH} from "../store/curentUserReduser";

function* userCheckAuthSaga(action) {
    try {
        action.payload.setIsLoading(true)
        const access = localStorage.getItem('access');
        const response = yield call(AuthService.verify, access);

        if (response.status === 401) {
            const refresh = localStorage.getItem('refresh')
            const response2 = yield call(AuthService.refresh, refresh);
            action.payload.setIsLoading(false)
            localStorage.setItem('refresh', response2.data.token.refresh);
            localStorage.setItem('access', response2.data.token.access);
            const state = {user: {username: localStorage.getItem("username")}, isAuth: true}
            yield put(checkAuth(state))
        } else {
            const state = {user: {username: localStorage.getItem('user')}, isAuth: true}
            action.payload.setIsLoading(false)
            yield put(checkAuth(state))
        }
    } catch (error) {
        console.log(error);
        const state = {user: {}, isAuth: false}
    }
}

export function* userCheckAuthWatch() {
  yield takeEvery(CHECK_AUTH_FETCH, userCheckAuthSaga);
}