import React, { useState } from 'react';
import styled from 'styled-components';
import { Select } from '@rsup/react-ui';
import { Check } from '@rsup/react-icon';

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

const Container = styled.div`
  width: 80%;
  height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const App = () => {
  const [selected, setSelected] = useState('');

  const onChangeSelected = (value: string) => setSelected(value);

  return (
    <Container>
      selected: {selected || '0'}
      <br />
      <Select options={options} onChange={onChangeSelected} />
    </Container>
  );
};

export default App;
