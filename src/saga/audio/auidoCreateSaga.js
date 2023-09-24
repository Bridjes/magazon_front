import {put, takeEvery, call} from "redux-saga/effects"
import AudioServices from "../../services/AudioServices";
import {CREATE_AUDIO_FETCH, set_status_audio} from "../../store/audioReduser";

function* audioCreateSaga(action) {
    action.payload.setIsLoading(true)
    try {
        const response = yield call(AudioServices.create_audio, action.payload.data)
        action.payload.setIsLoading(false)
        yield put(set_status_audio(true))
    } catch (e) {
        action.payload.setIsLoading(false)
        yield put(set_status_audio(false))
    }
}

export function* audioCreateWatch() {
  yield takeEvery(CREATE_AUDIO_FETCH, audioCreateSaga);
}