<template>
<div class="wish">
    <div class="page-home__wish-wrapper">
        <div class="wish__header">
            <UiButton class="wish__header-action" element="router-link" :to="backLink">
                <UiIcon name="back" />
            </UiButton>
            <h2 class="wish__header-title">Избранное</h2>
        </div>
        <BookList v-if="wish.length" :books="wish" from="favorites" />
    </div>

    <div class="wish__pagination-wrapper">
        <UiPagination
            v-if="wish.length && count"
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
        await this.$store.dispatch('wish/fetchList', {});
    },

    components: {
        BookList,
        UiPagination,
        UiButton,
        UiIcon,
    },

    computed: {
        ...mapState({
            page: state => state.wish.page,
        }),

        page: {
            get () {
                return this.$store.state.wish.page;
            },
            async set (page) {
                await this.$store.dispatch('wish/fetchList', { page });
            },
        },

        ...mapGetters({
            count: 'wish/countPages',
        }),

        wish () {
            return this.$store.getters['wish/getFavorites'];
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
.wish {
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
            color: #000;
            margin: 0;
        }
    }

    &__pagination-wrapper {
        display: flex;
        justify-content: center;
    }
}
</style>
