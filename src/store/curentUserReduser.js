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
           // const response3 = await AuthService.logout();
           // console.log(response3)
           localStorage.removeItem('access');
           localStorage.removeItem('refresh');
           return {...state, user: {}, isAuth: false}
       case CHECK_AUTH:
           // const access = localStorage.getItem('access')
           // const response4 = await AuthService.verify(access);
           //
           // // если токен невалиден
           // if (response4.status === 401) {
           //     const refresh = localStorage.getItem('refresh')
           //     const response5 = await AuthService.refresh(refresh);
           //     localStorage.setItem('refresh', response5.data.token.refresh);
           //     localStorage.setItem('access', response5.data.token.access);
           const user2 = {username: localStorage.getItem("username")}
           return {...state, user: user2, isAuth: true}
           // }
           // else {
           //     const user =  {username: localStorage.getItem('user')}
           //     return {...state, user: user, isAuth: true}
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
export const logout_fetch = payload => ({type: LOGOUT_FETCH})
export const check_auth_fetch = payload => ({type: CHECK_AUTH_FETCH})
