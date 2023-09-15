import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import * as moviesAPI from 'services/movies-api';

import Searchbar from 'components/Searchbar';
import MovieList from 'components/MovieList';
import Message from 'components/Message';

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
    try {
      setIsLoading(true);

      const fetchMovies = async query => {
        const normalizedQuery = query.toLowerCase().trim();
        const fetchedMovies = await moviesAPI.getMovies(normalizedQuery);

        if (!fetchedMovies.length && normalizedQuery) {
          alert('No movies found');
          return;
        }

        setMovies(fetchedMovies);
      };

      if (queryParams) fetchMovies(queryParams);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }, [queryParams]);

  return (
    <div>
      <Searchbar onSubmit={onSubmit} value={queryParams} />
      {movies.length > 0 && <MovieList movies={movies} />}
      {isLoading && <p>Loading...</p>}
      {error && (
        <Message>Oops, something went wrong...Try again later!</Message>
      )}
    </div>
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
