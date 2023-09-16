import PropTypes from 'prop-types';
import placeholder from '../../images/placeholder.jpg';
import { List, Item, Overlay, Name } from './CastList.styled';

function CastList({ cast }) {
  return (
    <List>
      {cast.map(({ id, name, character, profile_path }) => (
        <Item key={id}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                : `${placeholder}`
            }
            alt={name}
            width="200"
          />
          <Overlay>
            <Name>{name}</Name>
            <p>{character}</p>
          </Overlay>
        </Item>
      ))}
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
