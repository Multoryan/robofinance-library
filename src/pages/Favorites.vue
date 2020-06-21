<template>
<div class="favorite">
    <div class="page-home__favorite-wrapper">
        <div class="favorite__header">
            <UiButton class="favorite__header-action" element="router-link" :to="backLink">
                <UiIcon name="back" />
            </UiButton>
            <h2 class="favorite__header-title">Избранное</h2>
        </div>

        <BookList
            v-if="favorite.length"
            :books="favorite"
            class="favorite__list"
            from="favorites"
        />
    </div>

    <div class="favorite__pagination-wrapper">
        <UiPagination
            v-if="favorite.length && count"
            v-model="page"
            :count="count"
        />
    </div>
</div>
</template>

<script>
import BookList from '@/components/books/BookList';
import UiPagination from '@/components/uikit/UiPagination';
import UiButton from '@/components/uikit/UiButton';
import UiIcon from '@/components/uikit/UiIcon';
import { mapState, mapGetters } from 'vuex';

export default {
    name: 'PageFavorites',

    async beforeMount () {
        await this.$store.dispatch('favorite/fetchList', {});
    },

    components: {
        BookList,
        UiPagination,
        UiButton,
        UiIcon,
    },

    computed: {
        ...mapState({
            page: state => state.favorite.page,
        }),

        page: {
            get () {
                return this.$store.state.favorite.page;
            },
            async set (page) {
                await this.$store.dispatch('favorite/fetchList', { page });
            },
        },

        ...mapGetters({
            count: 'favorite/countPages',
        }),

        favorite () {
            return this.$store.getters['favorite/getFavorites'];
        },

        backLink () {
            if (this.$route.params.id) {
                return `/${this.$route.params.id}`;
            }
            return '/';
        },
    },
};
</script>

<style lang="scss">
.favorite {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100%;

    &__header {
        display: grid;
        grid-template-columns: 36px 1fr;
        align-items: center;
        grid-gap: 12px;
        margin-left: -48px;
        margin-bottom: 47px;

        &-action {
            border-radius: 50%;
            background-color: #F3F3F3;
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        &-title {
            font-weight: 500;
            font-size: 21px;
            line-height: 26px;
            color: $colorBlack;
            margin: 0;
        }
    }

    &__pagination-wrapper {
        display: flex;
        justify-content: center;
    }

    @media (max-width: $max-width-mobile) {
        &__header {
            height: 44px;
            margin-left: 0;
            grid-template-columns: 24px 1fr;
            padding: 10px 16px;
            background-color: #F3F3F3;
            margin-bottom: 0;

            &-action {
                border-radius: 0;
                height: 24px;
                background-color: inherit;
            }

            &-title {
                font-size: 19px;
            }
        }

        &__list {
            padding: 0 16px;
        }

        &__pagination-wrapper {
            @include hide();
        }
    }
}
</style>
