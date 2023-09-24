import {put, takeEvery, call} from "redux-saga/effects"
import {CREATE_VIDEO_EQUIPMENT_FETCH, set_status_vido_equipments} from "../../store/videoEquipmentReduser";
import VideoEquipmentServices from "../../services/VideoEquipmentServices";

function* videoeEuipmentCreateSaga(action) {
    action.payload.setIsLoading(true)
    try {
        const response = yield call(VideoEquipmentServices.create_video_equipment, action.payload.data)
        action.payload.setIsLoading(false)
        yield put(set_status_vido_equipments(true))
    } catch (e) {
        action.payload.setIsLoading(false)
        yield put(set_status_vido_equipments(false))
    }
}

export function* videoeEuipmentCreateWatch() {
  yield takeEvery(CREATE_VIDEO_EQUIPMENT_FETCH, videoeEuipmentCreateSaga);
}