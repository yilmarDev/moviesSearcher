import React from 'react';
import styled from 'styled-components';

const HeaderContainerStyles = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-width: 320px;
  height: 120px;
`;

const Title = styled.h1`
  font-size: 24px;
  text-align: center;
`;

const HeaderContainer = () => {
  return (
    <HeaderContainerStyles>
    <div>
      <Title>Bienvenido al buscador de películas</Title>
    </div>    
    </HeaderContainerStyles>
  )
}

export default HeaderContainer