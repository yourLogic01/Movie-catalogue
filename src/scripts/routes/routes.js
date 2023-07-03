/* eslint-disable linebreak-style */
/* eslint-disable spaced-comment */
/* eslint-disable quotes */
/* eslint-disable space-before-blocks */
/* eslint-disable indent */
/* eslint-disable eol-last */
import NowPlaying from "../views/pages/now-playing";
import Upcoming from "../views/pages/upcoming";
import Detail from "../views/pages/detail";
import Like from "../views/pages/like";

const routes = {
    '/': NowPlaying, //default page
    '/now-playing': NowPlaying,
    '/upcoming': Upcoming,
    '/detail/:id': Detail,
    '/like': Like,
};

export default routes;