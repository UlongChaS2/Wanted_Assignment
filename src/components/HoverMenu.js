import React from 'react';
import HoverMenuContext from './HoverMenuContext';
import styled from 'styled-components';

export default function HoverMenu() {
  return (
    <Container>
      <Box>
        <ContextUl>
          <ContextLi>
            <HoverMenuContext />
          </ContextLi>
        </ContextUl>
      </Box>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 51px;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: gray;
`;

const Box = styled.div`
  ${({ theme }) => theme.flexSet('center', 'flex-start')};
  width: 100%;
  height: 500px;
  background-color: white;
`;

const ContextUl = styled.ul`
  max-width: 1060px;
  width: 90%;
  margin-top: 50px;
`;

const ContextLi = styled.li`
  ${({ theme }) => theme.flexSet('space-between', 'flex-start')};
`;
