import {put, takeEvery, call} from "redux-saga/effects"
import {LOAD_AUDIO_FETCH, load_audio} from "../../store/audioReduser";
import AudioServices from "../../services/AudioServices";

function* audioRetrieveSaga(action) {
    action.payload.setIsLoading(true)
    try {
        const response = yield call(AudioServices.load_audio)
        action.payload.setIsLoading(false)
        yield put(load_audio(response.data))
    } catch (e) {
        action.payload.setIsLoading(false)
        yield put(load_audio([]))
    }
}

export function* audioRetrieveWatch() {
  yield takeEvery(LOAD_AUDIO_FETCH, audioRetrieveSaga);
}