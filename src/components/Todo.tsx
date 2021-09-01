import React from 'react';
import { Itodo } from 'types';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { updateCheckTodo } from 'store/actions/todo';

interface TodoProps {
  todo: Itodo;
}
const Todo: React.FC<TodoProps> = ({ todo }) => {
  const dispatch = useDispatch();
  const handlerCheck = () => {
    dispatch(updateCheckTodo(todo.id, !todo.isCheck));
  };
  return (
    <TodoContainer>
      <CheckButton
        type="checkbox"
        checked={todo.isCheck}
        onChange={handlerCheck}
      ></CheckButton>
      {todo.content}
    </TodoContainer>
  );
};

const CheckButton = styled.input`
  margin-right: 8px;
`;
const TodoContainer = styled.div`
  border: 1px solid black;
  border-radius: 3px;
  margin: 8px 0px;
  padding: 16px;
`;

export default Todo;
