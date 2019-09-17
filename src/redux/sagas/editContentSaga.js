import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* editContent(action) {
    console.log('in editContent saga');

    try {
        yield axios.put(`api/content/${action.payload.id}`, action.payload);


    } catch (error) {
        console.log('error in edit content: ', error)
    }
}

function* editContentSaga() {
    yield takeEvery('CHANGE_CONTENT_INFORMATION', editContent)

}


export default editContentSaga;