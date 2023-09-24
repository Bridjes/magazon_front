import {put, takeEvery, call} from "redux-saga/effects"
import {LOAD_VIDEO_EQUIPMENT_FETCH, load_vido_equipments} from "../../store/videoEquipmentReduser";
import VideoEquipmentServices from "../../services/VideoEquipmentServices";

function* videoeEuipmentRetrieveSaga(action) {
    action.payload.setIsLoading(true)
    try {
        const response = yield call(VideoEquipmentServices.load_video_equipment)
        action.payload.setIsLoading(false)
        yield put(load_vido_equipments(response.data))
    } catch (e) {
        action.payload.setIsLoading(false)
        yield put(load_vido_equipments([]))
    }
}

export function* videoeEuipmentRetrieveWatch() {
  yield takeEvery(LOAD_VIDEO_EQUIPMENT_FETCH, videoeEuipmentRetrieveSaga);
}