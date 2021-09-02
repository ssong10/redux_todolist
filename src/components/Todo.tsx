import React, { useState } from 'react';
import { Itodo } from 'types';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import {
  updateCheckTodo,
  updateContentTodo,
  deleteTodo,
} from 'store/actions/todo';

interface TodoProps {
  todo: Itodo;
}
const Todo: React.FC<TodoProps> = ({ todo }) => {
  const [isEdit, setEdit] = useState(false);
  const toggleEdit = () => setEdit(prev => !prev);
  const dispatch = useDispatch();
  const handlerCheck = () => {
    dispatch(updateCheckTodo(todo.id, !todo.isCheck));
  };
  const handlerDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handlerEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      dispatch(updateContentTodo(todo.id, e.currentTarget.value));
      setEdit(false);
    }
  };
  return (
    <TodoContainer>
      {isEdit ? (
        <EditInput
          autoFocus
          onKeyPress={handlerEnter}
          defaultValue={todo.content}
          onBlur={toggleEdit}
        />
      ) : (
        <TodoItem onDoubleClick={toggleEdit}>
          <CheckButton
            type="checkbox"
            checked={todo.isCheck}
            onChange={handlerCheck}
          ></CheckButton>
          <Content>{todo.content}</Content>
          <DeleteButton onClick={handlerDelete}>X</DeleteButton>
        </TodoItem>
      )}
    </TodoContainer>
  );
};
const TodoItem = styled.div`
  box-sizing: border-box;
  width: 100%;

  display: flex;
  padding: 16px;
`;
const Content = styled.span`
  width: 100%;
`;
const EditInput = styled.input`
  box-sizing: border-box;
  padding: 16px;
  margin-left: 32px;
`;
const DeleteButton = styled.span`
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
  box-sizing: border-box;
  min-height: 36px;
  margin: 8px 0px;
`;
export default React.memo(Todo);
