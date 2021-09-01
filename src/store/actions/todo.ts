import { FETCH_TODO } from './types';
import { TodoActionTypes } from './types';
export const fetchTodo = (): TodoActionTypes => {
  return {
    type: FETCH_TODO,
  };
};
