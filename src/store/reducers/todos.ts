import { Itodo } from 'types';
import {
  FETCH_TODO,
  FETCH_TODO_SUCCESS,
  TodoActionTypes,
} from 'store/actions/types';

export interface TodoState {
  count: number;
  todoList: Itodo[];
}

const INITIAL_STATE = {
  count: 0,
  todoList: [],
};

export default function todos(
  state: TodoState = INITIAL_STATE,
  action: TodoActionTypes
): TodoState {
  console.log('🐟 redux_type : ', action.type);
  switch (action.type) {
    case FETCH_TODO_SUCCESS:
      return {
        count: action.payload.count,
        todoList: [...action.payload.todoList],
      };
    default:
      return state;
  }
}
