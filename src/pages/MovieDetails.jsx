import { useState, useEffect, useRef, Suspense } from 'react';
import { Outlet, useParams, Link, useLocation } from 'react-router-dom';

import * as moviesAPI from 'services/movies-api';

import MovieInfoCard from 'components/MovieInfoCard';
import Message from 'components/Message';

export default function MovieDetails() {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const location = useLocation();
  const backLinkRef = useRef(location?.state?.from ?? '/');

  useEffect(() => {
    const fetchMovieDetails = async movieId => {
      try {
        setIsLoading(true);

        const fetchedMovieDetails = await moviesAPI.getMovieDetails(movieId);
        setMovie(fetchedMovieDetails);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieDetails(movieId);
  }, [movieId]);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && (
        <Message>Oops, something went wrong...Try again later!</Message>
      )}
      <Link to={backLinkRef.current}>Go back</Link>
      {movie && (
        <>
          <MovieInfoCard movie={movie} />

          <div>
            <h3>Additional Information</h3>
            <Link to="cast">Cast</Link>
            <Link to="reviews">Reviews</Link>

            <Suspense>
              <Outlet />
            </Suspense>
          </div>
        </>
      )}
    </>
  );
}
