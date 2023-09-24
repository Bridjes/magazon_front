const defaultState = {
    motobikes: [],
    status: false,
}

// типы actions
export const LOAD_MOTOBIKES = 'LOAD_MOTOBIKES'
export const SET_STATUS_MOTOBIKES = 'SET_STATUS_MOTOBIKES'

// типы actions saga
export const LOAD_MOTOBIKES_FETCH = "LOAD_MOTOBIKES_FETCH"
export const CREATE_MOTOBIKES_FETCH = "CREATE_MOTOBIKES_FETCH"

// записывалка в кеш-хранилище
export const motobikeReduser = (state=defaultState, action) => {
   switch (action.type) {
       case LOAD_MOTOBIKES:
           return {...state, motobikes: action.payload}
       case SET_STATUS_MOTOBIKES:
           return {...state, status: action.payload}
       default:
           return state
   }
}

// Action-creators
export const load_motobikes = payload => ({type: LOAD_MOTOBIKES, payload})
export const set_status_motobikes = payload => ({type: SET_STATUS_MOTOBIKES, payload})

// Action-creators for saga
export const load_motobike_fetch = payload => ({type: LOAD_MOTOBIKES_FETCH, payload})
export const create_motobike_fetch = payload => ({type: CREATE_MOTOBIKES_FETCH, payload})
