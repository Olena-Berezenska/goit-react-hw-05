import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <div>
      <ul>
        {movies.map(item => (
          <li key={item.id}>
            <Link
              to={`/movies/${item.id}`}
              state={{ from: `${location.pathname}${location.search}` }}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
