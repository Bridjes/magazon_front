const defaultState = {
    trucks: [],
    status: false,
}

// типы actions
export const LOAD_TRUCKS = 'LOAD_TRUCKS'
export const SET_STATUS_TRUCKS = 'SET_STATUS_TRUCKS'

// типы actions saga
export const LOAD_TRUCK_FETCH = "LOAD_TRUCK_FETCH"
export const CREATE_TRUCK_FETCH = "CREATE_TRUCK_FETCH"

// записывалка в кеш-хранилище
export const truckReduser = (state=defaultState, action) => {
   switch (action.type) {
       case LOAD_TRUCKS:
           return {...state, trucks: action.payload}
       case SET_STATUS_TRUCKS:
           return {...state, status: action.payload}
       default:
           return state
   }
}

// Action-creators
export const load_trucks = payload => ({type: LOAD_TRUCKS, payload})
export const set_status_trucks = payload => ({type: SET_STATUS_TRUCKS, payload})

// Action-creators for saga
export const load_truck_fetch = payload => ({type: LOAD_TRUCK_FETCH, payload})
export const create_trucks_fetch = payload => ({type: CREATE_TRUCK_FETCH, payload})
