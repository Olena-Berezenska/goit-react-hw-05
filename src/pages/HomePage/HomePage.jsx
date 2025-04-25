import React, { useEffect, useState } from 'react';
import { fetchtrMovies } from '../../services/apiRequest';
import MovieList from '../../components/MovieList/MovieList';

const HomePage = () => {
  const [trMovies, settrMovies] = useState([]);

  useEffect(() => {
    const gettrMovies = async () => {
      try {
        const trMovies = await fetchtrMovies();
        settrMovies(trMovies);
      } catch (error) {
        console.log(error);
      }
    };
    gettrMovies();
  }, []);
  return (
    <>
      <MovieList movies={trMovies} />
    </>
  );
};

export default HomePage;
