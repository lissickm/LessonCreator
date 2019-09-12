const individualLessonReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_INDIVIDUAL_LESSON':
            return action.payload;
        default:
            return state;
    }
}

export default individualLessonReducer;