import {all} from "redux-saga/effects"
import {userLoginWatch} from "./users/userLoginSaga";
import {userRegisterWatch} from "./users/userRegisterSaga";
import {userLogoutWatch} from "./users/userLogoutSaga";
import {userCheckAuthWatch} from "./users/userCheckAuthSaga";
import {carRetrieveWatch} from "./cars/carRetrieveSaga";
import {carCreateWatch} from "./cars/carCreateSaga";
import {truckCreateWatch} from "./trucks/truckCreateSaga";
import {truckRetrieveWatch} from "./trucks/truckRetrieveSaga";
import {motobikeRetrieveWatch} from "./motobikes/motobikeRetrieveSaga";
import {motobikeCreateWatch} from "./motobikes/motobikeCreateSaga";
import {apartmentRetrieveWatch} from "./apartments/apartmentsRetrieveSaga";
import {apartmentCreateWatch} from "./apartments/apartmentsCreateSaga";
import {cottageRetrieveWatch} from "./cottages/cottageRetrieveSaga";
import {cottageCreateWatch} from "./cottages/cottageCreateSaga";
import {garageRetrieveWatch} from "./garages/garageRetrieveSaga";
import {garageCreateWatch} from "./garages/garageCreateSaga";
import {audioRetrieveWatch} from "./audio/audioRetrieveSaga";
import {headphonesRetrieveWatch} from "./headphones/headphonesRetrieveSaga";
import {headphonesCreateWatch} from "./headphones/headphonesCreateSaga";
import {videoeEuipmentRetrieveWatch} from "./video_equipments/videoEquipmentRetrieveSaga";
import {videoeEuipmentCreateWatch} from "./video_equipments/videoEquipmentCreateSaga";
import {audioCreateWatch} from "./audio/auidoCreateSaga";

export function* rootWatcher() {
    yield all([
        userLoginWatch(),
        userRegisterWatch(),
        userLogoutWatch(),
        userCheckAuthWatch(),

        carRetrieveWatch(),
        carCreateWatch(),

        truckRetrieveWatch(),
        truckCreateWatch(),

        motobikeRetrieveWatch(),
        motobikeCreateWatch(),

        apartmentRetrieveWatch(),
        apartmentCreateWatch(),

        cottageRetrieveWatch(),
        cottageCreateWatch(),

        garageRetrieveWatch(),
        garageCreateWatch(),

        audioRetrieveWatch(),
        audioCreateWatch(),

        headphonesRetrieveWatch(),
        headphonesCreateWatch(),

        videoeEuipmentRetrieveWatch(),
        videoeEuipmentCreateWatch(),
    ])
}