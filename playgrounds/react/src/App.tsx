import styled from 'styled-components';
import { Select } from '@rsup/react-ui';
import { useState } from 'react';

const options = ['jebong', 'changyu', 'hosu'];

const Container = styled.div`
  width: 80%;
  height: 100vh;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  const [Selected, setSelected] = useState('');

  const handleSelect = (e) => setSelected(e.target.value);

  return (
    <Container>
      <Select options={options} />
    </Container>
  );
};

export default App;
