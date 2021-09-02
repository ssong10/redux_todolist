import {
  SET_MESSAGE,
  HIDE_MESSAGE,
  MessageActionTypes,
} from 'store/actions/types';
import { Message } from 'types';

const INITIAL_STATE: Message = {
  messages: [],
  count: 0,
  raise: false,
};

export default function message(
  state: Message = INITIAL_STATE,
  action: MessageActionTypes
): Message {
  switch (action.type) {
    case SET_MESSAGE:
      return {
        messages: [action.payload, ...state.messages],
        count: state.count + 1,
        raise: true,
      };
    case HIDE_MESSAGE:
      return {
        messages: state.messages.slice(0, state.count - 1),
        count: state.count - 1,
        raise: false,
      };
    default:
      return state;
  }
}
