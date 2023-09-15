import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import * as moviesAPI from 'services/movies-api';

import CastList from './CastList';
import Message from './Message';
import React from 'react';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      setIsLoading(true);

      const fetchMovieCast = async movieId => {
        const fetchedCast = await moviesAPI.getMovieCast(movieId);
        setCast(fetchedCast);
      };

      fetchMovieCast(movieId);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }, [movieId]);

  return (
    <>
      {cast.length > 0 ? (
        <CastList cast={cast} />
      ) : (
        <Message>No cast added...</Message>
      )}

      {isLoading && <p>Loading...</p>}

      {error && (
        <Message>Oops, something went wrong...Try again later!</Message>
      )}
    </>
  );
}
