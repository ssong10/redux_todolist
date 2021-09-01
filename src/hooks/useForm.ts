import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from 'store/actions/todo';
type ReturnUseForm = [
  string,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  (e: React.FormEvent<HTMLFormElement>) => void
];

const useForm = (initialState: string): ReturnUseForm => {
  const dispatch = useDispatch();
  const [content, setContent] = useState(initialState);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (content) {
      dispatch(addTodo(content));
      setContent('');
    }
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.currentTarget.value);
  };
  return [content, onChange, onSubmit];
};

export default useForm;
