import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* toggleEditBoxClick(action) {
    yield put({
        type: 'TOGGLE_EDIT_BOX_CLICK',
        payload: action.payload
    });

}


function* editBoxClickSaga() {
    yield takeEvery('SET_EDIT_BOX_CLICK', toggleEditBoxClick)
}

export default editBoxClickSaga;