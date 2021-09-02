/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
  all,
  put,
  takeLatest,
  call,
  delay,
  takeEvery,
} from 'redux-saga/effects';
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
  UPDATE_CONTENT_TODO,
  IUpdateContentAction,
} from 'store/actions/types';
import { saveTodo } from 'store/actions/todo';

export function* fetchTodo() {
  const res: ReturnAPITodoList = yield call(TodoAPI.fetchTodos);
  yield put({
    type: FETCH_TODO_SUCCESS,
    payload: res,
  });
  yield put(saveTodo());
}

export function* addTodo(action: IAddAction) {
  const newTodo = {
    id: uuid(),
    content: action.payload,
    isCheck: false,
  };
  const res: ReturnAPITodo = yield call(() => TodoAPI.createdTodo(newTodo));
  yield put({
    type: ADD_TODO_SUCCESS,
    payload: res.todo,
  });
  yield put(setMessage(`${res.todo?.content} - 생성 완료`));
}

export function* checkUpdate(action: IUpdateCheckAction) {
  const { id, isCheck } = action.payload;
  const res: ReturnAPITodo = yield call(() => TodoAPI.checkTodo(id, isCheck));
  yield put({
    type: UPDATE_TODO_SUCCESS,
    payload: {
      id: id,
      update: { isCheck: isCheck },
    },
  });
  yield put(
    setMessage(`${res.todo?.content} - ${isCheck ? '완료' : '완료 못함'}`)
  );
}

export function* contentUpdate(action: IUpdateContentAction) {
  const { id, content } = action.payload;
  const res: ReturnAPITodo = yield call(() => TodoAPI.modifyTodo(id, content));
  yield put({
    type: UPDATE_TODO_SUCCESS,
    payload: {
      id: id,
      update: { content: content },
    },
  });
  yield put(setMessage(`'${res.todo?.content}' (으)로 변경`));
}
export function* deleteTodo(action: IDeleteSuccessAction) {
  const { id } = action.payload;
  const res: ReturnAPITodo = yield call(() => TodoAPI.deleteTodo(id));
  yield put({
    type: DELETE_TODO_SUCESS,
    payload: {
      id: id,
    },
  });
  yield put(setMessage(`${res.todo?.content} - 제거 완료`));
}
export function* todos() {
  yield takeLatest(FETCH_TODO, fetchTodo);
  yield takeLatest(ADD_TODO, addTodo);
  yield takeLatest(UPDATE_CHECK_TODO, checkUpdate);
  yield takeLatest(UPDATE_CONTENT_TODO, contentUpdate);
  yield takeLatest(DELETE_TODO, deleteTodo);
}

export function* showMessage() {
  yield put(saveTodo());
  yield delay(5000);
  yield put({
    type: HIDE_MESSAGE,
  });
}
export function* message() {
  yield takeEvery(SET_MESSAGE, showMessage);
}
function* rootSaga() {
  yield all([todos(), message()]);
}

export default rootSaga;
