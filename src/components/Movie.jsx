import React from 'react';
import styled from 'styled-components';

const MovieCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  max-width: 300px;
`;
const MovieTitle = styled.h3`
  font-size: 16px;
  text-align: center;
`;

const Movie = ({ title, year, poster }) => {

  return (
      <MovieCard>
        <div>
          <img src={poster} width="300px" />
        </div>
        <MovieTitle>{title} - {year}</MovieTitle> 
      </MovieCard>
  )
}

export default Movie
