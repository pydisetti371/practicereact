import { call, put, takeEvery } from 'redux-saga/effects'
// import { searchVal } from '../actions'
import * as actions from '../actions/index.js';

function* searchValue(data) {
    console.log(data, "data in saga")
    yield put(actions.updateToReducer(data))

}

export default function* rootSaga() {
    yield takeEvery("SEARCH_VALUE", searchValue)
}