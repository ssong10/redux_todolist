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
// message
export const SET_MESSAGE = 'set_message';
export const HIDE_MESSAGE = 'hide_message';

// Todo Action interface
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

export interface IAddSuccessAction {
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
export interface IDeleteAction {
  type: typeof DELETE_TODO;
  payload: {
    id: string;
  };
}
export interface IDeleteSuccessAction {
  type: typeof DELETE_TODO_SUCESS;
  payload: {
    id: string;
  };
}

// All ActionTypes
export type TodoActionTypes =
  | IFetchAction
  | IFetchSucAction
  | IAddAction
  | IAddSuccessAction
  | IUpdateCheckAction
  | IUpdateAction
  | IDeleteAction
  | IDeleteSuccessAction;

// Message Action interface
export interface ISetMessageAction {
  type: typeof SET_MESSAGE;
  payload: {
    text: string;
  };
}
export interface IHideMessageAction {
  type: typeof HIDE_MESSAGE;
}
export type MessageActionTypes = ISetMessageAction | IHideMessageAction;
