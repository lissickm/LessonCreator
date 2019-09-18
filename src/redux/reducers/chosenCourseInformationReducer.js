const chosenCourseInformationReducer = (state=0, action) => {
    switch (action.type) {
        case 'ADD_CHOSEN_COURSE_INFO' :
            return action.payload;
        default:
            return state;
    }
}

export default chosenCourseInformationReducer;