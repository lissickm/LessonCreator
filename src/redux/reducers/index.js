import { combineReducers } from 'redux';
import errors from './errorsReducer';
import loginMode from './loginModeReducer';
import user from './userReducer';
import courses from './coursesReducer';
import chosenCourse from './chosenCourseIDReducer';
import individualCourse from'./individualCourseReducer';
import chosenLessonID from './chosenLessonIDReducer';
import individualLesson from './individualLessonReducer';
import choiceVideos from './choiceVideosReducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  loginMode, // will have a value of 'login' or 'registration' to control which screen is shown
  user, // will have an id and username if someone is logged in
  courses, //contains id, name and description of all courses in database
  chosenCourse, //contains the id of the course chosen by the user
  individualCourse, //contains the lesson information of the course chosen by the user
  chosenLessonID, //contains the lesson ID that was chosen by the user
  individualLesson, //contains the lesson information of the lesson chosen by the user
  choiceVideos, //contains the lesson next choices
});

export default rootReducer;
