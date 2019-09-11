const individualCourseReducer = (state=[], action) => {
    switch (action.type) {
        case 'ADD_INDIVIDUAL_COURSE':
            return action.payload;
        default:
            return state;
    }
}

export default individualCourseReducer;