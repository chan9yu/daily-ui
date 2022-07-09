import React from 'react';
import styled from 'styled-components';

import { Title } from '@rsup/react-ui';
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
    <Title color="default">test</Title>
    <Title color="error">test</Title>
    <Title color="primary">test</Title>
    <Title color="secondary">test</Title>
    <Title color="success">test</Title>
    <Title color="white">test</Title>
  </Container>
);

export default App;
