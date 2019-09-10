import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';




function* fetchCourses(action) {
    try {
        let response = yield axios.get('api/courses');
        
        yield put({
            type: 'ADD_COURSES',
            payload: response.data

        });
    } catch (error) {
        console.log('error in fetch: ', error);
    }

}



function* courseSaga() {
    yield takeEvery('FETCH_COURSES', fetchCourses)
}

export default courseSaga;