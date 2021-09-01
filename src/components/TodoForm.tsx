import React from 'react';
import useForm from 'hooks/useForm';
import styled from 'styled-components';

const TodoForm: React.FC = () => {
  const [content, handlerChange, handlerSubmit] = useForm('');
  return (
    <Form onSubmit={handlerSubmit}>
      <Input onChange={handlerChange} value={content} />
    </Form>
  );
};
const Input = styled.input`
  padding: 8px;
  min-width: 200px;
`;
const Form = styled.form`
  text-align: center;
  margin-bottom: 20px;
`;
export default TodoForm;
