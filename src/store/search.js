import { searchBook } from '@/server/endpoints';

const search = {
    state: {
        search: '', // Поисковой запрос
        page: 1, // Теукщая страница
        list: [], // Список книг в поиске
        count: 0, // Кол-во книг в результате поиска
    },

    mutations: {
        setFields (state, obj) {
            Object.keys(obj).forEach(key => {
                if (key in state) {
                    state[key] = obj[key];
                }
            });
        },

        addToList (state, list) {
            state.list = [...state.list, ...list];
        },
    },

    actions: {
        async search ({ commit, state }, { search, page = 1, limit = 4 }) {
            console.log('onSearch');
            const result = await new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(searchBook({
                        search: search || state.search,
                        page,
                        limit,
                    }));
                }, 300);
            });
            commit('setFields', { ...result });
        },

        async uploadMore ({ commit, state }, { search, page = 1, limit = 4 }) {
            console.log('onMore');
            const result = await new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(searchBook({
                        search: search || state.search,
                        page,
                        limit,
                    }));
                }, 300);
            });
            const { list, ...other } = result;
            commit('setFields', other);
            commit('addToList', list);
        },
    },
};

export default { ...search, namespaced: true };
