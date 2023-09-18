import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import * as moviesAPI from 'services/movies-api';

import CastList from './CastList/CastList';
import Loader from './Loader';
import ErrorMessage from './Message/ErrorMessage';
import InfoMessage from './Message/InfoMessage';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchMovieCast = async movieId => {
      try {
        setIsLoading(true);

        const fetchedCast = await moviesAPI.getMovieCast(movieId, signal);
        setCast(fetchedCast);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieCast(movieId);

    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <>
      {cast.length > 0 ? (
        <CastList cast={cast} />
      ) : (
        <InfoMessage>No cast added...</InfoMessage>
      )}

      {isLoading && <Loader />}
      {error && <ErrorMessage />}
    </>
  );
}
