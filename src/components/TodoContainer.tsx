import React, { useEffect } from 'react';
import Todo from 'components/Todo';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodo } from 'store/actions/todo';
import { AppState } from 'store';
import { TodoState } from 'store/reducers/todos';
const TodoContainer: React.FC = () => {
  const dispatch = useDispatch();
  const todoState = useSelector<AppState, TodoState>(state => state.todos);
  useEffect(() => {
    console.log('😊 INIT - fetch_todo');
    dispatch(fetchTodo());
  }, []);
  return (
    <div>
      {todoState.todoList.map(todo => (
        <Todo key={todo.id} todo={todo}></Todo>
      ))}
    </div>
  );
};

export default TodoContainer;
