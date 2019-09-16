import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* editCourse(action) {
    try {
        yield axios.put(`api/courses/${action.payload.course_id}`);
        
    } catch (error) {
        console.log('error in edit course: ', error)
    }
}

function* editCourseSaga() {
    yield takeEvery('CHANGE_COURSE_INFORMATION', deleteCourse)
}

export default editCourseSaga;
