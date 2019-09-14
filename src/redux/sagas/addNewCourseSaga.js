import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* postNewCourse(action) {
    try{
        let response = yield axios.post('api/courses', action.payload);
        yield put({
            type: 'POST_NEW_COURSE'
        });
    } catch(error) {
        console.log('error in post new course: ', error)
    }
}

function* addNewCourseSaga() {
    yield takeEvery('ADD_NEW_COURSE', postNewCourse)
}

export default addNewCourseSaga;