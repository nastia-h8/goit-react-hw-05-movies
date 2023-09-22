import PropTypes from 'prop-types';
import placeholder from '../../images/placeholder.jpg';
import InfoMessage from '../Message/InfoMessage';
import {
  Container,
  ImgWrapper,
  InfoWrapper,
  Overview,
} from './MovieInfoCard.styled';
import { convertTime } from 'helpers/convertTime';
import ScoreBar from 'components/ScoreBar/ScoreBar';

function MovieInfoCard({ movie }) {
  const {
    poster_path,
    backdrop_path,
    title,
    overview,
    genres,
    vote_average,
    release_date,
    runtime = 0,
  } = movie;

  const backdrop = backdrop_path
    ? `linear-gradient(rgba(47,48,58,0.8), rgba(47,48,58,0.8)), url(https://image.tmdb.org/t/p/original/${backdrop_path})`
    : 'linear-gradient(rgba(47,48,58,0.8), rgba(47,48,58,0.8))';

  const genresList =
    genres.length > 0
      ? genres.map(genre => genre.name).join(', ')
      : 'No genres provided...';

  const releaseYear = release_date ? `(${release_date.split('-')[0]})` : '';
  const filmDuration = convertTime(runtime);
  const score = vote_average ? Math.round((vote_average / 10) * 100) : 0;
  return (
    <div
      style={{
        backgroundImage: backdrop,
        backgroundSize: 'cover',
      }}
    >
      <Container>
        <ImgWrapper>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w300/${poster_path}`
                : `${placeholder}`
            }
            alt={title}
            width="250"
          />
        </ImgWrapper>
        <InfoWrapper>
          <h2>
            {title}&nbsp;
            {releaseYear}
          </h2>
          <div>
            <span>{genresList}</span>
            {runtime > 0 && <span> &#183; {filmDuration}</span>}
          </div>
          <ScoreBar score={score} />
          <div>
            <Overview>Overview</Overview>
            {overview ? (
              <p>{overview}</p>
            ) : (
              <InfoMessage>No overview yet...</InfoMessage>
            )}
          </div>
        </InfoWrapper>
      </Container>
    </div>
  );
}

MovieInfoCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.object).isRequired,
    vote_average: PropTypes.number.isRequired,
    release_date: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieInfoCard;
