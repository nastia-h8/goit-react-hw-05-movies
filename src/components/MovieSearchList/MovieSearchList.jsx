import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import {
  List,
  StyledLink,
  Item,
  InfoWrapper,
  Title,
  ImgWrapper,
  Img,
  Release,
} from './MovieSearchList.styled';
import placeholder from '../../images/placeholder.jpg';
import { convertDate } from 'helpers/convertDate';

function MovieSearchList({ movies, path = '' }) {
  const location = useLocation();
  return (
    <List>
      {movies.map(({ id, title, poster_path, release_date }) => {
        const movieTitle =
          title.length < 45 ? title : `${title.slice(0, 45)}...`;
        const formattedDate = convertDate(release_date);
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
                />
              </ImgWrapper>
              <InfoWrapper>
                <Title>{movieTitle}</Title>
                <Release>{release_date && formattedDate}</Release>
              </InfoWrapper>
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
