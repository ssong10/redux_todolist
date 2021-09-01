import {
  TodoActionTypes,
  ADD_TODO_SUCCESS,
  FETCH_TODO_SUCCESS,
  UPDATE_TODO_SUCCESS,
} from 'store/actions/types';
import { TodoState } from 'types';
const INITIAL_STATE = {
  count: 0,
  todoList: [],
};

export default function todos(
  state: TodoState = INITIAL_STATE,
  action: TodoActionTypes
): TodoState {
  switch (action.type) {
    case FETCH_TODO_SUCCESS:
      return {
        count: action.payload.count,
        todoList: [...action.payload.todoList],
      };
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case UPDATE_TODO_SUCCESS:
      return {
        ...state,
        todoList: state.todoList.map(todo =>
          todo.id === action.payload.id
            ? { ...todo, ...action.payload.update }
            : todo
        ),
      };
    default:
      return state;
  }
}
