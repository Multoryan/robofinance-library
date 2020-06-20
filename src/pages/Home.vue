<template>
<div class="page-home">
    <div class="page-home__image">
        <div class="page-home__header">Библиотека</div>
    </div>
    <div class="page-home__search">
        <TheToolbar class="page-home__toolbar" />
    </div>
</div>
</template>

<script>
import TheToolbar from '@/components/toolbar/TheToolbar';

export default {
    name: 'PageHome',

    components: {
        TheToolbar,
    },
};
</script>

<style lang="scss">
.page-home {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 590px;

    &__image {
        background-image: url('../assets/images/books-min.jpg');
        background-repeat: no-repeat;
        background-position: left top;
        min-height: 100vh;
        background-color: #ddd;
        position: relative;
    }

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

    &__search {
        padding: 64px;
    }

    &__toolbar {
        margin-right: 24px;
    }
}
</style>
