import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import {
  List,
  StyledLink,
  Item,
  Wrapper,
  Title,
  ImgWrapper,
  Img,
} from './MovieList.styled';
import placeholder from '../../images/placeholder.jpg';

function MovieList({ movies, path = '' }) {
  const location = useLocation();
  console.log(movies);
  return (
    <List>
      {movies.map(({ id, title, poster_path }) => {
        return (
          <Item key={id}>
            <StyledLink to={`${path}${id}`} state={{ from: location }}>
              <ImgWrapper>
                <Img
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w300/${poster_path}`
                      : `${placeholder}`
                  }
                  alt={title}
                  width="250"
                  height="200"
                />
              </ImgWrapper>
              <Wrapper>
                <Title>{title}</Title>
              </Wrapper>
            </StyledLink>
          </Item>
        );
      })}
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
