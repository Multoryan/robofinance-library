<template>
<!-- @todo Заменить параметр to на нормальные Name и Идентификатор -->
<router-link class="book-item" :to="`/${from}/${book.id}`">
    <template v-if="book.title">
        <img
            class="book-item__image"
            :src="book.image"
            :alt="`Изображение книги ${book.title}`"
        />

        <UiRating
            class="book-item__rating"
            :rating="book.rating"
        />

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
    color: $colorBlack;

    &:hover {
        background-color: #F3F3F3;
        border-radius: 2*$defaultBorderRadius;
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
        font-weight: 500;
    }

    &__description {
        grid-area: description;
        margin: 0;
    }

    @media (max-width: $max-width-mobile) {
        grid-template-columns: 1fr;
        grid-gap: 6px;
        grid-template-areas:
            'rating'
            'title'
            'description';
        height: auto;

        &__image {
            @include hide();
        }
    }
}
</style>
