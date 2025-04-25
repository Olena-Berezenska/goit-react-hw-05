import axios from 'axios';

export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjZkNTdhOGFjOGM1YzEzZTY5MzlkNDllNmY4MjQ5YyIsIm5iZiI6MTc0NTM4NDUxMy44NzIsInN1YiI6IjY4MDg3NDQxMjc2YmY2NGU0MWFiM2VhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CdTPDgjhC8jApY0TZ7aBclxadxmVDTOZqKBFSVGa26w',
  },
};
export const fetchtrMovies = async () => {
  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
      options
    );
    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    throw error;
  }
};
export const fetchSearchMovies = async query => {
  const encodedQuery = encodeURIComponent(query);
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${encodedQuery}`,
      options
    );
    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching searching movies:', error);
    throw error;
  }
};
export const fetchMovieById = async id => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      options
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching moviebyId:', error);
    throw error;
  }
};
export const fetchReviewsById = async id => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`,
      options
    );
    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching moviereviews:', error);
    throw error;
  }
};
export const fetchCastById = async id => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits`,
      options
    );
    console.log(response.data.cast);
    return response.data.cast;
  } catch (error) {
    console.error('Error fetching moviereviews:', error);
    throw error;
  }
};
