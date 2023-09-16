import { useState, useEffect, useRef, Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { AiFillLeftSquare } from 'react-icons/ai';

import * as moviesAPI from 'services/movies-api';

import MovieInfoCard from 'components/MovieInfoCard/MovieInfoCard';
import Message from 'components/Message/ErrorMessage';
import Loader from 'components/Loader';
import {
  AddInfoWrapper,
  StyledLink,
  StyledBackLink,
  List,
  Container,
} from './MovieDetails.styled';

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
      {isLoading && <Loader />}
      {error && (
        <Message>Oops, something went wrong...Try again later!</Message>
      )}

      <Container>
        <StyledBackLink to={backLinkRef.current}>
          <AiFillLeftSquare size={20} /> Go back
        </StyledBackLink>
      </Container>

      {movie && (
        <>
          <MovieInfoCard movie={movie} />

          <AddInfoWrapper>
            <h3>Additional Information</h3>
            <List>
              <li>
                <StyledLink to="cast">Cast</StyledLink>
              </li>
              <li>
                <StyledLink to="reviews">Reviews</StyledLink>
              </li>
            </List>

            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </AddInfoWrapper>
        </>
      )}
    </>
  );
}
