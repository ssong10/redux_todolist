import { FETCH_TODO, ADD_TODO, UPDATE_CHECK_TODO } from './types';
import { TodoActionTypes } from './types';
export const fetchTodo = (): TodoActionTypes => {
  return {
    type: FETCH_TODO,
  };
};

export const addTodo = (content: string): TodoActionTypes => {
  return {
    type: ADD_TODO,
    payload: content,
  };
};

export const updateCheckTodo = (
  id: string,
  isCheck: boolean
): TodoActionTypes => {
  return {
    type: UPDATE_CHECK_TODO,
    payload: { id, isCheck },
  };
};
