import {put, takeEvery, call} from "redux-saga/effects"
import AuthService from "../services/AuthServices";
import {login, register, REGISTER_FETCH} from "../store/curentUserReduser";

function* userRegisterSaga(action) {
    try {
        action.payload.setIsLoading(true)
        const response = yield call(AuthService.register,
            action.payload.username,
            action.payload.email,
            action.payload.password
        );
        action.payload.setIsLoading(false)

        localStorage.setItem('refresh', response.data.token.refresh);
        localStorage.setItem('access', response.data.token.access);
        localStorage.setItem('user', response.data.username);
        localStorage.setItem('id', response.data.id);

        const user = {username: response.data.username, id: response.data.id}
        const state = {user: user, isAuth: true}
        yield put(register(state));
    } catch (error) {
        console.log(error);
        const state = {user: {}, isAuth: false}
        yield put(register(state));
    }
}

export function* userRegisterWatch() {
  yield takeEvery(REGISTER_FETCH, userRegisterSaga);
}