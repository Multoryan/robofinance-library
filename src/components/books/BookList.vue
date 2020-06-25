<template>
<div class="book-list">
    <div
        v-for="book in books"
        :key="book.id"
        class="book-list__item-wrapper"
    >
        <BookItem
            :book="book"
            :pathName="pathName"
            class="book-list__item"
        />
    </div>
</div>
</template>

<script>
import BookItem from '@/components/books/BookItem';

export default {
    name: 'BookList',

    components: {
        BookItem,
    },

    props: {
        books: {
            type: Array,
            required: true,
        },

        pathName: {
            type: String,
            required: true,
        },
    },
};
</script>

<style lang="scss">
$colorSeparator: #979797;

.book-list {
    display: flex;
    flex-direction: column;
    margin-top: 39px;

    &__item-wrapper {
        padding: 6px 0;
        border-bottom: 1px solid $colorSeparator;
    }

    &__item {
        margin: 0 -12px;
        height: 125px;
    }

    @media (max-width: $max-width-mobile) {
        margin-top: 0;
    }
}
</style>
