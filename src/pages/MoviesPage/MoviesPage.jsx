import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from '../../services/apiRequest';
import MovieList from '../../components/MovieList/MovieList';

const MoviesPage = () => {
  const [filter, setFilter] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  useEffect(() => {
    if (!query) return;

    const getMovies = async () => {
      try {
        const searchData = await fetchSearchMovies(query);
        setSearchMovies(searchData);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    getMovies();
  }, [query]);

  const handleChangeInput = e => {
    setFilter(e.target.value);
  };

  const handleSearch = () => {
    if (filter.trim() === '') return;
    setSearchParams({ query: filter });
  };

  return (
    <div>
      <input type="text" value={filter} onChange={handleChangeInput} />
      <button onClick={handleSearch}>Search</button>
      <MovieList movies={searchMovies} />
    </div>
  );
};

export default MoviesPage;
