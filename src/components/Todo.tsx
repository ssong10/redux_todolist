import React from 'react';
import { Itodo } from 'types';
import styled from 'styled-components';
interface TodoProps {
  todo: Itodo;
}
const Todo: React.FC<TodoProps> = ({ todo }) => {
  return (
    <TodoContainer>
      {todo.id}
      {todo.content}
      {todo.isCheck}
    </TodoContainer>
  );
};

const TodoContainer = styled.div`
  border: 1px solid black;
`;

export default Todo;
