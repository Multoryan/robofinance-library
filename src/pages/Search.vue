<template>
<div class="search">
    <div class="search__toolbar-wrapper">
        <TheToolbar class="search__toolbar" />

        <BookList
            v-if="search.length"
            :books="search"
            pathName="SearchBook"
        />
    </div>

    <div class="search__pagination-wrapper" ref="list">
        <UiPagination
            v-show="isLarge && search.length && count"
            v-model="page"
            :count="count"
        />

        <UiObserver
            v-if="isMedium && search.length"
            :isActive="!loading"
            :target="$refs.list"
            :options="{ thresholds: 1.0 }"
            @observe="nextPage"
        />
    </div>
</div>
</template>

<script>
import UiObserver from '@/components/uikit/UiObserver';
import TheToolbar from '@/components/toolbar/TheToolbar';
import BookList from '@/components/books/BookList';
import UiPagination from '@/components/uikit/UiPagination';
import { adaptiveGetters } from '@/mixins/AdaptiveGetters';
import { mapState } from 'vuex';

export default {
    name: 'PageSearch',

    components: {
        TheToolbar,
        BookList,
        UiObserver,
        UiPagination,
    },

    data () {
        return {
            loading: false,
        };
    },

    mixins: [adaptiveGetters],

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

    methods: {
        async nextPage () {
            this.loading = true;
            if (this.count >= this.page + 1) {
                await this.$store.dispatch('search/uploadMore', { page: this.page + 1 });
            }
            this.$nextTick(() => {
                this.loading = false;
            });
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

    @media (max-width: $max-width-mobile) {
        padding: 24px 16px;

        &__toolbar {
            margin: 0;
        }
    }
}
</style>
