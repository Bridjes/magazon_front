import {put, takeEvery, call} from "redux-saga/effects"
import AuthService from "../../services/AuthServices";
import {CHECK_AUTH_FETCH, checkAuth} from "../../store/curentUserReduser";

function* userCheckAuthSaga(action) {
    try {
        action.payload.setIsLoading(true)
        const access = localStorage.getItem('access');
        yield call(AuthService.verify, access);
        action.payload.setIsLoading(false)

        const state = {user: {username: localStorage.getItem('username')}, isAuth: true}
        yield put(checkAuth(state))
    }
    catch (e) {
        if (e.response.status === 401) {
            const refresh = localStorage.getItem('refresh')
            try {
                const response = yield call(AuthService.refresh, refresh);
                action.payload.setIsLoading(false)
                localStorage.setItem('refresh', response.data.refresh);
                localStorage.setItem('access', response.data.access);
                const state = {user: {username: localStorage.getItem("username")}, isAuth: true}
                yield put(checkAuth(state))
            } catch {
                action.payload.setIsLoading(false)
                yield put(checkAuth({user: {}, isAuth: false}))
            }
        } else {
            action.payload.setIsLoading(false)
            const state = {user: {}, isAuth: false}
            yield put(checkAuth(state))
        }
    }
}

export function* userCheckAuthWatch() {
  yield takeEvery(CHECK_AUTH_FETCH, userCheckAuthSaga);
}