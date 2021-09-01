import { Itodo } from 'types';

export interface ReturnAPITodo {
  msg: string;
  todo: Itodo | undefined;
}

export interface ReturnAPITodoList {
  count: number;
  todoList: Itodo[];
}
