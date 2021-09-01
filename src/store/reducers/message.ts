import {
  SET_MESSAGE,
  HIDE_MESSAGE,
  MessageActionTypes,
} from 'store/actions/types';
import { Message } from 'types';

const INITIAL_STATE: Message = {
  text: '',
  isShow: false,
};

export default function message(
  state: Message = INITIAL_STATE,
  action: MessageActionTypes
): Message {
  switch (action.type) {
    case SET_MESSAGE:
      return {
        text: action.payload.text,
        isShow: true,
      };
    case HIDE_MESSAGE:
      return {
        text: '',
        isShow: false,
      };
    default:
      return state;
  }
}
