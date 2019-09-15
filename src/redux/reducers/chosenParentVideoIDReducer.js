const chosenParentVideoIDReducer = (state = null, action) => {
    switch (action.type) {
        case 'SET_CHOSEN_PARENT_VIDEO_ID':
            return action.payload;
        default:
            return state;
    }
}



export default chosenParentVideoIDReducer;