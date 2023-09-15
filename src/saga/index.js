import {all} from "redux-saga/effects"
import {userLoginWatch} from "./userLoginSaga";
import {userRegisterWatch} from "./userRegisterSaga";

export function* rootWatcher() {
    yield all([
        userLoginWatch(),
        userRegisterWatch(),
    ])
}