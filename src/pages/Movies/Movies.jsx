import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

import * as moviesAPI from 'services/movies-api';

import Searchbar from 'components/Searchbar/Searchbar';
import MovieList from 'components/MovieList/MovieList';
import Message from 'components/Message/ErrorMessage';
import Loader from 'components/Loader';
import { Container } from './Movies.styled';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const queryParams = searchParams.get('query') ?? '';

  const onSubmit = query => {
    setSearchParams(query ? { query } : {});
    setMovies([]);
    setError(false);
  };

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchMovies = async query => {
      try {
        setIsLoading(true);

        const normalizedQuery = query.toLowerCase().trim();
        const fetchedMovies = await moviesAPI.getMovies(
          normalizedQuery,
          signal
        );

        if (!fetchedMovies.length && normalizedQuery) {
          toast.error('No movies found');
          setSearchParams({});
          return;
        }
        setMovies(fetchedMovies);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') setError(true);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    if (queryParams) fetchMovies(queryParams);

    return () => {
      controller.abort();
    };
  }, [queryParams, movies.length, setSearchParams]);

  return (
    <Container>
      <Searchbar
        onSubmit={onSubmit}
        value={queryParams}
        isLoading={isLoading}
      />
      {movies.length > 0 && <MovieList movies={movies} />}
      {isLoading && <Loader />}
      {error && (
        <Message>Oops, something went wrong...Try again later!</Message>
      )}
    </Container>
  );
}

// with onChange
// export default function Movies() {
//   const [movies, setMovies] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(false);
//   const [searchParams, setSearchParams] = useSearchParams();

//   const queryParams = searchParams.get('query') ?? '';

//   const onChange = query => {
//     setSearchParams(query ? { query } : {});
//     setMovies([]);
//     setError(false);
//   };

//   useEffect(() => {
//     try {
//       setIsLoading(true);

//       const fetchMovies = async query => {
//         const normalizedQuery = query.toLowerCase().trim();
//         const fetchedMovies = await moviesAPI.getMovies(normalizedQuery);

//         if (!fetchedMovies.length && normalizedQuery) {
//           alert('No movies found');
//           return;
//         }

//         setMovies(fetchedMovies);
//       };

//       if (queryParams) fetchMovies(queryParams);
//     } catch (error) {
//       setError(true);
//     } finally {
//       setIsLoading(false);
//     }
//   }, [queryParams]);

//   return (
//     <div>
//       <Searchbar onChange={onChange} value={queryParams} />
//       {movies.length > 0 && <MovieList movies={movies} />}
//       {isLoading && <p>Loading...</p>}
//       {error && (
//         <Message>Oops, something went wrong...Try again later!</Message>
//       )}
//     </div>
//   );
// }
