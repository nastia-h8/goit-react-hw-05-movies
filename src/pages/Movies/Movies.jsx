import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

import * as moviesAPI from 'services/movies-api';

import Searchbar from 'components/Searchbar/Searchbar';
import Message from 'components/Message/ErrorMessage';
import Loader from 'components/Loader';
import { Button, Container } from './Movies.styled';
import MovieSearchList from 'components/MovieSearchList/MovieSearchList';
import { ScrollToTop } from 'components/ScrollToTop/ScrollToTop';

var Scroll = require('react-scroll');
var scroll = Scroll.animateScroll;

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const queryParams = searchParams.get('query') ?? '';
  const handleLoadMore = () => {
    setPage(p => p + 1);
    scroll.scrollMore(350);
  };

  const onSubmit = query => {
    if (queryParams === query) {
      toast.error(`You are already searching - ${query}`);
      return;
    }
    setSearchParams(query ? { query } : {});
    setMovies([]);
    setError(false);
    setPage(1);
  };

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchMovies = async (query, page) => {
      try {
        setIsLoading(true);

        const normalizedQuery = query.toLowerCase().trim();
        const {
          results: fetchedMovies,
          total_pages,
          total_results,
        } = await moviesAPI.getMovies(normalizedQuery, signal, page);

        if (!fetchedMovies.length && normalizedQuery) {
          toast.error('No movies found');
          setSearchParams({});
          return;
        }
        if (page === 1) toast.success(`We found ${total_results} movies`);

        setMovies(m => [...m, ...fetchedMovies]);
        setTotalPages(total_pages);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    if (queryParams) fetchMovies(queryParams, page);

    return () => {
      controller.abort();
    };
  }, [queryParams, setSearchParams, page]);

  return (
    <Container>
      <Searchbar
        onSubmit={onSubmit}
        value={queryParams}
        isLoading={isLoading}
      />
      {movies.length > 0 && (
        <>
          <MovieSearchList movies={movies} />
          {page !== totalPages && (
            <Button
              type="button"
              onClick={handleLoadMore}
              disabled={isLoading ? true : false}
            >
              Load more
            </Button>
          )}
          <ScrollToTop />
        </>
      )}
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
