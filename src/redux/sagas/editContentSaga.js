import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* editContent(action) {
    console.log('in editContent saga');

    try {
        yield axios.put(`api/content/${action.content_id}`, action.payload);
        yield put({
            type: 'FETCH_INDIVIDUAL_LESSON',
            payload: action.payload.lesson_id
        });


    } catch (error) {
        console.log('error in edit content: ', error)
    }
}

function* editContentSaga() {
    yield takeEvery('CHANGE_CONTENT_INFORMATION', editContent)

}


export default editContentSaga;