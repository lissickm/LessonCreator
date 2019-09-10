const chosenCourseIDReducer = (state = 0, action) => {
    switch (action.type) {
        case 'SET_CHOSEN_COURSE_ID':
            return action.payload;
        default:
            return state;
    }
}

export default chosenCourseIDReducer;