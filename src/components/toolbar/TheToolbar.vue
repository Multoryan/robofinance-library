<template>
<div class="the-toolbar">
    <UiButton view="primary" class="the-toolbar__favorite">
        <template>
            <UiTooltip class="the-toolbar__favorite-tooltip">Избранное</UiTooltip>
            <UiIcon name="favorite-filled" />
        </template>
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
}
</style>
