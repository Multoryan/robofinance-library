import data from './fakeBooks.json';

/** Получить из избранного */
export const getFavorites = ({ currentFavoritesIds, page, limit }) => {
    const pagesCount = Math.ceil(currentFavoritesIds.length / limit);

    // Не допускаем превышение лимита
    const currentPage = pagesCount < page ? 1 : page;

    // const data = JSON.parse(dataJson);
    const listPage = currentFavoritesIds.slice(currentPage * limit - limit, currentPage * limit);
    const listPageWithData = listPage.map(id => data.find(book => book.id === id));

    return {
        count: pagesCount,
        page: currentPage,
        list: listPageWithData,
    };
};

/** Получить книгу по идентфикатору */
export const getBook = (id) => {
    return data.find(book => book.id === id);
};

/** Поиск книги по названию */
export const searchBook = ({ search, page = 1, limit }) => {
    const searchArray = data.filter(({ title }) => {
        return title.toLowerCase().includes(search.toLowerCase());
    });

    const countPage = Math.ceil(searchArray.length / limit);
    const currentPage = countPage < page ? 1 : page;

    return {
        count: countPage,
        page: currentPage,
        list: searchArray.slice(currentPage * limit - limit, currentPage * limit),
    };
};

export const getSuggests = ({ search, limit }) => {
    const searchArray = data.filter(({ title }) => {
        return title.toLowerCase().includes(search.toLowerCase());
    }).map(book => book.title);

    return searchArray.slice(0, limit - 1);
};
