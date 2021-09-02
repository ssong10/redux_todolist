import uuid from 'utils/uuid';
import { SET_MESSAGE, HIDE_MESSAGE } from './types';
import { MessageActionTypes } from './types';
export const setMessage = (message: string): MessageActionTypes => {
  return {
    type: SET_MESSAGE,
    payload: {
      text: message,
      id: uuid(),
    },
  };
};

export const hideMessage = (): MessageActionTypes => {
  return {
    type: HIDE_MESSAGE,
  };
};