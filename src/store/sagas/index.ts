import { all, put, takeLatest, call, delay } from 'redux-saga/effects';
import TodoAPI from 'api';
import { ReturnAPITodo, ReturnAPITodoList } from 'api/type';
import uuid from 'utils/uuid';
import { setMessage } from 'store/actions/message';
import {
  UPDATE_TODO_SUCCESS,
  ADD_TODO,
  ADD_TODO_SUCCESS,
  FETCH_TODO,
  FETCH_TODO_SUCCESS,
  IAddAction,
  IUpdateCheckAction,
  UPDATE_CHECK_TODO,
  SET_MESSAGE,
  HIDE_MESSAGE,
  DELETE_TODO,
  DELETE_TODO_SUCESS,
  IDeleteSuccessAction,
} from 'store/actions/types';

export function* fetchTodo() {
  const res: ReturnAPITodoList = yield call(TodoAPI.fetchTodos);
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
  const res: ReturnAPITodo = yield call(() => TodoAPI.createdTodo(newTodo));
  yield put(setMessage(`${res.todo?.content} - 생성 완료`));
  yield put({
    type: ADD_TODO_SUCCESS,
    payload: res.todo,
  });
}

export function* checkUpdate(action: IUpdateCheckAction) {
  const { id, isCheck } = action.payload;
  const res: ReturnAPITodo = yield call(() => TodoAPI.checkTodo(id, isCheck));
  yield put(setMessage(`${res.todo?.content} - ${isCheck ? '완료' : ''}`));
  yield put({
    type: UPDATE_TODO_SUCCESS,
    payload: {
      id: id,
      update: { isCheck: isCheck },
    },
  });
}
export function* deleteTodo(action: IDeleteSuccessAction) {
  const { id } = action.payload;
  const res: ReturnAPITodo = yield call(() => TodoAPI.deleteTodo(id));
  yield put(setMessage(`${res.todo?.content} - 제거 완료`));
  yield put({
    type: DELETE_TODO_SUCESS,
    payload: {
      id: id,
    },
  });
}
export function* todos() {
  yield takeLatest(FETCH_TODO, fetchTodo);
  yield takeLatest(ADD_TODO, addTodo);
  yield takeLatest(UPDATE_CHECK_TODO, checkUpdate);
  yield takeLatest(DELETE_TODO, deleteTodo);
}

export function* showMessage() {
  yield delay(2000);
  yield put({
    type: HIDE_MESSAGE,
  });
}
export function* message() {
  yield takeLatest(SET_MESSAGE, showMessage);
}
function* rootSaga() {
  yield all([todos(), message()]);
}

export default rootSaga;
