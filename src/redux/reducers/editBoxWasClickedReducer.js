const editBoxWasClickedReducer = (state = false, action) => {
    switch (action.type) {
        case 'TOGGLE_EDIT_BOX_CLICK':
            return action.payload;
        default:
            return state;
    }
}

export default editBoxWasClickedReducer;