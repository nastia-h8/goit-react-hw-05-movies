import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import * as moviesAPI from 'services/movies-api';

import ReviewsList from './ReviewsList';
import Message from './Message';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      setIsLoading(true);

      const fetchMovieReviews = async movieId => {
        const fetchedReviews = await moviesAPI.getMovieReviews(movieId);
        setReviews(fetchedReviews);
      };

      fetchMovieReviews(movieId);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }, [movieId]);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && (
        <Message>Oops, something went wrong...Try again later!</Message>
      )}
      {reviews.length > 0 ? (
        <ReviewsList reviews={reviews} />
      ) : (
        <Message>No reviews yet...</Message>
      )}
    </>
  );
}
