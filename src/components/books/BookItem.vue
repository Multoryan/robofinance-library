<template>
<router-link class="book-item" :to="`/${from}/${book.id}`">
    <template v-if="book.title">
        <img class="book-item__image" :src="book.image" :alt="`Изображение книги ${book.title}`" />

        <UiRating class="book-item__rating" :rating="book.rating" />

        <span class="book-item__title">{{ book.title }}</span>

        <p class="book-item__description">{{ book.description }}</p>
    </template>
    <template v-else>
        Загрузка...
    </template>
</router-link>
</template>

<script>
import UiRating from '@/components/uikit/UiRating';

export default {
    name: 'BookItem',

    components: {
        UiRating,
    },

    props: {
        book: {
            type: Object,
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
.book-item {
    display: grid;
    grid-template-areas:
        'image rating'
        'image title'
        'image description';
    padding: 12px;
    grid-row-gap: 6px;
    grid-column-gap: 16px;
    grid-template-columns: 74px 1fr;
    cursor: pointer;
    text-decoration: none;
    color: #000000;

    &:hover {
        background-color: #F3F3F3;
        border-radius: 8px;
    }

    &__image {
        grid-area: image;
        max-width: 74px;
    }

    &__rating {
        grid-area: rating;
    }

    &__title {
        grid-area: title;
    }

    &__description {
        grid-area: description;
        margin: 0;
    }
}
</style>
