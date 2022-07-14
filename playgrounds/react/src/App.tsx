import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Button, Select, Text } from '@rsup/react-ui';

const options = [
  {
    value: '1',
    label: '하나',
  },
  {
    value: '2',
    label: '둘',
  },
  {
    value: '21',
    label: '둘',
  },
  {
    value: '22',
    label: '둘',
  },
  {
    value: '23',
    label: '둘',
  },
];

const GlobalStyle = createGlobalStyle`
  :root {
    --rsup-primary-color: #16a085;
  }
`;

export default () => (
  <Container>
    <GlobalStyle />
    <br />
    <Select options={options} />
  </Container>
);

const Container = styled.div`
  width: 80%;
  height: 100vh;
  margin: auto;
`;
