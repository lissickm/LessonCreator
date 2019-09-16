import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* deleteCourse(action) {
    try {
        let response = yield axios.delete(`api/courses/${action.payload}`);
        yield put({type: 'FETCH_COURSES'});    
    } catch (error) {
        console.log('error in delete course: ', error)
    }
}

function* deleteCourseSaga() {
    yield takeEvery('REMOVE_COURSE', deleteCourse)
}

export default deleteCourseSaga;