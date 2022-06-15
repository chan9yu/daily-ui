import React from 'react';
import { Button } from '@rsup/design';
import styled from 'styled-components';
import emotion from '@emotion/styled';

const MyButton = styled(Button)`
  background-color: red;
`;

const MyButton2 = emotion(Button)`
  background-color: #333;
`;

const App = () => {
  return (
    <>
      <Button onClick={() => console.log('test')} type="button">
        Normal
      </Button>
      <br />
      <MyButton2>Normal</MyButton2>
      <br />
      <MyButton>Normal</MyButton>
    </>
  );
};

export default App;
