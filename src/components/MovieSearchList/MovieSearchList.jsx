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
} from './MovieSearchList.styled';
import placeholder from '../../images/placeholder.jpg';

function MovieSearchList({ movies, path = '' }) {
  const location = useLocation();
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

MovieSearchList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  path: PropTypes.string,
};

export default MovieSearchList;
