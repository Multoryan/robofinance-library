<template>
<div class="the-toolbar">
    <UiButton view="primary">
        <UiIcon name="favorite-filled" />
    </UiButton>

    <UiField
        v-model.trim="search"
        placeholder="Поиск"
        aria-label="Поиск"
        autofocus
    >
        <UiButton
            slot="append"
            @click="clearSearch"
        >
            <UiIcon :name="searchIcon" />
        </UiButton>
    </UiField>
</div>
</template>

<script>
import UiField from '@/components/uikit/UiField';
import UiButton from '@/components/uikit/UiButton';
import UiIcon from '@/components/uikit/UiIcon';

export default {
    name: 'TheToolbar',

    components: {
        UiField,
        UiButton,
        UiIcon,
    },

    data () {
        return {
            search: '',
        };
    },

    computed: {
        isEmptySearch () {
            return Boolean(this.search);
        },

        searchIcon () {
            return this.isEmptySearch ? 'close' : 'search';
        },
    },

    methods: {
        clearSearch () {
            this.search = '';
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
}
</style>
