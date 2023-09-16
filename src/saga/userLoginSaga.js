import {put, takeEvery, call} from "redux-saga/effects"
import AuthService from "../services/AuthServices";
import {login, LOGIN_FETCH} from "../store/curentUserReduser";

function* userLoginSaga(action) {
    try {
        action.payload.setIsLoading(true)
        const response = yield call(AuthService.login, action.payload.username, action.payload.password);
        action.payload.setIsLoading(false)

        localStorage.setItem('refresh', response.data.refresh);
        localStorage.setItem('access', response.data.access);
        localStorage.setItem('user', action.payload.username);

        const user = { username: action.payload.username };
        const state = {user: user, isAuth: true}
        yield put(login(state));
    } catch (error) {
        console.log(error);
        const state = {user: {}, isAuth: false}
    }
}

export function* userLoginWatch() {
  yield takeEvery(LOGIN_FETCH, userLoginSaga);
}