const defaultState = {
    vido_equipments: [],
    status: false,
}

// типы actions
export const LOAD_VIDEO_EQUIPMENTS = 'LOAD_VIDEO_EQUIPMENTS'
export const SET_STATUS_VIDEO_EQUIPMENTS = 'SET_STATUS_VIDEO_EQUIPMENTS'

// типы actions saga
export const LOAD_VIDEO_EQUIPMENT_FETCH = "LOAD_VIDEO_EQUIPMENT_FETCH"
export const CREATE_VIDEO_EQUIPMENT_FETCH = "CREATE_VIDEO_EQUIPMENT_FETCH"

// записывалка в кеш-хранилище
export const vidoEquipmentReduser = (state=defaultState, action) => {
   switch (action.type) {
       case LOAD_VIDEO_EQUIPMENTS:
           return {...state, vido_equipments: action.payload}
       case SET_STATUS_VIDEO_EQUIPMENTS:
           return {...state, status: action.payload}
       default:
           return state
   }
}

// Action-creators
export const load_vido_equipments = payload => ({type: LOAD_VIDEO_EQUIPMENTS, payload})
export const set_status_vido_equipments = payload => ({type: SET_STATUS_VIDEO_EQUIPMENTS, payload})

// Action-creators for saga
export const load_vido_equipments_fetch = payload => ({type: LOAD_VIDEO_EQUIPMENT_FETCH, payload})
export const create_vido_equipments_fetch = payload => ({type: CREATE_VIDEO_EQUIPMENT_FETCH, payload})
