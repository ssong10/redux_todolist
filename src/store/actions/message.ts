import uuid from 'utils/uuid';
import { SET_MESSAGE, HIDE_MESSAGE } from './types';
import { MessageActionTypes } from './types';

// message 값을 이용하여 생성 하는 reducer 생성
export const setMessage = (message: string): MessageActionTypes => {
  return {
    type: SET_MESSAGE,
    payload: {
      text: message,
      id: uuid(),
    },
  };
};

// message 를 숨기는 reducer 생성
export const hideMessage = (): MessageActionTypes => {
  return {
    type: HIDE_MESSAGE,
  };
};
