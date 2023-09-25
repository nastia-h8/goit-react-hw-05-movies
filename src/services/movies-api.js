import axios from 'axios';

const options = {
  params: {
    api_key: '5c432334b8202e077ccc8c7b5fc7d7ab',
    language: 'en-US',
  },
};

axios.defaults.baseURL = `https://api.themoviedb.org/3`;

export async function getTrendingMovies(signal) {
  const response = await axios.get('/trending/movie/day', {
    ...options,
    signal,
  });
  return response.data.results;
}

export async function getMovies(query, signal, page) {
  const response = await axios.get(
    `/search/movie?query=${query}&include_adult=false&page=${page}`,
    {
      ...options,
      signal,
    }
  );
  return response.data;
}

export async function getMovieDetails(movieId, signal) {
  const response = await axios.get(`/movie/${movieId}`, {
    ...options,
    signal,
  });
  return response.data;
}

export async function getMovieCast(movieId, signal) {
  const response = await axios.get(`/movie/${movieId}/credits`, {
    ...options,
    signal,
  });
  return response.data.cast;
}

export async function getMovieReviews(movieId, signal) {
  const response = await axios.get(`movie/${movieId}/reviews?page=1`, {
    ...options,
    signal,
  });
  return response.data.results;
}
