<template>
<div class="page-home">
    <template v-if="isLarge">
        <div class="page-home__left">
            <router-view />
        </div>
        <div class="page-home__right">
            <router-view name="side" />
        </div>
    </template>
    <template v-if="isMedium">
        <div class="page-home__mobile">
            <router-view name="mobile" />
        </div>
    </template>
</div>
</template>

<script>
import { adaptiveGetters } from '@/mixins/AdaptiveGetters';

export default {
    name: 'PageHome',

    mixins: [adaptiveGetters],
};
</script>

<style lang="scss">
.page-home {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 590px;

    &__left {
        min-height: 100vh;
        background-color: #ddd;
        position: relative;
    }

    &__right {
        padding: 64px;
    }

    &__toolbar {
        margin-right: 24px;
    }

    @media (max-width: $max-width-mobile) {
        display: block;
    }
}
</style>
