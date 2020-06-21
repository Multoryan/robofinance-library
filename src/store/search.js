import { searchBook } from '@/server/endpoints';

const search = {
    state: {
        search: '', // Поисковой запрос
        page: 1, // Теукщая страница
        list: [], // Список книг в поиске
        count: 0, // Кол-во книг в результате поиска
    },

    mutations: {
        setList (state, list) {
            state.list = list;
        },

        setCount (state, count) {
            state.count = count;
        },

        setPage (state, page) {
            state.page = page;
        },

        setSearch (state, search) {
            state.search = search;
        },
    },

    actions: {
        async search ({ commit, state }, { search = '', page = 1, limit = 4 }) {
            const result = await new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(searchBook({
                        search: search || state.search,
                        page,
                        limit,
                    }));
                }, 300);
            });
            commit('setList', result.list);
            commit('setCount', result.count);
            commit('setPage', result.page);
        },
    },
};

export default { ...search, namespaced: true };
