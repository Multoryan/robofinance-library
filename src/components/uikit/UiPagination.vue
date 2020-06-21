<template>
<div class="ui-pagination">
    <button
        :disabled="page === 1"
        class="ui-pagination__button ui-pagination__prev"
        aria-label="Предыдущая страница"
        @click="changePage(page - 1)"
    >
        <UiIcon name="arrows" :size="12" />
    </button>

    <button
        v-for="(count, index) in counts"
        :key="index"
        :class="['ui-pagination__button', { 'ui-pagination__button--active': index + 1 === page }]"
        :aria-label="`Переход к странице под номером ${index + 1}`"
        @click="changePage(index + 1)"
    >
        {{ index + 1 }}
    </button>

    <button
        class="ui-pagination__button ui-pagination__next"
        :disabled="page === count"
        aria-label="Следующая страница"
        @click="changePage(page + 1)"
    >
        <UiIcon name="arrows" :size="12" />
    </button>
</div>
</template>

<script>
import UiIcon from '@/components/uikit/UiIcon';

export default {
    name: 'UiPagination',

    components: {
        UiIcon,
    },

    model: {
        prop: 'page',
        event: 'change',
    },

    props: {
        page: {
            type: Number,
            required: true,
        },

        count: {
            type: Number,
            required: true,
        },
    },

    computed: {
        counts () {
            return Array(this.count);
        },
    },

    methods: {
        changePage (count) {
            this.$emit('change', count);
        },
    },
};
</script>

<style lang="scss">
.ui-pagination {
    border: 1px solid #cccccc;
    border-radius: 4px;
    height: 36px;
    display: flex;

    &__button {
        background-color: #ffffff;
        border-right: 1px solid #cccccc;
        height: 100%;
        border-left: none;
        border-bottom: none;
        border-top: none;
        cursor: pointer;
        padding: 8px 10px 6px 10px;
        font-size: 15px;
        line-height: 20px;
        color: #848E8E;
        width: 32px;

        &:hover:not([disabled]):not(.ui-pagination__button--active) {
            background-color: #F3F3F3;
        }

        &.ui-pagination__button--active {
            background-color: #848E8E;
            color: #fff;
        }

        &.ui-pagination__prev {
            transform: scale(-1, 1);
            border-right: 0;
            border-left: 1px solid #cccccc;
            padding: 4px 10px 9px 10px;
        }

        &.ui-pagination__next {
            border-right: none;
            padding: 4px 10px 9px 10px;
        }
    }
}
</style>
