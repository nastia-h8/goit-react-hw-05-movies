import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { List, StyledLink } from './MovieList.styled';
import { AiFillPlayCircle } from 'react-icons/ai';

function MovieList({ movies, path = '' }) {
  const location = useLocation();

  return (
    <List>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <StyledLink to={`${path}${id}`} state={{ from: location }}>
            <AiFillPlayCircle size={20} />
            <span>{title}</span>
          </StyledLink>
        </li>
      ))}
    </List>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  path: PropTypes.string,
};

export default MovieList;
