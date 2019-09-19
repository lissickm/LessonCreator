import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* sendInfoToReducer(action) {
    console.log('in chosen lesson info saga')
    try {
        yield put({
            type: 'ADD_CHOSEN_LESSON_INFO',
            payload: action.payload
        });
    } catch (error) {
        console.log('error in add: ', error);
    }

}
function* chosenLessonInformationSaga() {
    yield takeEvery('SET_CHOSEN_LESSON_INFO', sendInfoToReducer)
}

export default chosenLessonInformationSaga;