import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

import HeaderContainer from './HeaderContainer';
import Searcher from './Searcher';
import Movie from './Movie';

const ContainerStyles = styled.div`
  background-color: whitesmoke;
`;

const MoviesGrid = styled.div`
  background-color: papayawhip;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  padding: 20px;
  max-width: 1000px;
  margin: 12px auto;
`;

function Container() {
  const [moviesList, setMoviesList] = useState([]);
  const [search, setSearch] = useState("");
  const [lastSearch, setLastSearch] = useState("");

  const APY_KEY = "tuapikey";
  const URL = `https://www.omdbapi.com/?apikey=${APY_KEY}&s=${search}`;

  /* 
   * Genera un delay cada vez cambian los estados search o lastsearch para evitar
   * Que se generen muchas búsquedas consecutivas
  */
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      handleSearch(search);
    }, 800);

    return () => clearTimeout(delayDebounceFn);
  }, [search, lastSearch]);

  async function getMovies() {
    //Valida que se haya escrito algo para buscar y que la búsqueda sea distinta de la ultima
    if(search !== "" && search !== lastSearch) {
      try {
        const response = await axios.get(URL);

        if(response.data.Response === "True") {
          setMoviesList(response.data.Search);
        }
        else{
          setMoviesList([]);
        }
          
      } catch (error) {
        setMoviesList([]);
      }

      // Actualiza el estado que guarda la ultima búsqueda para comparar con la siguiente
      setLastSearch(search);
    }
  }

  const handleSearch = (event) => {
    if(event.target) {
      setSearch(event.target.value);
      getMovies();
    }
  };

  return (
    <ContainerStyles>
      <div>
        <div>
          <HeaderContainer />
        </div>

        <div className='container--searcher'>
          <Searcher
            search = {search}
            handleSearch = {handleSearch}
            getMovies = {getMovies}
          />
        </div>

        <MoviesGrid>
          {moviesList.map((movie) => (
            <Movie
              key={movie.imdbID}
              title={movie.Title}
              year={movie.Year}
              poster={movie.Poster}
            />
          ))}
        </MoviesGrid>
      </div>
    </ContainerStyles>
  )
}

export default Container
