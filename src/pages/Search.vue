<template>
<div class="search">
    <div class="page-home__search-wrapper">
        <TheToolbar class="page-home__toolbar" />

        <BookList v-if="search.length" :books="search" from="search" />
    </div>

    <div class="search__pagination-wrapper">
        <UiPagination
            v-if="search.length && count"
            v-model="page"
            :count="count"
        />
    </div>
</div>
</template>

<script>
import TheToolbar from '@/components/toolbar/TheToolbar';
import BookList from '@/components/books/BookList';
import UiPagination from '@/components/uikit/UiPagination';
import { mapState } from 'vuex';

export default {
    name: 'PageSearch',

    components: {
        TheToolbar,
        BookList,
        UiPagination,
    },

    computed: {
        ...mapState({
            pageStore: state => state.search.page,
            count: state => state.search.count,
            search: state => state.search.list,
        }),

        page: {
            get () {
                return this.pageStore;
            },
            async set (page) {
                await this.$store.dispatch('search/search', { page });
            },
        },
    },
};
</script>

<style lang="scss">
.search {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100%;

    &__pagination-wrapper {
        display: flex;
        justify-content: center;
    }
}
</style>
