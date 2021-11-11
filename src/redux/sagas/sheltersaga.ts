import { put, takeEvery, all, fork } from 'redux-saga/effects';
import axios from 'axios';
import { getSheltersAction, FetchErrorAction } from '../actions/actiionCreators/shelterActionCreator';
import { ActionTypes } from '../actions/actionTypes/types';

function* onRecieveShelters() {
  try {
    const URL = `https://frontend-assignment-api.goodrequest.com/api/v1/shelters`;
    const { data } = yield axios.get(URL);
    yield put(getSheltersAction(data));
  } catch (e) {
    yield put(FetchErrorAction());
  }
}

function* watchOnLoadShelters() {
  yield takeEvery(ActionTypes.FetchShelters, onRecieveShelters);
}

function* shelterSaga() {
  yield all([fork(watchOnLoadShelters)]);
}
export default function* rootSaga() {
  yield all([fork(shelterSaga)]);
}
