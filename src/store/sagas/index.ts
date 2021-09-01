import { all, put, takeLatest, call } from 'redux-saga/effects';
import TodoAPI from 'api';
import { ReturnData } from 'api/type';
import { FETCH_TODO, FETCH_TODO_SUCCESS } from 'store/actions/types';

export function* fetchTodo() {
  const data: ReturnData = yield call(TodoAPI.fetchTodos);
  yield put({
    type: FETCH_TODO_SUCCESS,
    payload: data,
  });
}

export function* todos() {
  yield takeLatest(FETCH_TODO, fetchTodo);
}

function* rootSaga() {
  yield all([todos()]);
}

export default rootSaga;
