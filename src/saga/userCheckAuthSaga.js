import {put, takeEvery, call} from "redux-saga/effects"
import AuthService from "../services/AuthServices";
import {CHECK_AUTH_FETCH, checkAuth, login, LOGIN_FETCH} from "../store/curentUserReduser";

function* userCheckAuthSaga(action) {
    action.payload.setIsLoading(true)
    const access = localStorage.getItem('access');
    try {
        const response = yield call(AuthService.verify, access);
        console.log(response.status)
        // access невалиден
        if (response.status === 401) {
            const refresh = localStorage.getItem('refresh')
            const response2 = yield call(AuthService.refresh, refresh);
            action.payload.setIsLoading(false)
            // на случае, если рефреша вообще нет всписках
            if (response2.status === 401) {
                yield put(checkAuth({user: {}, isAuth: false}))
            // refresh валиден и пришла новая пара
            } else {
                localStorage.setItem('refresh', response2.data.token.refresh);
                localStorage.setItem('access', response2.data.token.access);
                const state = {user: {username: localStorage.getItem("username")}, isAuth: true}
                yield put(checkAuth(state))
            }
        // access валиден
        } else {
            const state = {user: {username: localStorage.getItem('user')}, isAuth: true}
            action.payload.setIsLoading(false)
            yield put(checkAuth(state))
        }
    }
    catch (e) {
        console.log(e)
        action.payload.setIsLoading(false)
        yield put(checkAuth({user: {}, isAuth: false}))
    }
}

export function* userCheckAuthWatch() {
  yield takeEvery(CHECK_AUTH_FETCH, userCheckAuthSaga);
}