import React, { useEffect, useState, useRef } from 'react';
import {
  NavLink,
  Outlet,
  useLocation,
  useParams,
  useNavigate,
} from 'react-router-dom';
import { fetchMovieById } from '../../services/apiRequest';
import s from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  // Зберігаємо посилання на місце, звідки прийшли (тільки один раз при завантаженні компонента)
  const backLinkLocationRef = useRef(location.state?.from || '/movies');

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchMovieById(movieId);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [movieId]);

  const handleGoBack = () => {
    navigate(backLinkLocationRef.current);
  };

  return (
    <div>
      <button onClick={handleGoBack}>Go back</button>
      <div className={s.detailwrapper}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div>
          <h2>
            {movie.title} ({movie.release_date})
          </h2>
          <p>User Score: {movie.popularity}</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genre</h3>
          <p>{movie.genres?.map(genre => genre.name).join(', ')}</p>
        </div>
      </div>
      <nav className={s.navwraper}>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Review</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
