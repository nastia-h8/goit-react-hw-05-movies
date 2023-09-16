import PropTypes from 'prop-types';

function InfoMessage({ children }) {
  return <p>{children}</p>;
}

export default InfoMessage;

InfoMessage.propTypes = {
  children: PropTypes.node.isRequired,
};
