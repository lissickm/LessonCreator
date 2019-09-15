const choiceVideosReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_CHOICE_VIDEOS':
            return action.payload;
        default:
            return state;
    }
}

export default choiceVideosReducer;