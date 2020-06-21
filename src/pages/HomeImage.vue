<template>
<div class="home-image">
    <TheToolbar class="home-image__toolbar" />

    <div class="home-image__header">Библиотека</div>
</div>
</template>

<script>
import TheToolbar from '@/components/toolbar/TheToolbar';

export default {
    name: 'HomeImage',

    components: {
        TheToolbar,
    },
};
</script>

<style lang="scss">
.home-image {
    background-image: url('../assets/images/books-min.jpg');
    background-repeat: no-repeat;
    background-position: left top;
    min-height: 100vh;
    background-color: #ddd;

    &__header {
        font-weight: 900;
        font-size: 59px;
        line-height: 62px;
        color: #4B5959;
        text-transform: uppercase;
        position: absolute;
        right: 32px;
        bottom: 252px;
    }

    &__toolbar {
        @include hide();
    }

    @media (max-width: $max-width-mobile) {
        &__toolbar {
            display: grid;
            position: fixed;
            top: 24px;
            left: 16px;
            right: 16px;
        }

        &__header {
            font-size: 33px;
            line-height: 37px;
            width: 100%;
            left: 0;
            right: 0;
            bottom: 181px;
            text-align: center;
        }
    }
}
</style>
