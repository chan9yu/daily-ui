import React from 'react';
import styled from 'styled-components';

import { Text, Title } from '@rsup/react-ui';
import '@rsup/scss/build/global.css';

const Container = styled.div`
  width: 80%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
`;

const App = () => (
  <Container>
    <Text type="primary">test</Text>
  </Container>
);

export default App;
