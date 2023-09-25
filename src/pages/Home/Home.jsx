import { useEffect, useState } from 'react';

import * as moviesAPI from 'services/movies-api';

import MovieList from 'components/MovieList/MovieList';
import Loader from 'components/Loader';
import { Container, Title } from './Home.styled';

export default function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchTrendingMovies = async () => {
      try {
        setIsLoading(true);

        const fetchedMovies = await moviesAPI.getTrendingMovies(signal);
        setTrendingMovies(fetchedMovies);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTrendingMovies();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <Container>
      {<Title>Trending today</Title>}
      {isLoading && <Loader />}
      {error && <p>Oops, something went wrong...Try again later!</p>}
      {trendingMovies.length > 0 && (
        <MovieList movies={trendingMovies} path="movies/" />
      )}
    </Container>
  );
}
