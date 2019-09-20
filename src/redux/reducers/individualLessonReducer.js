// manages the current lesson content
const individualLessonReducer = (state = {} , action) => {
    switch (action.type) {
        case 'ADD_INDIVIDUAL_LESSON':
            return action.payload;
        case 'UPDATE_EDIT_INFO':
            return {
                //keep whats currently here
                ...state,
                //change what action.payload needs to change
                ...action.payload

            }
        default:
            return state;
    }
}

export default individualLessonReducer;

