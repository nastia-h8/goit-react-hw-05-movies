import PropTypes from 'prop-types';
import placeholder from '../../images/placeholder.jpg';
import ScoreBar from 'components/ScoreBar/ScoreBar';
import { convertTime } from 'helpers/convertTime';
import { convertDate } from 'helpers/convertDate';
import { BiLinkExternal } from 'react-icons/bi';
import {
  Container,
  ImgWrapper,
  InfoWrapper,
  Overview,
  InnerWrapper,
} from './MovieInfoCard.styled';

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
    tagline,
    homepage,
  } = movie;

  const backdrop = backdrop_path
    ? `linear-gradient(rgba(47,48,58,0.8), rgba(47,48,58,0.8)), url(https://image.tmdb.org/t/p/original/${backdrop_path})`
    : 'linear-gradient(rgba(47,48,58,0.8), rgba(47,48,58,0.8))';

  const genresList =
    genres.length > 0
      ? genres.map(genre => genre.name).join(', ')
      : 'No genres provided';

  const formattedYear = release_date ? `(${release_date.split('-')[0]})` : '';
  const formattedDate = convertDate(release_date);

  const movieOverview = overview ? overview : 'No overviews yet...';
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
          <InnerWrapper>
            <h2>
              {title}&nbsp;
              {formattedYear}
            </h2>
            {homepage && (
              <a
                href={homepage}
                target="_blank"
                rel="noopener noreferrer"
                title="Go to the official website"
              >
                <BiLinkExternal size={20} />
              </a>
            )}
          </InnerWrapper>
          {tagline && <i>{tagline}</i>}
          <div>
            {release_date && <span>{formattedDate} &#183; </span>}
            {genresList && <span> {genresList}</span>}
            {runtime > 0 && <span> &#183; {filmDuration}</span>}
          </div>
          <ScoreBar score={score} />
          <div>
            <Overview>Overview</Overview>
            <p>{movieOverview}</p>
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
