import axios from 'axios';

const options = {
  params: {
    api_key: '5c432334b8202e077ccc8c7b5fc7d7ab',
    language: 'en-US',
  },
};

axios.defaults.baseURL = `https://api.themoviedb.org/3`;
export async function getTrendingMovies() {
  const response = await axios.get('/trending/movie/day', options);
  // console.log(response.data);
  return response.data.results;
}

// export async function getTrendingMovies(controller) {
//   const response = await axios.get('/trending/movie/day', {
//     ...options,
//     signal: controller.signal,
//   });
//   // console.log(response.data);
//   return response.data.results;
// }

export async function getMovies(query) {
  const response = await axios.get(
    `/search/movie?query=${query}&include_adult=false&page=1`,
    options
  );
  // console.log(response.data);
  return response.data.results;
}

// export async function getMovies(query, controller) {
//   const response = await axios.get(
//     `/search/movie?query=${query}&include_adult=false&page=1`,
//     {
//       ...options,
//       signal: controller.signal,
//     }
//   );
//   return response.data.results;
// }

// export async function getMovieDetails(movieId, controller) {
//   const response = await axios.get(`/movie/${movieId}`, {
//     ...options,
//     signal: controller.signal,
//   });
//   // console.log(response.data);
//   return response.data;
// }

export async function getMovieDetails(movieId) {
  const response = await axios.get(`/movie/${movieId}`, options);
  // console.log(response.data);
  return response.data;
}

export async function getMovieCast(movieId) {
  const response = await axios.get(`/movie/${movieId}/credits`, options);
  // console.log(response.data);
  return response.data.cast;
}

export async function getMovieReviews(movieId) {
  const response = await axios.get(`movie/${movieId}/reviews?page=1`, options);
  // console.log(response.data);
  return response.data.results;
}
