import { all, put, takeLatest, call } from 'redux-saga/effects';
import TodoAPI from 'api';
import { ReturnData } from 'api/type';
import { IAddAction } from 'store/actions/types';
import uuid from 'utils/uuid';
import {
  ADD_TODO,
  ADD_TODO_SUCCESS,
  FETCH_TODO,
  FETCH_TODO_SUCCESS,
} from 'store/actions/types';

export function* fetchTodo() {
  const res: ReturnData = yield call(TodoAPI.fetchTodos);
  yield put({
    type: FETCH_TODO_SUCCESS,
    payload: res,
  });
}
export function* addTodo(action: IAddAction) {
  const newTodo = {
    id: uuid(),
    content: action.payload,
    isCheck: false,
  };
  const res: ReturnData = yield call(() => TodoAPI.createdTodo(newTodo));
  yield put({
    type: ADD_TODO_SUCCESS,
    payload: res.todo,
  });
}
export function* todos() {
  yield takeLatest(FETCH_TODO, fetchTodo);
  yield takeLatest(ADD_TODO, addTodo);
}

function* rootSaga() {
  yield all([todos()]);
}

export default rootSaga;
