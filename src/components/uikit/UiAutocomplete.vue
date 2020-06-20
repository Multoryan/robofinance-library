<template>
<div class="ui-autocomplete">
    <div class="ui-autocomplete__field">
        <UiField
            v-bind="$attrs"
            v-on="$listeners"
            :class="{ 'ui-autocomplete__input--opened': suggests.length }"
            :value="proxySearch"
            class="ui-autocomplete__input"
            @input="changeSearch"
        >
            <UiButton
                slot="append"
                @click="clearSearch"
            >
                <UiIcon :name="searchIcon" />
            </UiButton>
        </UiField>

        <div
            v-if="suggests.length"
            class="ui-autocomplete__list"
        >
            <div
                v-for="(suggest, index) in suggests"
                :key="index"
                class="ui-autocomplete__item"
                @click="setSuggest(suggest)"
            >
                <slot v-bind:suggest="suggest"></slot>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import UiButton from '@/components/uikit/UiButton';
import UiIcon from '@/components/uikit/UiIcon';
import UiField from '@/components/uikit/UiField';

export default {
    name: 'UiAutocomplete',

    components: {
        UiField,
        UiButton,
        UiIcon,
    },

    props: {
        suggests: {
            type: Array,
            default: () => [],
        },

        search: {
            type: String,
            default: '',
        },
    },

    computed: {
        isEmptySearch () {
            return Boolean(this.proxySearch);
        },

        searchIcon () {
            return this.isEmptySearch ? 'close' : 'search';
        },

        proxySearch: {
            get () {
                return this.search;
            },
            set (val) {
                this.$emit('update:search', val);
            },
        },
    },

    methods: {
        clearSearch () {
            this.proxySearch = '';
        },

        changeSearch (val) {
            this.proxySearch = val;
        },

        setSuggest (suggest) {
            this.$emit('setSuggest', suggest);
        },
    },
};
</script>

<style lang="scss">
.ui-autocomplete {
    position: relative;

    &__list {
        position: absolute;
        top: 100%;
        width: 100%;
        border-radius: 0 0 4px 4px;
        border-bottom: 1px solid #7D8888;
        border-left: 1px solid #7D8888;
        border-right: 1px solid #7D8888;
        background-color: #fff;
        @include blackShadow();
    }

    &__field {
        .ui-autocomplete__input--opened {
            border-radius: 4px 4px 0 0;
            border-bottom-color: #E0E4E7;
            box-shadow: none;
        }
    }
}
</style>
