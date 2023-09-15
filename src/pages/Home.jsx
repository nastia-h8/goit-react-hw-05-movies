import { useEffect, useState } from 'react';
import * as moviesAPI from 'services/movies-api';
import MovieList from 'components/MovieList';

export default function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setIsLoading(true);

        const fetchedMovies = await moviesAPI.getTrendingMovies();
        setTrendingMovies(fetchedMovies);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Oops, something went wrong...Try again later!</p>}
      {trendingMovies.length > 0 && (
        <MovieList movies={trendingMovies} path="movies/" />
      )}
    </>
  );
}
