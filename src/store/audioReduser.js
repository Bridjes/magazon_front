const defaultState = {
    audio: [],
    status: false,
}

// типы actions
export const LOAD_AUDIO = 'LOAD_AUDIO'
export const SET_STATUS_AUDIO = 'SET_STATUS_AUDIO'

// типы actions saga
export const LOAD_AUDIO_FETCH = "LOAD_AUDIO_FETCH"
export const CREATE_AUDIO_FETCH = "CREATE_AUDIO_FETCH"

// записывалка в кеш-хранилище
export const audioReduser = (state=defaultState, action) => {
   switch (action.type) {
       case LOAD_AUDIO:
           return {...state, audio: action.payload}
       case SET_STATUS_AUDIO:
           return {...state, status: action.payload}
       default:
           return state
   }
}

// Action-creators
export const load_audio = payload => ({type: LOAD_AUDIO, payload})
export const set_status_audio = payload => ({type: SET_STATUS_AUDIO, payload})

// Action-creators for saga
export const load_audio_fetch = payload => ({type: LOAD_AUDIO_FETCH, payload})
export const create_audio_fetch = payload => ({type: CREATE_AUDIO_FETCH, payload})
