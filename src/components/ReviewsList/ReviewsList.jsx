import PropTypes from 'prop-types';
import {
  List,
  Author,
  Text,
  InfoDate,
  Avatar,
  InfoRating,
  AuthorInfo,
} from './ReviewsList.styled';
import ShowMoreContent from 'components/ShowMoreContent/ShowMoreContent';
import placeholder from '../../images/user-placeholder.jpg';
import { AiFillStar } from 'react-icons/ai';
import { convertDate } from 'helpers/convertDate';

function ReviewsList({ reviews }) {
  return (
    <List>
      {reviews.map(
        ({
          id,
          author = 'Unknown author',
          content,
          author_details,
          created_at,
        }) => {
          const isContentShort = content?.length < 300;

          const rating =
            Number(author_details?.rating) < 10
              ? `${author_details.rating}.0`
              : author_details.rating;

          const avatarPath = author_details.avatar_path
            ? `https://image.tmdb.org/t/p/original/${author_details.avatar_path}`
            : placeholder;

          const formattedDate = convertDate(created_at);
          return (
            <li key={id}>
              <Author>
                <Avatar src={avatarPath} alt={author_details.name} />
                <AuthorInfo>
                  <p>
                    <span>A review by: </span>
                    {author}
                  </p>
                  {author_details.rating && (
                    <InfoRating>
                      <AiFillStar />
                      {rating}
                    </InfoRating>
                  )}
                  {created_at && (
                    <InfoDate>
                      <span>Written on: </span>
                      {formattedDate}
                    </InfoDate>
                  )}
                </AuthorInfo>
              </Author>
              {isContentShort ? (
                <Text>{content}</Text>
              ) : (
                <ShowMoreContent content={content} />
              )}
            </li>
          );
        }
      )}
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
