const defaultState = {
    headphones: [],
    status: false,
}

// типы actions
export const LOAD_HEADPHONES = 'LOAD_HEADPHONES'
export const SET_STATUS_HEADPHONES = 'SET_STATUS_HEADPHONES'

// типы actions saga
export const LOAD_HEADPHONES_FETCH = "LOAD_HEADPHONES_FETCH"
export const CREATE_HEADPHONES_FETCH = "CREATE_HEADPHONES_FETCH"

// записывалка в кеш-хранилище
export const headphonesReduser = (state=defaultState, action) => {
   switch (action.type) {
       case LOAD_HEADPHONES:
           return {...state, headphones: action.payload}
       case SET_STATUS_HEADPHONES:
           return {...state, status: action.payload}
       default:
           return state
   }
}

// Action-creators
export const load_headphones = payload => ({type: LOAD_HEADPHONES, payload})
export const set_status_headphones = payload => ({type: SET_STATUS_HEADPHONES, payload})

// Action-creators for saga
export const load_headphones_fetch = payload => ({type: LOAD_HEADPHONES_FETCH, payload})
export const create_headphones_fetch = payload => ({type: CREATE_HEADPHONES_FETCH, payload})
