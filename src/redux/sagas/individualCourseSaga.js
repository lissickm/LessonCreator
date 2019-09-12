import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';




function* fetchIndividualCourse(action) {
    try {
        console.log('infetchIndividualCourse reducer');
        let response = yield axios.get(`api/details/${action.payload}`);
        console.log('saga response: ', response);

        yield put({
            type: 'ADD_INDIVIDUAL_COURSE',
            payload: response.data
        });
    } catch (error) {
        console.log('error in fetch: ', error);
    }

}



function* individualCourseSaga() {
    yield takeEvery('FETCH_INDIVIDUAL_LESSON', fetchIndividualCourse)
}

export default individualCourseSaga;