<template>
<div class="ui-rating">
    <div
        v-for="count in [0,1,2,3,4]"
        :key="count"
        class="ui-rating__star"
    >
        <UiIcon
            class="ui-rating__star--background"
            name="star"
            :size="size"
        />

        <div
            :class="['ui-rating__star--overlay', { 'ui-rating__star--filled': count < rating }]"
            :style="{ width: `${getWidthByCount(count)}%` }"
        >
            <UiIcon
                name="star"
                :size="size"
            />
        </div>
    </div>
</div>
</template>

<script>
import UiIcon from '@/components/uikit/UiIcon';

export default {
    name: 'UiRating',

    components: {
        UiIcon,
    },

    props: {
        rating: {
            type: Number,
            default: 2.5,
        },

        size: {
            type: Number,
            default: 16,
        },
    },

    methods: {
        getWidthByCount (count) {
            if (count > this.rating) {
                return 0;
            }

            if (this.rating - count >= 1) {
                return 100;
            }

            return (this.rating - count) * 100;
        },
    },
};
</script>

<style lang="scss">
.ui-rating {
    display: flex;

    &__star {
        position: relative;

        &--black {
            color: $colorBlack;
        }

        &--overlay {
            position: absolute;
            color: transparent;
            top: 0;
            overflow: hidden;

            &.ui-rating__star--filled {
                color: $colorRating;
            }
        }
    }
}
</style>
