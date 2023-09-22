import PropTypes from 'prop-types';
import { List, Author, Text } from './ReviewsList.styled';
import ShowMoreContent from 'components/ShowMoreContent/ShowMoreContent';

function ReviewsList({ reviews }) {
  return (
    <List>
      {reviews.map(({ id, author = 'Unknown author', content }) => {
        const isContentShort = content?.length < 300;
        return (
          <li key={id}>
            <Author>
              <span>A review by: </span>
              {author}
            </Author>
            {isContentShort ? (
              <Text>{content}</Text>
            ) : (
              <ShowMoreContent content={content} />
            )}
          </li>
        );
      })}
    </List>
  );
}

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ReviewsList;
