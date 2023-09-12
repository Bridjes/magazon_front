const defaultSate = {
    questions: {} ,      // словарь со списками вопросов, разбитых по категориям
    curentQuestion: {}         // словарь с инфой по конкретному вопросу
}

// типы actions
const LOAD_QUESTIONS = 'LOAD_QUESTIONS'
const RESET_QUESTIONS = 'RESET_QUESTIONS'
const SAVE_CURENT_QUESTION = 'SAVE_CURENT_QUESTION'

// записывалка в кеш-хранилище
export const questionReduser = (state=defaultSate, action) => {
   switch (action.type) {
       // получаем индексы случайных 5 категорий
       case LOAD_QUESTIONS:
           return {...state, questions: action.payload}
       case RESET_QUESTIONS:
           return {...state, questions: {}}
       case SAVE_CURENT_QUESTION:
           return {...state, curentQuestion: action.payload}
       default:
           return state
   }
}

// Action-creators
export const loadQuestions = (payload) => ({type: LOAD_QUESTIONS, payload})
export const resetQuestions = (payload) => ({type: RESET_QUESTIONS})
export const saveCurentQuestion = (payload) => ({type: SAVE_CURENT_QUESTION, payload})