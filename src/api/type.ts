import { Itodo } from 'types';

export interface ReturnData {
  msg?: string;
  count?: number;
  todoList?: Itodo[];
  content?: string;
  isCheck?: boolean;
}
