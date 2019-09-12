const chosenLessonIDReducer = (state=0, action) => {
    switch (action.type) {
        case 'SET_CHOSEN_LESSON_ID':
            return action.payload;
        default:
            return state;
    }
}

export default chosenLessonIDReducer;