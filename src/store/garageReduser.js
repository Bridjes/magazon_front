const defaultState = {
    garages: [],
    status: false,
}

// типы actions
export const LOAD_GARAGES = 'LOAD_GARAGES'
export const SET_STATUS_GARAGES = 'SET_STATUS_GARAGES'

// типы actions saga
export const LOAD_GARAGE_FETCH = "LOAD_GARAGE_FETCH"
export const CREATE_GARAGE_FETCH = "CREATE_GARAGE_FETCH"

// записывалка в кеш-хранилище
export const garageReduser = (state=defaultState, action) => {
   switch (action.type) {
       case LOAD_GARAGES:
           return {...state, garages: action.payload}
       case SET_STATUS_GARAGES:
           return {...state, status: action.payload}
       default:
           return state
   }
}

// Action-creators
export const load_garages = payload => ({type: LOAD_GARAGES, payload})
export const set_status_garages = payload => ({type: SET_STATUS_GARAGES, payload})

// Action-creators for saga
export const load_garage_fetch = payload => ({type: LOAD_GARAGE_FETCH, payload})
export const create_garage_fetch = payload => ({type: CREATE_GARAGE_FETCH, payload})
