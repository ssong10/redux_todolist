import { Itodo } from 'types';
import { ReturnAPITodo, ReturnAPITodoList } from './type';
import { getStorage } from 'utils/storage';

interface ChangeTodo {
  content?: string;
  isCheck?: boolean;
}

// delay 시간 뒤에 data 를 비동기적으로 리턴
const delayAPI = (data: ReturnAPITodo | ReturnAPITodoList, delay: number) =>
  new Promise<typeof data>(resolve => {
    setTimeout(() => {
      return resolve(data);
    }, delay);
  });

class Server {
  baseUrl: 'http://dummy-server.io/';
  todos: Itodo[];
  constructor() {
    this.baseUrl = 'http://dummy-server.io/';
    this.todos = getStorage('paywork-todo') || [];
  }
  // url 분해
  composition(url: string) {
    const baseUrlStart = url.indexOf(this.baseUrl);
    if (baseUrlStart === 0) {
      return url.slice(this.baseUrl.length).split('/');
    }
    throw new Error('error');
  }

  createTodo(newTodo: Itodo) {
    this.todos.push(newTodo);
    return delayAPI(
      {
        msg: '생성완료',
        todo: newTodo,
      },
      100
    );
  }

  // newState 값이 비었으면 삭제, 있으면 변경
  modifyTodo(id: Itodo['id'], newState: ChangeTodo) {
    if (Object.keys(newState).length) {
      // 변경작업
      this.todos = this.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            ...newState,
          };
        }
        return todo;
      });
      return delayAPI(
        {
          msg: `id-${id}, 변경완료`,
          todo: this.todos.find(todo => todo.id === id),
        },
        100
      );
    } else {
      // 삭제
      const deleted = this.todos.find(todo => todo.id === id);
      this.todos = this.todos.filter(todo => todo.id !== id);
      return delayAPI(
        {
          msg: `id-${id}, 삭제완료`,
          todo: deleted,
        },
        100
      );
    }
  }

  // GET방식 -> 전체 todoList, count
  GET(url: string) {
    const [todo, id] = this.composition(url);
    if (todo === 'todo' && !id) {
      return delayAPI(
        {
          count: this.todos.length,
          todoList: this.todos,
        },
        500
      );
    }
  }

  // POST 방식 -> id 있으면 변경, 아니면 생성
  POST(url: string, request: Partial<Itodo>) {
    const [todo, id] = this.composition(url);
    if (todo === 'todo') {
      if (id) {
        return this.modifyTodo(id, request);
      } else {
        return this.createTodo(request as Itodo);
      }
    }
  }
}
export default new Server();
