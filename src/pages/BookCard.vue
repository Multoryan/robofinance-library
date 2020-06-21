<template>
<div class="book-card">
    <template v-if="!Object.keys(book).length">
        <div  class="book-card__loader">Загрузка...</div>
    </template>

    <template v-else>
        <div class="book-card__header">
            <UiButton class="book-card__header-action" @click="back">
                <UiIcon class="book-card__icon--white" name="back" :size="24" />
            </UiButton>
        </div>
        <div class="book-card__info">
            <img class="book-card__image" :src="book.image" :alt="`Изображение для книги ${book.title}`" />

            <h1 class="book-card__title">{{ book.title }}</h1>

            <div class="book-card__characters">
                <div class="book-card__character">
                    <span class="book-card__character-title">Автор: </span>
                    <span class="book-card__character-value">{{ book.author }}</span>
                </div>

                <div class="book-card__character">
                    <span class="book-card__character-title">Год: </span>
                    <span class="book-card__character-value">{{ book.year }}</span>
                </div>
            </div>

            <div class="book-card__rating-block">
                <UiRating :rating="book.rating" :size="24" class="book-card__rating" />

                <div class="book-card__character">
                    <span class="book-card__character-title">Рейтинг: </span>
                    <span class="book-card__character-value">{{ book.rating }}</span>
                </div>
            </div>

            <UiButton
                class="book-card__favorite"
                :to="`/favorites/${book.id}`"
                :element="hasInWish ? 'router-link' : 'button'"
                :class="{ 'book-card__favorite--active': hasInWish }"
                @click="putFavorite"
            >
                <div class="book-card__favorite-inner">
                    <UiIcon
                        :name="hasInWish ? 'favorite-filled' : 'favorite-outline'"
                        class="book-card__favorite-icon"
                    />
                    <span class="book-card__favorite-title">{{ hasInWish ? 'Перейти в избранное' : 'В избранное' }}</span>
                </div>
            </UiButton>
        </div>
        <div class="book-card__text">
            <h2 class="book-card__text-header">
                Отрывок книги
            </h2>
            <div class="book-card__text-description">
                {{ book.text }}
            </div>
        </div>
    </template>
</div>
</template>

<script>
import UiRating from '@/components/uikit/UiRating';
import UiButton from '@/components/uikit/UiButton';
import UiIcon from '@/components/uikit/UiIcon';

export default {
    name: 'BookCard',

    components: {
        UiRating,
        UiButton,
        UiIcon,
    },

    watch: {
        $route: {
            async handler (route, oldRoute) {
                const { id } = route.params;

                if (
                    oldRoute &&
                    oldRoute.params &&
                    oldRoute.params.id &&
                    oldRoute.params.id === id
                ) {
                    return;
                }

                this.book = await this.$store.dispatch('fetchBook', Number(id));
            },
            immediate: true,
        },
    },

    data () {
        return {
            book: {},
        };
    },

    computed: {
        hasInWish () {
            return this.$store.getters['wish/hasId'](this.book.id);
        },
    },

    methods: {
        putFavorite () {
            this.$store.dispatch('wish/putList', this.book.id);
        },

        back () {
            const [first] = this.$route.path.split('/').filter(Boolean);
            this.$router.push({ path: `/${first}` });
        },
    },
};
</script>

<style lang="scss">
.book-card {
    padding: 64px 40px 64px 64px;

    &__info {
        display: grid;
        grid-column-gap: 32px;
        grid-template-columns: 177px 1fr;
        grid-row-gap: 16px;
        grid-template-areas:
            'image title'
            'image characters'
            'image rating'
            'image favorite';
    }

    &__header {
        display: none;
    }

    &__image {
        box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3);
        grid-area: image;
        max-width: 177px;
    }

    &__title {
        font-weight: 500;
        font-size: 21px;
        line-height: 26px;
        grid-area: title;
        margin: 0;
    }

    &__characters {
        grid-area: characters;
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 4px;
    }

    &__favorite {
        grid-area: favorite;

        &-inner {
            display: flex;
            color: #C7CAD2;
        }

        &-title {
            font-size: 13px;
            line-height: 17px;
            margin-left: 10px;
        }

        &:hover {
            .book-card__favorite-icon {
                color: #D0021B;
            }

            .book-card__favorite-title {
                color: #417505;
            }
        }

        &--active {
            text-decoration: none;

            .book-card__favorite-icon {
                color: #D0021B;
            }

            .book-card__favorite-title {
                color: #417505;
            }

            &:hover {
                text-decoration: underline;
            }
        }
    }

    &__rating-block {
        grid-area: rating;
        display: flex;
        align-items: center;
    }

    &__rating {
        margin-right: 12px;
    }

    &__character {
        font-size: 15px;
        line-height: 20px;
        color: #7D8888;

        &-value {
            color: #000;
        }
    }

    &__text {
        margin-top: 56px;

        &-header {
            font-weight: 500;
            font-size: 19px;
            line-height: 24px;
            color: #000;
            margin: 0;
        }

        &-description {
            margin-top: 16px;
            font-size: 15px;
            line-height: 24px;
            color: #000000;
        }
    }

    @media (max-width: 1023px) {
        padding: 0;
        position: relative;

        &__header {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            height: 44px;
            padding: 10px 16px;
            background-color: rgba(0, 0, 0, .6);
            position: absolute;
            top: 0;
            left: 0;
            right: 0;

            &-action {
                padding: unset;
                background-color: transparent;
            }
        }

        &__info {
            padding: 0 16px;
            grid-template-columns: 1fr;
            grid-template-areas:
                'image'
                'title'
                'characters'
                'rating'
                'favorite';
        }

        &__image {
            max-width: 100vw;
            margin: 0 -16px;
            justify-self: center;
        }

        &__title {
            margin-top: 8px;
            font-size: 19px;
        }

        &__text {
            padding: 0 16px;
            margin-top: 39px;
        }

        &__icon {
            &--white {
                color: #fff;
            }
        }

        &__favorite {
            grid-area: favorite;
            width: max-content;
            padding: 0;
            margin-top: 10px;
        }
    }
}
</style>
