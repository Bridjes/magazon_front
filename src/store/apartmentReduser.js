const defaultState = {
    apartments: [],
    status: false,
}

// типы actions
export const LOAD_APARTMENTS = 'LOAD_APARTMENTS'
export const SET_STATUS_APARTMENTS = 'SET_STATUS_APARTMENTS'

// типы actions saga
export const LOAD_APARTMENT_FETCH = "LOAD_APARTMENT_FETCH"
export const CREATE_APARTMENT_FETCH = "CREATE_APARTMENT_FETCH"

// записывалка в кеш-хранилище
export const apartmentReduser = (state=defaultState, action) => {
   switch (action.type) {
       case LOAD_APARTMENTS:
           return {...state, apartments: action.payload}
       case SET_STATUS_APARTMENTS:
           return {...state, status: action.payload}
       default:
           return state
   }
}

// Action-creators
export const load_apartments = payload => ({type: LOAD_APARTMENTS, payload})
export const set_status_apartments = payload => ({type: SET_STATUS_APARTMENTS, payload})

// Action-creators for saga
export const load_apartment_fetch = payload => ({type: LOAD_APARTMENT_FETCH, payload})
export const create_apartment_fetch = payload => ({type: CREATE_APARTMENT_FETCH, payload})
