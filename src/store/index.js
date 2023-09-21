import {createStore, combineReducers, applyMiddleware} from "redux";
import {curentUserReduser} from "./curentUserReduser";
import createSagaMiddleware from 'redux-saga'
import {rootWatcher} from "../saga";
import {carReduser} from "./carReduser";

const sagaMiddleware = createSagaMiddleware()

// объединяем все редьюсеры в один
const rootReduser = combineReducers({
    user: curentUserReduser,
    cars: carReduser,
})


export const store = createStore(rootReduser, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootWatcher)