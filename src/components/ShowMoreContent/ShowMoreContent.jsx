import { useState } from 'react';
import { Text, Button } from './ShowMoreContent.styled';
import PropTypes from 'prop-types';

export default function ShowMoreContent({ content }) {
  const [isShowMore, setIsShowMore] = useState(false);

  const handleShowMore = () => setIsShowMore(p => !p);

  const slicedContent = `${content.slice(0, 300)}...`;

  return (
    <>
      <Text>{isShowMore ? content : slicedContent}</Text>
      <Button type="button" onClick={handleShowMore}>
        {isShowMore ? 'Show less' : 'Show more'}
      </Button>
    </>
  );
}

ShowMoreContent.propTypes = {
  content: PropTypes.string.isRequired,
};
