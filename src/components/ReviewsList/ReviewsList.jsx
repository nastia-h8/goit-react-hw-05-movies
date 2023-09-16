import PropTypes from 'prop-types';
import { useState } from 'react';
import { List, Author, Text, Button } from './ReviewsList.styled';

function ReviewsList({ reviews }) {
  const [reviewId, setReviewId] = useState('');

  const handleShowMore = id => setReviewId(id);

  return (
    <List>
      {reviews.map(({ id, author = 'Unknown author', content }) => {
        const isShowedMore = id === reviewId;
        return (
          <li key={id}>
            <Author>
              <span>A review by: </span>
              {author}
            </Author>

            <Text>
              {isShowedMore ? content : `${content.slice(0, 250)}...`}
            </Text>
            {isShowedMore ? (
              <Button type="button" onClick={() => handleShowMore(0)}>
                Show less
              </Button>
            ) : (
              <Button type="button" onClick={() => handleShowMore(id)}>
                Show more
              </Button>
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
