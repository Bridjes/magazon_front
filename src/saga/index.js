import {all} from "redux-saga/effects"
import {userLoginWatch} from "./userLoginSaga";
import {userRegisterWatch} from "./userRegisterSaga";
import {userLogoutWatch} from "./userLogoutSaga";
import {userCheckAuthWatch} from "./userCheckAuthSaga";
import {carRetrieveWatch} from "./carRetrieveSaga";
import {carCreateWatch} from "./carCreateSaga";

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