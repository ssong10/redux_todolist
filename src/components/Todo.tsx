import React from 'react';
import { Itodo } from 'types';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { updateCheckTodo, deleteTodo } from 'store/actions/todo';

interface TodoProps {
  todo: Itodo;
}
const Todo: React.FC<TodoProps> = ({ todo }) => {
  const dispatch = useDispatch();
  const handlerCheck = () => {
    dispatch(updateCheckTodo(todo.id, !todo.isCheck));
  };
  const handlerDelete = () => {
    dispatch(deleteTodo(todo.id));
  };
  return (
    <TodoContainer>
      <CheckButton
        type="checkbox"
        checked={todo.isCheck}
        onChange={handlerCheck}
      ></CheckButton>
      {todo.content}
      <DeleteButton onClick={handlerDelete}>X</DeleteButton>
    </TodoContainer>
  );
};
const DeleteButton = styled.span`
  margin-left: auto;
  opacity: 0;
  color: #b97575;
  cursor: pointer;
  transition: 0.2s all;
  &:hover {
    opacity: 1;
  }
`;
const CheckButton = styled.input`
  margin-right: 8px;
`;
const TodoContainer = styled.div`
  display: flex;
  border: 1px solid black;
  border-radius: 3px;
  margin: 8px 0px;
  padding: 16px;
`;

export default Todo;
