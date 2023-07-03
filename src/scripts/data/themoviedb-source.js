/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable space-before-blocks */
/* eslint-disable indent */
/* eslint-disable eol-last */
import API_ENDPOINT from "../globals/api-endpoint";

class TheMovieDbSource {
    static async nowPlayingMovies() {
        const response = await fetch(API_ENDPOINT.NOW_PLAYING);
        const responseJson = await response.json();
        return responseJson.results;
    }

    static async upcomingMovies() {
        const response = await fetch(API_ENDPOINT.UPCOMING);
        const responseJson = await response.json();
        return responseJson.results;
    }

    static async detailMovie(id) {
        const response = await fetch(API_ENDPOINT.DETAIL(id));
        return response.json();
    }
}

export default TheMovieDbSource;