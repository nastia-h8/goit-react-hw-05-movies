import PropTypes from 'prop-types';
import { useState } from 'react';

function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleInput = e => setQuery(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    const { query } = e.target.elements;
    if (!query.value) {
      alert('Enter something!');
      return;
    }

    onSubmit(query.value);
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
        <button type="submit">Search</button>
      </form>
    </>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
