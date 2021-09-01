import { Itodo } from 'types';

export interface ReturnData {
  msg?: string;
  count?: number;
  todoList?: Itodo[];
  todo?: Itodo;
}
