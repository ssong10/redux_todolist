export interface Itodo {
  id: string;
  content: string;
  isCheck: boolean;
}
export interface TodoState {
  count: number;
  todoList: Itodo[];
}
