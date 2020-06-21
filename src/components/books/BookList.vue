<template>
<div class="book-list">
    <div
        v-for="(book, index) in books"
        :key="index"
        class="book-list__item-wrapper"
    >
        <BookItem
            :book="book"
            :from="from"
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

        from: {
            type: String,
            required: true,
        },
    },
};
</script>

<style lang="scss">
.book-list {
    display: flex;
    flex-direction: column;
    margin-top: 39px;

    &__item-wrapper {
        padding: 6px 0;
        border-bottom: 1px solid #979797;
    }

    &__item {
        margin: 0 -12px;
        height: 125px;
    }

    @media (max-width: 1023) {
        margin-top: 0;
    }
}
</style>
