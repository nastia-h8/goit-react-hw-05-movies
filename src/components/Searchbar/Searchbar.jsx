import PropTypes from 'prop-types';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiOutlineSearch } from 'react-icons/ai';
import { Form, Input, Button } from './Searchbar.styled';

function Searchbar({ onSubmit, isLoading }) {
  const [query, setQuery] = useState('');

  const handleInput = e => setQuery(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();

    if (!query) {
      toast('Please enter something to search...', { icon: '🟡' });
      return;
    }

    onSubmit(query);
    setQuery('');
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          name="query"
          type="text"
          value={query}
          onChange={handleInput}
          placeholder="Search movies"
          autoComplete="off"
          autoFocus
        />
        <Button type="submit" disabled={isLoading}>
          <AiOutlineSearch size={20} />
        </Button>
      </Form>
    </>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Searchbar;
