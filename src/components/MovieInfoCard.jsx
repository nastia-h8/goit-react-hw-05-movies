import PropTypes from 'prop-types';
import placeholder from '../images/placeholder.jpg';

function MovieInfoCard({ movie }) {
  const { poster_path, title, overview, genres, vote_average } = movie;

  const genresList =
    genres.length > 0
      ? genres.map(genre => genre.name).join(', ')
      : 'No genres provided';
  const score = vote_average ? Math.round((vote_average / 10) * 100) + '%' : 0;

  return (
    <div>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w300/${poster_path}`
            : `${placeholder}`
        }
        alt={title}
      />
      <h2>{title}</h2>
      <p>Score: {score}</p>
      <div>
        <b>Overview</b>
        <p>{overview ? overview : 'No overview yet...'}</p>
      </div>
      <div>
        <b>Genres</b>
        <p>{genresList}</p>
      </div>
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
  }).isRequired,
};

export default MovieInfoCard;
