import { Itodo } from 'types';

// type constant
// todo
export const FETCH_TODO = 'fetch_todo';
export const FETCH_TODO_SUCCESS = 'fetch_todo_success';
export const ADD_TODO = 'add_todo';
export const ADD_TODO_SUCCESS = 'add_todo_success';
export const UPDATE_CHECK_TODO = 'update_check_todo';
export const UPDATE_CONTENT_TODO = 'update_content_todo';
export const UPDATE_TODO_SUCCESS = 'update_todo_success';
export const DELETE_TODO = 'delete_todo';
export const DELETE_TODO_SUCESS = 'delete_todo_success';

export interface IFetchAction {
  type: typeof FETCH_TODO;
}
export interface IFetchSucAction {
  type: typeof FETCH_TODO_SUCCESS;
  payload: {
    count: number;
    todoList: Itodo[];
  };
}
export interface IAddAction {
  type: typeof ADD_TODO;
  payload: string;
}

export interface IAddSucAction {
  type: typeof ADD_TODO_SUCCESS;
  payload: Itodo;
}
export interface IUpdateCheckAction {
  type: typeof UPDATE_CHECK_TODO;
  payload: {
    id: string;
    isCheck: boolean;
  };
}
export interface IUpdateContentAction {
  type: typeof UPDATE_CONTENT_TODO;
  payload: {
    id: string;
    content: string;
  };
}
export interface IUpdateAction {
  type: typeof UPDATE_TODO_SUCCESS;
  payload: {
    id: string;
    update: Partial<Itodo>;
  };
}
export type TodoActionTypes =
  | IFetchAction
  | IFetchSucAction
  | IAddAction
  | IAddSucAction
  | IUpdateCheckAction
  | IUpdateAction;
