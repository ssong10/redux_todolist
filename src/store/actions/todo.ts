import { FETCH_TODO, ADD_TODO } from './types';
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
