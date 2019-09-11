import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';




function* fetchIndividualCourse(action) {
    try {
        let response = yield axios.get('api/details');

        yield put({
            type: 'ADD_INDIVIDUAL_COURSE',
            payload: response.data

        });
    } catch (error) {
        console.log('error in fetch: ', error);
    }

}



function* individualCourseSaga() {
    yield takeEvery('FETCH_INDIVIDUAL_COURSE', fetchIndividualCourse)
}

export default individualCourseSaga;