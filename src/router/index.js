import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/pages/Home';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        children: [
            {
                path: '',
                name: 'HomeImage',
                components: {
                    default: () => import('@/pages/HomeImage'),
                    side: () => import('@/pages/Search'),
                    mobile: () => import('@/pages/HomeImage'),
                },
            },
            {
                path: 'search',
                name: 'Search',
                components: {
                    default: () => import('@/pages/HomeImage'),
                    side: () => import('@/pages/Search'),
                    mobile: () => import('@/pages/Search'),
                },
            },
            {
                path: 'search/:id',
                name: 'SearchBook',
                components: {
                    default: () => import('@/pages/BookCard'),
                    side: () => import('@/pages/Search'),
                    mobile: () => import('@/pages/BookCard'),
                },
            },
            {
                path: 'favorites',
                name: 'Favorites',
                components: {
                    default: () => import('@/pages/HomeImage'),
                    side: () => import('@/pages/Favorites'),
                    mobile: () => import('@/pages/Favorites'),
                },
            },
            {
                path: 'favorites/:id',
                name: 'FavoritesBook',
                components: {
                    default: () => import('@/pages/BookCard'),
                    side: () => import('@/pages/Favorites'),
                    mobile: () => import('@/pages/BookCard'),
                },
            },
            {
                path: ':id',
                name: 'Book',
                components: {
                    default: () => import('@/pages/BookCard'),
                    side: () => import('@/pages/Search'),
                    mobile: () => import('@/pages/BookCard'),
                },
            },
        ],
    },
    {
        path: '*',
        name: '404',
        components: {
            default: () => import('@/pages/HomeImage'),
            side: () => import('@/pages/Search'),
            mobile: () => import('@/pages/HomeImage'),
        },
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
