const defaultState = {
    user: {},
    isAuth: false
}

// типы actions
export const LOGIN = 'LOGIN'
export const REGISTRATION = 'REGISTRATION'
export const LOGOUT = 'LOGOUT'
export const CHECK_AUTH = 'CHECK_AUTH'

// типы actions saga
export const LOGIN_FETCH = "LOGIN_FETCH"
export const REGISTER_FETCH = "REGISTER_FETCH"
export const LOGOUT_FETCH = "LOGOUT_FETCH"
export const CHECK_AUTH_FETCH = "CHECK_AUTH_FETCH"

// записывалка в кеш-хранилище
export const curentUserReduser = (state=defaultState, action) => {
   switch (action.type) {
       case LOGIN:
           return action.payload
       case REGISTRATION:
           return action.payload
       case LOGOUT:
           return action.payload
       case CHECK_AUTH:
           return action.payload
       default:
           return state
   }
}

// Action-creators
export const login = payload => ({type: LOGIN, payload})
export const register = payload => ({type: REGISTRATION, payload})
export const logout = payload => ({type: LOGOUT, payload})
export const checkAuth = payload => ({type: CHECK_AUTH, payload})

// Action-creators for saga
export const login_fetch = payload => ({type: LOGIN_FETCH, payload})
export const register_fetch = payload => ({type: REGISTER_FETCH, payload})
export const logout_fetch = payload => ({type: LOGOUT_FETCH, payload})
export const check_auth_fetch = payload => ({type: CHECK_AUTH_FETCH, payload})
