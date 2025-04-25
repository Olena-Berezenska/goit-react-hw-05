import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsById } from '../../services/apiRequest';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setreviews] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchReviewsById(movieId);
        setreviews(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [movieId]);
  return (
    <div>
      <ul>
        {reviews.map(item => (
          <li key={item.id}>
            <h4>
              {item.author} ({item.created_at})
            </h4>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
