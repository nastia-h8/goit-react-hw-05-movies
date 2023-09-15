import PropTypes from 'prop-types';

function Searchbar({ value, onChange }) {
  return (
    <>
      <input
        name="query"
        type="text"
        value={value}
        onChange={e => {
          onChange(e.target.value);
        }}
        placeholder="Search movies"
        autoComplete="off"
        autoFocus
      />
    </>
  );
}

Searchbar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Searchbar;

// initial
// function Searchbar({ onSubmit }) {
//   const [query, setQuery] = useState('');
//   const [searchParams, setSearchParams] = useSearchParams();
//   console.log(searchParams);

//   const handleSearchInput = e => {
//     setQuery(e.target.value)

//   };

//   const handleSearchForm = e => {
//     e.preventDefault();
//     if (!query) {
//       alert('Please enter something to search...');
//       return;
//     }

//     const uniqueQuery = `${Date.now()}/${query.toLowerCase().trim()}`;
//     onSubmit(uniqueQuery);
//   };

//   return (
//     <form onSubmit={handleSearchForm}>
//       <input
//         name="query"
//         type="text"
//         value={query}
//         onChange={handleSearchInput}
//         placeholder="Search movies"
//         autoComplete="off"
//         autoFocus
//       />
//       <button type="submit">Search</button>
//     </form>
//   );
// }

// Searchbar.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

// export default Searchbar;
