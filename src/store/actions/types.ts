import { Itodo } from 'types';

export const FETCH_TODO = 'fetch_todo';
export const FETCH_TODO_SUCCESS = 'fetch_todo_success';
export const ADD_TODO = 'add_todo';
export const ADD_TODO_SUCCESS = 'add_todo_success';
export const UPDATE_TODO = 'update_todo';
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
export type TodoActionTypes =
  | IFetchAction
  | IFetchSucAction
  | IAddAction
  | IAddSucAction;
