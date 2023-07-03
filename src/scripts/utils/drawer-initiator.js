/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
/* eslint-disable indent */
/* eslint-disable no-extra-semi */
/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */
const DrawerInitiator = {
    init({ button, drawer, content }) {
        button.addEventListener('click', (event) => {
            this._toggleDrawer(event, drawer);
        });

        content.addEventListener('click', (event) => {
            this._closeDrawer(event, drawer);
        });
    },

    _toggleDrawer(event, drawer) {
        event.stopPropagation();
        drawer.classList.toggle('open');
    },

    _closeDrawer(event, drawer) {
        event.stopPropagation();
        drawer.classList.remove('open');
    },
};

export default DrawerInitiator;