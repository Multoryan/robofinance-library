import { getFavorites } from '@/server/endpoints';
export const COUNT_IN_PAGE = 4;

const wish = {
    state: {
        list: [], // Список избранного
        page: 1, // Текущий номер страницы
    },

    mutations: {
        setList (state, list) {
            state.list = list;
        },

        setPage (state, page) {
            state.page = page;
        },

        updateId (state, book) {
            const index = state.list.findIndex(({ id }) => book.id === id);
            if (index >= 0) {
                state.list.splice(index, 1, book);
            }
        },

        putList (state, id) {
            const index = state.list.findIndex(book => book.id === id);
            if (index >= 0) {
                state.list.splice(index, 1);
            } else {
                state.list.push({ id });
            }
        },
    },

    actions: {
        async fetchList ({ state, commit }, { limit = COUNT_IN_PAGE, page = 1 }) {
            const result = await new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(getFavorites({
                        currentFavoritesIds: state.list.map(({ id }) => id),
                        limit,
                        page,
                    }));
                }, 300);
            });
            result.list.forEach(book => commit('updateId', book));
            commit('setPage', result.page);
        },

        async putList ({ commit, dispatch, getters }, id) {
            commit('putList', id);
            // Если список содержит текущий идентификатор
            if (getters.hasIdOnPage(id)) {
                const book = await dispatch('fetchBook', id, { root: true });
                commit('updateId', book);
            }
        },
    },

    getters: {
        countFavorites: state => state.list.length,

        countPages: (_state, getters) => Math.ceil(getters.countFavorites / COUNT_IN_PAGE),

        hasIdOnPage: state => id => {
            const index = state.list.findIndex(book => book.id === id);
            if (index < 0) {
                return false;
            }
            if (state.page * COUNT_IN_PAGE - 1 < index) {
                return false;
            }
            if (state.page * COUNT_IN_PAGE - COUNT_IN_PAGE > index) {
                return false;
            }
            return true;
        },

        hasId: state => id => state.list.find(book => book.id === id),

        getFavorites: state => state.list.slice(state.page * COUNT_IN_PAGE - COUNT_IN_PAGE, state.page * COUNT_IN_PAGE),
    },
};

export default { ...wish, namespaced: true };
