import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* postNewContent(action) {
    try {
        yield axios.post('api/content', action.payload);
        yield put({
            type: 'FETCH_INDIVIDUAL_LESSON',
            payload: action.chosen_lesson_id
        });
        
        //FETCH_INDIVIDUAL_LESSON
        
        ///???
        // yield put({
        //     type: 'POST_NEW_CONTENT'
        // });
    } catch (error) {
        console.log('error in post new content: ', error)
    }
}


function* addNewContentSaga() {
    yield takeEvery('ADD_NEW_CONTENT', postNewContent)
}

export default addNewContentSaga;