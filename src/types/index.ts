export interface Itodo {
  id: string;
  content: string;
  isCheck: boolean;
}
export interface TodoState {
  count: number;
  todoList: Itodo[];
}

export interface IMessage {
  text: string;
  id: string;
}
export interface Message {
  messages: IMessage[];
  count: number;
  raise: boolean;
}
