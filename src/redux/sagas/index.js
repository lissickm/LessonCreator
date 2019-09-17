import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import courseSaga from './courseSaga';
import individualCourseSaga from './individualCourseSaga';
import individualLessonSaga from './individualLessonSaga';
import addNewCourseSaga from './addNewCourseSaga';
import addNewLessonSaga from './addNewLessonSaga';
import addNewContentSaga from './addNewContentSaga';
import addChoiceVideosSaga from './addChoiceVideosSaga';
import deleteCourseSaga from './deleteCourseSaga';
import deleteLessonSaga from './deleteLessonSaga';
import editCourseSaga from './editCourseSaga';
import editLessonSaga from './editLessonSaga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    courseSaga(),
    individualCourseSaga(),
    individualLessonSaga(),
    addNewCourseSaga(),
    addNewLessonSaga(),
    addNewContentSaga(),
    addChoiceVideosSaga(),
    deleteCourseSaga(),
    deleteLessonSaga(),
    editCourseSaga(),
    editLessonSaga(),
  ]);
}
