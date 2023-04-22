import React from 'react'
import styled from 'styled-components';

const InputWrapper = styled.div`
  font-size: 16px;
  text-align: center;
  border-radious: 8px;
`;

const Input = styled.input`
  border-radius: 20px;
  padding: 10px 20px;
  border: 1px solid #ccc;
  font-size: 16px;
  color: #333;
  width: 90%;
  box-sizing: border-box;
  background-color: #f5f5f5;

  &:hover {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`;

const Searcher = ({ search, handleSearch, getMovies }) => {
  return (
    <InputWrapper>
      <Input type="text" value={ search } id="nameMovie" onChange={handleSearch} placeholder="Escribe el nombre de la película" />
      {/* <button onClick={getMovies}>Buscar</button> */}
    </InputWrapper>
  )
}

export default Searcher
