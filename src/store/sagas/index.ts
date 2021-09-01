import { all, put, takeLatest, call } from 'redux-saga/effects';
import TodoAPI from 'api';
import { ReturnData } from 'api/type';
import uuid from 'utils/uuid';
import {
  UPDATE_TODO_SUCCESS,
  ADD_TODO,
  ADD_TODO_SUCCESS,
  FETCH_TODO,
  FETCH_TODO_SUCCESS,
  IAddAction,
  IUpdateCheckAction,
  UPDATE_CHECK_TODO,
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

export function* checkUpdate(action: IUpdateCheckAction) {
  const { id, isCheck } = action.payload;
  const res: ReturnData = yield call(() => TodoAPI.checkTodo(id, isCheck));
  console.log(res);
  yield put({
    type: UPDATE_TODO_SUCCESS,
    payload: {
      id: id,
      update: { isCheck: isCheck },
    },
  });
}
export function* todos() {
  yield takeLatest(FETCH_TODO, fetchTodo);
  yield takeLatest(ADD_TODO, addTodo);
  yield takeLatest(UPDATE_CHECK_TODO, checkUpdate);
}

function* rootSaga() {
  yield all([todos()]);
}

export default rootSaga;
