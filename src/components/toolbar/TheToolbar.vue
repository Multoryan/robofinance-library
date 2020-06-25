<template>
<div
    :class="['the-toolbar', { 'the-toolbar--focused': isFocused }]"
    @submit="applySearch"
>
    <UiButton
        :to="routeFavorite"
        element="router-link"
        view="primary"
        class="the-toolbar__favorite"
    >
        <template>
            <UiTooltip class="the-toolbar__favorite-tooltip">Избранное</UiTooltip>
            <UiIcon name="favorite-filled" />
        </template>
    </UiButton>

    <UiAutocomplete
        :search.sync="search"
        :suggests="suggests"
        class="the-toolbar__autocomplete"
        placeholder="Поиск"
        aria-label="Поиск"
        append="44px"
        autocomplete="off"
        name="search"
        @close="resetSuggest"
        @submit="applySearch"
        @setSuggest="setSearch"
        @focus="toggleFocus"
        @blur="toggleFocus"
    >
        <template v-slot="{ suggest }">
            <div class="the-toolbar__suggest">
                {{ suggest }}
            </div>
        </template>
    </UiAutocomplete>
</div>
</template>

<script>
import UiTooltip from '@/components/uikit/UiTooltip';
import UiAutocomplete from '@/components/uikit/UiAutocomplete';
import UiButton from '@/components/uikit/UiButton';
import UiIcon from '@/components/uikit/UiIcon';

export default {
    name: 'TheToolbar',

    components: {
        UiAutocomplete,
        UiButton,
        UiIcon,
        UiTooltip,
    },

    data () {
        return {
            suggests: [], // Подсказки
            isFocused: false,
        };
    },

    watch: {
        async search (value) {
            if (!value.length) {
                this.resetSuggest();
                this.$store.commit('search/setFields', { list: [] });
                this.$router.push({ name: 'HomeImage' });
                return;
            }
            if (this.suggests.includes(value)) {
                this.resetSuggest();
                return;
            }
            this.suggests = await this.$store.dispatch('getSuggests', { search: value, limit: 7 });
        },
    },

    computed: {
        search: {
            get () {
                return this.$store.state.search.search;
            },
            set (search) {
                this.$store.commit('search/setFields', { search });
            },
        },

        routeFavorite () {
            if (this.$route.params.id) {
                return { name: 'FavoritesBook', params: { id: this.$route.params.id } };
            }
            return { name: 'Favorites' };
        },

        routeSearch () {
            if (this.$route.params.id) {
                return { name: 'SearchBook', params: { id: this.$route.params.id } };
            }
            return { name: 'Search' };
        },
    },

    methods: {
        toggleFocus () {
            this.isFocused = !this.isFocused;
        },

        async applySearch () {
            // Если поисковой запрос пуст, то не отправляем форму
            if (!this.search.length) {
                return;
            }

            await this.$store.dispatch('search/search', { search: this.search });
            this.$router.push(this.routeSearch).catch(() => {});
            this.resetSuggest();
        },

        setSearch (val) {
            this.search = val;
        },

        resetSuggest () {
            this.suggests = [];
        },
    },
};
</script>

<style lang="scss">
.the-toolbar {
    display: grid;
    grid-template-columns: 44px 1fr;
    grid-gap: 12px;
    color: #4B5959;

    &__suggest {
        font-size: 15px;
        line-height: 20px;
        color: #4B5959;
        padding: 10px 12px;
    }

    &__favorite {
        &:hover {
            .the-toolbar__favorite-tooltip {
                opacity: 1;
            }
        }

        &-tooltip {
            opacity: 0;
            transition: opacity ease-in-out .15s;
        }
    }

    @media (max-width: $max-width-mobile) {
        &--focused {
            grid-template-columns: 1fr;

            .the-toolbar__favorite {
                display: none;
            }

            .the-toolbar__autocomplete {
                grid-column: 1/3;
                grid-row: 1;
            }
        }
    }
}
</style>
