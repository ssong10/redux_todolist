import React from 'react';
import TodoContainer from 'components/TodoContainer';
import styled from 'styled-components';
const App: React.FC = () => {
  return (
    <Layout>
      <TodoContainer />
    </Layout>
  );
};

const Layout = styled.div`
  margin-top: 10%;
  display: flex;
`;
export default App;
