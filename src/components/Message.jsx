import PropTypes from 'prop-types';

function Message({ children }) {
  return <b>{children}</b>;
}

Message.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Message;
