import React, { useEffect } from 'react';
import styled from 'styled-components';
import Todo from 'components/Todo';
import TodoForm from 'components/TodoForm';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodo } from 'store/actions/todo';
import { TodoState } from 'types';
import { AppState } from 'store';

const TodoContainer: React.FC = () => {
  const dispatch = useDispatch();
  const todoState = useSelector<AppState, TodoState>(state => state.todos);
  useEffect(() => {
    console.log('😊 INIT - fetch_todo');
    dispatch(fetchTodo());
  }, []);
  return (
    <TodoWrapper>
      <TodoForm />
      <TodoList>
        {todoState.todoList.map(todo => (
          <Todo key={todo.id} todo={todo}></Todo>
        ))}
      </TodoList>
    </TodoWrapper>
  );
};

const TodoWrapper = styled.div`
  margin-top: 10%;
  min-width: 300px;
  margin: 100px auto;
`;

const TodoList = styled.div`
  min-width: 300px;
`;
export default TodoContainer;
