import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getChoiceVideos(action) {
    try {
        console.log('in get choice videos saga', action.payload);
        let response = yield axios.get(`api/content/prior/${action.payload}`);
        console.log('saga response: ', response);

        yield put({
            type: 'GET_CHOICE_VIDEOS',
            payload: response.data
        });
    } catch (error) {
        console.log('error in get: ', error);
    }
}


function* addChoiceVideosSaga() {
    yield takeEvery('FETCH_CHOICE_VIDEOS', getChoiceVideos)
}

export default addChoiceVideosSaga;