const API_KEY = "7504b8d8331d5f13b0dffb66f728c7bc";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
    const reponse = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await reponse.json();
    return data.results;

}

export const searchMovies = async (query) => {
    const reponse = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await reponse.json();
    return data.results;

}

export const getMovieVideos = async (movieId) => {
    const response = await fetch(
        `${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}`
    );
    const data = await response.json();
    return data.results;
}