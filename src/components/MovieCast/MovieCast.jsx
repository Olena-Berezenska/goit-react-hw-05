import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastById } from '../../services/apiRequest';
import s from './MovieCast.module.css';

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setcast] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchCastById(movieId);
        setcast(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [movieId]);

  return (
    <div>
      <ul className={s.castlist}>
        {cast.map(item => (
          <li key={item.id} className={s.castitem}>
            <h4>{item.name}</h4>
            <p>character: {item.character}</p>
            <img
              src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
              alt={item.name}
              className={s.castimg}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
