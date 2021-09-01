import React from 'react';
import { useSelector } from 'react-redux';
import { Message } from 'types';
import { AppState } from 'store';
import styled from 'styled-components';

const Toast: React.FC = () => {
  const message = useSelector<AppState, Message>(state => state.message);

  return <>{message.isShow && <ToastWrap>{message.text}</ToastWrap>}</>;
};

const ToastWrap = styled.div`
  position: absolute;
  border-radius: 3px;
  background-color: #d3d3ff;
  font-size: 14px;
  font-weight: 600;
  padding: 14px;
  top: 20px;
  right: 20px;
`;

export default Toast;
