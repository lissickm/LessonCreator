import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* postNewLesson(action) {
    try {
        let response = yield axios.post('api/lessons', action.payload);
        yield put({
            type: 'POST_NEW_LESSON'
        });
    } catch (error) {
        console.log('error in post new lesson: ', error)
    }
}


function* addNewLessonSaga() {
    yield takeEvery('ADD_NEW_LESSON', postNewLesson)
}

export default addNewLessonSaga;