import Server from './server';
import { Itodo } from 'types';
import { ReturnAPITodo, ReturnAPITodoList } from './type';
const BASE_ENDPOINT = `http://dummy-server.io/todo`;

type ReturnAPI = ReturnAPITodo | ReturnAPITodoList | undefined;
const fetchTodos = async (): Promise<ReturnAPI> => {
  const data = await Server.GET(BASE_ENDPOINT);
  return data;
};

const createdTodo = async (newTodo: Itodo): Promise<ReturnAPI> => {
  const data = await Server.POST(BASE_ENDPOINT, newTodo);
  return data;
};

const modifyTodo = async (id: string, content: string): Promise<ReturnAPI> => {
  const data = await Server.POST(`${BASE_ENDPOINT}/${id}`, {
    content: content,
  });
  return data;
};

const checkTodo = async (id: string, check: boolean): Promise<ReturnAPI> => {
  const data = await Server.POST(`${BASE_ENDPOINT}/${id}`, { isCheck: check });
  return data;
};

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
