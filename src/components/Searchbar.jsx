import PropTypes from 'prop-types';
import { useState } from 'react';

function Searchbar({ onSubmit, isLoading }) {
  const [query, setQuery] = useState('');

  const handleInput = e => setQuery(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();

    if (!query) {
      alert('Enter something!');
      return;
    }

    onSubmit(query);
    setQuery('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="query"
          type="text"
          value={query}
          onChange={handleInput}
          placeholder="Search movies"
          autoComplete="off"
          autoFocus
        />
        <button type="submit" disabled={isLoading}>
          Search
        </button>
      </form>
    </>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Searchbar;
