<template>
<div class="the-toolbar">
    <UiButton view="primary">
        <UiIcon name="favorite-filled" />
    </UiButton>

    <UiAutocomplete
        :search.sync="search"
        placeholder="Поиск"
        aria-label="Поиск"
        append="44px"
        autofocus
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
import UiAutocomplete from '@/components/uikit/UiAutocomplete';
import UiButton from '@/components/uikit/UiButton';
import UiIcon from '@/components/uikit/UiIcon';

export default {
    name: 'TheToolbar',

    components: {
        UiAutocomplete,
        UiButton,
        UiIcon,
    },

    data () {
        return {
            search: '',
        };
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
}
</style>
