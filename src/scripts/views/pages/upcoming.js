/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable space-before-blocks */
/* eslint-disable indent */
/* eslint-disable eol-last */
import TheMovieDbSource from "../../data/themoviedb-source";
import { createMovieItemTemplate } from "../templates/template-creator";

const Upcoming = {
    async render() {
        return `
        <div class="content">
            <h2 class="content__heading">Upcoming in Cinema</h2>
            <div id="movies" class="movies">
            </div>
        </div>
        `;
    },
    async afterRender(){
        const movies = await TheMovieDbSource.upcomingMovies();
        const moviesContainer = document.querySelector('#movies');
        movies.forEach((movie) => {
            moviesContainer.innerHTML += createMovieItemTemplate(movie);
        });
    },
};

export default Upcoming;