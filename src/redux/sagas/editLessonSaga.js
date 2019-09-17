import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* editLesson(action) {
    console.log('in editLesson saga');
    
    try {
        yield axios.put(`api/lessons/${action.payload.id}`, action.payload);
        

    } catch (error) {
        console.log('error in edit lesson: ', error)
    }
}

function* editLessonSaga() {
    yield takeEvery('CHANGE_LESSON_INFORMATION', editLesson)

}




export default editLessonSaga;