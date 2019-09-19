const chosenLessonInformationReducer = (state = 0, action) => {
    switch (action.type) {
        case 'ADD_CHOSEN_LESSON_INFO':
            return action.payload;
        default:
            return state;
    }
}

export default chosenLessonInformationReducer;