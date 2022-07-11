import { useState } from 'react';
import styled from 'styled-components';
import { Select } from '@rsup/react-ui';

const options = [
  {
    value: '1',
    label: 'jebong',
  },
  {
    value: '2',
    label: 'hosu',
  },
  {
    value: '3',
    label: 'changyu',
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
      <Select options={options} onChange={onChangeSelected} />
    </Container>
  );
};

export default App;
