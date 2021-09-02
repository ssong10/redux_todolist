import {
  FETCH_TODO,
  ADD_TODO,
  UPDATE_CHECK_TODO,
  DELETE_TODO,
  UPDATE_CONTENT_TODO,
  SAVE_TODO,
} from './types';
import { TodoActionTypes } from './types';

// 전체 Todo 를 가져오는 reducer 생성
export const fetchTodo = (): TodoActionTypes => {
  return {
    type: FETCH_TODO,
  };
};

// content 값으로  Todo 를 생성하는 reducer 생성
export const addTodo = (content: string): TodoActionTypes => {
  return {
    type: ADD_TODO,
    payload: content,
  };
};

// id와 check 값으로 Todo 를 변경하는 reducer 생성
export const updateCheckTodo = (
  id: string,
  isCheck: boolean
): TodoActionTypes => {
  return {
    type: UPDATE_CHECK_TODO,
    payload: { id, isCheck },
  };
};

// id와 content 값으로 Todo 를 변경하는 reducer 생성
export const updateContentTodo = (
  id: string,
  content: string
): TodoActionTypes => {
  return {
    type: UPDATE_CONTENT_TODO,
    payload: { id, content },
  };
};

// id 값으로 삭제하는 reducer
export const deleteTodo = (id: string): TodoActionTypes => {
  return {
    type: DELETE_TODO,
    payload: {
      id,
    },
  };
};

// 저장하는 reducer
export const saveTodo = (): TodoActionTypes => {
  return {
    type: SAVE_TODO,
  };
};
