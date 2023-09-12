import {createStore, combineReducers} from "redux";
import {questionReduser} from "./questionReduser";

// объединяем все редьюсеры в один
const rootReduser = combineReducers({
    question: questionReduser,
})


export const store = createStore(rootReduser)