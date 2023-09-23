import {all} from "redux-saga/effects"
import {userLoginWatch} from "./users/userLoginSaga";
import {userRegisterWatch} from "./users/userRegisterSaga";
import {userLogoutWatch} from "./users/userLogoutSaga";
import {userCheckAuthWatch} from "./users/userCheckAuthSaga";
import {carRetrieveWatch} from "./cars/carRetrieveSaga";
import {carCreateWatch} from "./cars/carCreateSaga";

export function* rootWatcher() {
    yield all([
        userLoginWatch(),
        userRegisterWatch(),
        userLogoutWatch(),
        userCheckAuthWatch(),

        carRetrieveWatch(),
        carCreateWatch(),
    ])
}