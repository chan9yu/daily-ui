import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Button, Text } from '@rsup/react-ui';

const GlobalStyle = createGlobalStyle`
  :root {
    --rsup-primary-color: #16a085;
  }
`;

export default () => (
  <Container>
    <GlobalStyle />
    <br />
    <Button size="sm" animation>
      Normal
    </Button>
    <br />
    <Button size="base" type="success" outline>
      Normal
    </Button>
    <br />
    <Button size="lg" type="error" outline>
      Normal
    </Button>
    <br />
    <Button size="lg" disabled type="secondary" fullSize animation radius="round">
      Normal
    </Button>
  </Container>
);

const Container = styled.div`
  width: 80%;
  height: 100vh;
  margin: auto;
`;
