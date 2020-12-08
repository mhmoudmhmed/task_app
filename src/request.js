const API_KEY = 'a97f1c0a0941f8180f5caefc05e63775';

const request = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
	fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
	fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
};

export default request;