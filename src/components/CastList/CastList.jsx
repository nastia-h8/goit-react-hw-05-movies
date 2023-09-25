import PropTypes from 'prop-types';
import placeholder from '../../images/placeholder.jpg';
import { List, Item, Overlay, Name } from './CastList.styled';
import { useEffect } from 'react';
import { smoothScroll } from 'helpers/smoothScroll';

function CastList({ cast }) {
  useEffect(() => {
    smoothScroll('scrollToCastList');
  }, []);

  return (
    <List name="scrollToCastList">
      {cast.map(({ id, name, character, profile_path }) => {
        const profilePath = profile_path
          ? `https://image.tmdb.org/t/p/w200/${profile_path}`
          : placeholder;

        return (
          <Item key={id}>
            <img src={profilePath} alt={name} width="200" />
            <Overlay>
              <Name>{name}</Name>
              <p>{character}</p>
            </Overlay>
          </Item>
        );
      })}
    </List>
  );
}

CastList.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
      profile_path: PropTypes.string,
    })
  ).isRequired,
};

export default CastList;
