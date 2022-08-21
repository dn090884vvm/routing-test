import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/';

const API_KEY = '2469436d9ac3e13267858f145f807eef';
const TRENDING_PATH_PARAMS = 'trending/movie/day';

export async function fetchTrendingMovies() {
  const response = await axios.get(
    `/3/${TRENDING_PATH_PARAMS}?api_key=${API_KEY}&page=1`
  );
  console.log(response.data);
  return response.data;
}
fetchTrendingMovies();
console.log('voha');

// import axios from 'axios';

// const API_KEY = '06cf6ee022a0922eb5200ae030143d7b';
// axios.defaults.baseURL = 'https://api.themoviedb.org';

// export async function getTrendingMovies() {
//   const response = await axios.get(`/3/trending/movie/day?api_key=${API_KEY}`);
//   return response;
// }

// getTrendingMovies();
