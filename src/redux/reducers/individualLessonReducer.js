const individualLessonReducer = (state=0 , action) => {
    switch (action.type) {
        case 'ADD_INDIVIDUAL_LESSON':
            return action.payload;
        default:
            return state;
    }
}

export default individualLessonReducer;