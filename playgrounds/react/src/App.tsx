import React from 'react';
import styled from 'styled-components';

import { Space, Text, Title } from '@rsup/react-ui';
import '@rsup/scss/build/global.css';

const Container = styled.div`
  width: 80%;
  height: 100vh;
  margin: auto;
`;

const App = () => (
  <Container>
    <Space type="margin" side="x">
      <Title>Title</Title>
    </Space>
    <Space type="padding" side="y">
      <Text type="primary">Text</Text>
    </Space>
  </Container>
);

export default App;
