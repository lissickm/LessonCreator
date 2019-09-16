import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* editCourse(action) {
    try {
        yield axios.put(`api/courses/${action.payload.id}`, action.payload);
        // yield put({ type: 'EDIT_COURSE_INFORMATION', payload: action.payload.id });
        
    } catch (error) {
        console.log('error in edit course: ', error)
    }
}

function* editCourseSaga() {
    yield takeEvery('CHANGE_COURSE_INFORMATION', editCourse)
 
}

export default editCourseSaga;
