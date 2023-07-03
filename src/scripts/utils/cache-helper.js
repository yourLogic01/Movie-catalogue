/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
/* eslint-disable indent */
/* eslint-disable no-extra-semi */
/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */
// eslint-disable-next-line quotes
import CONFIG from "../globals/config";

const CacheHelper = {
    async cachingAppShell(requests) {
        const cache = await this._openCache();
        cache.addAll(requests);
    },
    async deleteOldCache() {
        const cacheNames = await caches.keys();
        cacheNames
        .filter((name) => name !== CONFIG.CACHE_NAME)
        .map((filteredname) => caches.delete(filteredname));
    },

    async revalidateCache(request) {
        const response = await caches.match(request);

        if (response) {
            this._fetchRequest(request);
            return response;
        }
        return response;
    },

    async _openCache() {
        return caches.open(CONFIG.CACHE_NAME);
    },

    async _fetchRequest(request) {
        const response = await fetch(request);

        if (!response || response.status !== 200) {
            return response;
        }

        await this._addCache(request);
        return response;
    },

    async _addCache(request) {
        const cache = await this._openCache();
        cache.add(request);
    },
};

export default CacheHelper;