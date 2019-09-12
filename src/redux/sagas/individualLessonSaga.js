import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchIndividualLesson(action) {
    try {
        console.log('in fetch individual lesson saga', action.payload);
        let response = yield axios.get(`api/lessons/${action.payload}`);
        console.log('saga response: ', response);

        yield put({
            type: 'ADD_INDIVIDUAL_LESSON',
            payload: response.data
        });
    } catch (error) {
        console.log('error in fetch: ', error);
    }
}


function* individualLessonSaga() {
    yield takeEvery('FETCH_INDIVIDUAL_LESSON', fetchIndividualLesson)
}

export default individualLessonSaga;