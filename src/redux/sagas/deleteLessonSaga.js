import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* deleteLesson(action) {
    try {
        yield axios.delete(`api/details/${action.payload.id}`);
        yield put({ type: 'FETCH_INDIVIDUAL_COURSE', payload: action.payload.course_id });
    } catch (error) {
        console.log('error in delete lesson: ', error)
    }
}

function* deleteLessonSaga() {
    yield takeEvery('REMOVE_LESSON', deleteLesson)
}

export default deleteLessonSaga;