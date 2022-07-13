import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Select, Text } from '@rsup/react-ui';

const GlobalStyle = createGlobalStyle`
  :root {
    --rsup-primary-color: #16a085;
  }
`;

export default () => (
  <Container>
    <GlobalStyle />
    <Text type="primary">primary color text</Text>
    <Select
      options={[
        { label: 'test', value: '1' },
        { label: 'test2', value: '2' },
        { label: 'test3', value: '3' },
      ]}
    />
  </Container>
);

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
