import Server from './server';
import { Itodo } from 'types';
import { ReturnAPITodo, ReturnAPITodoList } from './type';
const BASE_ENDPOINT = `http://dummy-server.io/todo`;

type ReturnAPI = ReturnAPITodo | ReturnAPITodoList | undefined;

// 전체 todo 가져오는 fetch
const fetchTodos = async (): Promise<ReturnAPI> => {
  const data = await Server.GET(BASE_ENDPOINT);
  return data;
};

// Todo 생성
const createdTodo = async (newTodo: Itodo): Promise<ReturnAPI> => {
  const data = await Server.POST(BASE_ENDPOINT, newTodo);
  return data;
};

// Todo 내용 변경
const modifyTodo = async (id: string, content: string): Promise<ReturnAPI> => {
  const data = await Server.POST(`${BASE_ENDPOINT}/${id}`, {
    content: content,
  });
  return data;
};

// Todo check 변경
const checkTodo = async (id: string, check: boolean): Promise<ReturnAPI> => {
  const data = await Server.POST(`${BASE_ENDPOINT}/${id}`, { isCheck: check });
  return data;
};

// Todo Delete
const deleteTodo = async (id: string): Promise<ReturnAPI> => {
  const data = await Server.POST(`${BASE_ENDPOINT}/${id}`, {});
  return data;
};

const TodoAPI = {
  fetchTodos,
  createdTodo,
  modifyTodo,
  checkTodo,
  deleteTodo,
};

export default TodoAPI;
