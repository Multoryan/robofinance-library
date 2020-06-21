import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/pages/Home';
import HomeImage from '@/pages/HomeImage';
import BookCard from '@/pages/BookCard';
import Search from '@/pages/Search';
import Favorites from '@/pages/Favorites';

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
                    default: HomeImage,
                    side: Search,
                    mobile: HomeImage,
                },
            },
            {
                path: 'search',
                components: {
                    default: HomeImage,
                    side: Search,
                    mobile: Search,
                },
            },
            {
                path: 'search/:id',
                components: {
                    default: BookCard,
                    side: Search,
                    mobile: BookCard,
                },
            },
            {
                path: 'favorites',
                components: {
                    default: HomeImage,
                    side: Favorites,
                    mobile: Favorites,
                },
            },
            {
                path: 'favorites/:id',
                components: {
                    default: BookCard,
                    side: Favorites,
                    mobile: BookCard,
                },
            },
            {
                path: ':id',
                components: {
                    default: BookCard,
                    side: Search,
                    mobile: BookCard,
                },
            },
        ],
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
