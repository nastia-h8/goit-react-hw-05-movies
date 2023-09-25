import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Mousewheel, Pagination } from 'swiper/modules';
import {
  StyledLink,
  Wrapper,
  Title,
  ImgWrapper,
  Img,
  StyledSwiper,
  StyledSlide,
} from './MovieList.styled';
import placeholder from '../../images/placeholder.jpg';

function MovieList({ movies, path = '' }) {
  const location = useLocation();
  return (
    <StyledSwiper
      spaceBetween={8}
      modules={[Mousewheel, Pagination]}
      slidesPerView={5}
      mousewheel={true}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        280: {
          slidesPerView: 1,
          spaceBetween: 8,
        },
        320: {
          slidesPerView: 2,
          spaceBetween: 8,
        },
        768: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 5,
        },
      }}
    >
      {movies.map(({ id, title, poster_path }) => {
        const poaterPath = poster_path
          ? `https://image.tmdb.org/t/p/w300/${poster_path}`
          : `${placeholder}`;

        const movieTitle =
          title.length < 100 ? title : `${title.slice(0, 100)}...`;
        return (
          <StyledSlide key={id}>
            <StyledLink to={`${path}${id}`} state={{ from: location }}>
              <ImgWrapper>
                <Img src={poaterPath} alt={title} width="250" height="200" />
              </ImgWrapper>
              <Wrapper>
                <Title>{movieTitle}</Title>
              </Wrapper>
            </StyledLink>
          </StyledSlide>
        );
      })}
    </StyledSwiper>
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
