import React from 'react';

import { Button } from '@rsup/ui';
import '@rsup/styles/build/global.css';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <Container>
      <Button>Normal</Button>
      <br />
      <a href="">test</a>
    </Container>
  );
};

export default App;
