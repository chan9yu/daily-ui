import React from 'react';
import styled from 'styled-components';

import { Button } from '@rsup/ui';
import '@rsup/styles/build/global.css';

const Container = styled.div`
  width: 80%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
`;

const Gird = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const App = () => {
  return (
    <Container>
      <Gird>
        <Button type="primary">Normal</Button>
        <Button type="default">Normal</Button>
        <Button type="dashed">Normal</Button>
        <Button type="text">Normal</Button>
        {/* disabled */}
        <Button type="primary" disabled>
          Dimmed
        </Button>
        <Button type="default" disabled>
          Dimmed
        </Button>
        <Button type="dashed" disabled>
          Dimmed
        </Button>
        <Button type="text" disabled>
          Dimmed
        </Button>
      </Gird>

      {/* size */}
      <Group>
        {/* 40px */}
        <Button type="text" size="large">
          Normal
        </Button>
        {/* 32px */}
        <Button type="default" size="middle">
          Normal
        </Button>
        {/* 28px */}
        <Button type="primary" size="small">
          Normal
        </Button>
      </Group>

      {/* view mode */}
      <Group>
        {/* 40px */}
        <Button viewMode>Normal</Button>
      </Group>
    </Container>
  );
};

export default App;
