import Vue from 'vue';
import Vuex from 'vuex';
import search from './search';
import wish from './wish';
import { getBook, getSuggests } from '@/server/endpoints';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
    },
    mutations: {
    },
    actions: {
        async fetchBook (_ctx, id) {
            return await new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(getBook(id));
                }, 300);
            });
        },

        async getSuggests (_ctx, { search, limit }) {
            return await new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(getSuggests({ search, limit }));
                }, 300);
            });
        },
    },
    modules: {
        search,
        wish,
    },
});
