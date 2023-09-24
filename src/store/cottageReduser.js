const defaultState = {
    cottages: [],
    status: false,
}

// типы actions
export const LOAD_COTTAGES = 'LOAD_COTTAGES'
export const SET_STATUS_COTTAGES = 'SET_STATUS_COTTAGES'

// типы actions saga
export const LOAD_COTTAGE_FETCH = "LOAD_COTTAGE_FETCH"
export const CREATE_COTTAGE_FETCH = "CREATE_COTTAGE_FETCH"

// записывалка в кеш-хранилище
export const cottageReduser = (state=defaultState, action) => {
   switch (action.type) {
       case LOAD_COTTAGES:
           return {...state, cottages: action.payload}
       case SET_STATUS_COTTAGES:
           return {...state, status: action.payload}
       default:
           return state
   }
}

// Action-creators
export const load_cottages = payload => ({type: LOAD_COTTAGES, payload})
export const set_status_cottages = payload => ({type: SET_STATUS_COTTAGES, payload})

// Action-creators for saga
export const load_cottage_fetch = payload => ({type: LOAD_COTTAGE_FETCH, payload})
export const create_cottage_fetch = payload => ({type: CREATE_COTTAGE_FETCH, payload})
