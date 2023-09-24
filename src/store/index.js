import {createStore, combineReducers, applyMiddleware} from "redux";
import {curentUserReduser} from "./curentUserReduser";
import createSagaMiddleware from 'redux-saga'
import {rootWatcher} from "../saga";
import {carReduser} from "./carReduser";
import {truckReduser} from "./truckReduser";
import {motobikeReduser} from "./motobikeReduser";
import {apartmentReduser} from "./apartmentReduser";
import {cottageReduser} from "./cottageReduser";
import {garageReduser} from "./garageReduser";
import {audioReduser} from "./audioReduser";
import {headphonesReduser} from "./headphonesReduser";
import {vidoEquipmentReduser} from "./videoEquipmentReduser";

const sagaMiddleware = createSagaMiddleware()

// объединяем все редьюсеры в один
const rootReduser = combineReducers({
    user: curentUserReduser,
    cars: carReduser,
    trucks: truckReduser,
    motobikes: motobikeReduser,
    apartments: apartmentReduser,
    cottages: cottageReduser,
    garages: garageReduser,
    audio: audioReduser,
    headphones: headphonesReduser,
    videoEquipment: vidoEquipmentReduser,
})

export const store = createStore(rootReduser, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootWatcher)