import React from 'react';
import { useSelector } from 'react-redux';
import { Message } from 'types';
import { AppState } from 'store';
import styled from 'styled-components';
import { MoveDown, FadeOut } from 'styles/Toast';

const Toast: React.FC = () => {
  const messageState = useSelector<AppState, Message>(state => state.message);
  return (
    <ToastContainer>
      <MessageList raise={messageState.raise} count={messageState.count}>
        {messageState.messages.map(message => (
          <MessageWrap key={message.id}>{message.text}</MessageWrap>
        ))}
      </MessageList>
    </ToastContainer>
  );
};

const MessageList = styled.div<{ count: number; raise: boolean }>`
  ${props => props.raise && MoveDown(props.count)};
`;

const ToastContainer = styled.div`
  display: flex;
  position: absolute;
  font-size: 14px;
  font-weight: 600;
  top: 20px;
  right: 20px;
  gap: 8px;
  overflow: hidden;
  height: 50%;
`;

const MessageWrap = styled.div`
  margin: 8px;
  padding: 14px;
  border-radius: 3px;
  background-color: #d3d3ff;
  width: 150px;
  text-align: center;
  color: #fdf3fc;
  ${FadeOut}
`;

export default Toast;
