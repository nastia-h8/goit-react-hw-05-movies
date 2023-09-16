import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import * as moviesAPI from 'services/movies-api';

import ReviewsList from './ReviewsList/ReviewsList';
import Loader from './Loader';
import ErrorMessage from './Message/ErrorMessage';
import InfoMessage from './Message/InfoMessage';

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
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {reviews.length > 0 ? (
        <ReviewsList reviews={reviews} />
      ) : (
        <InfoMessage>No reviews yet...</InfoMessage>
      )}
    </>
  );
}
