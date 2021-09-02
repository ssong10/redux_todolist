import {
  TodoActionTypes,
  ADD_TODO_SUCCESS,
  FETCH_TODO_SUCCESS,
  UPDATE_TODO_SUCCESS,
  DELETE_TODO_SUCESS,
  SAVE_TODO,
} from 'store/actions/types';
import { TodoState } from 'types';
import { getStorage, setStorage } from 'utils/storage';
const INITIAL_STATE = {
  count: 0,
  todoList: getStorage('paywork-todo') || [],
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
    case DELETE_TODO_SUCESS:
      return {
        ...state,
        todoList: state.todoList.filter(todo => todo.id !== action.payload.id),
      };
    case SAVE_TODO:
      setStorage('paywork-todo', state.todoList);
      return state;
    default:
      return state;
  }
}
