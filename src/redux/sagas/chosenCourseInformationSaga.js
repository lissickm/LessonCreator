import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* sendInfoToReducer(action) {
    try {
        yield put({
            type: 'ADD_CHOSEN_COURSE_INFO',
            payload: action.payload
        });
    } catch (error) {
        console.log('error in set: ', error);
    }

}
function* chosenCourseInformationSaga() {
    yield takeEvery('SET_CHOSEN_COURSE_INFO', sendInfoToReducer)
}

export default chosenCourseInformationSaga;