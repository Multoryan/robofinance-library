<template>
<div class="home-image">
    <div class="home-image__header">Библиотека</div>
</div>
</template>

<style lang="scss">
.home-image {
    background-image: url('../assets/images/books-min.jpg');
    background-repeat: no-repeat;
    background-position: left top;
    min-height: 100vh;

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
}
</style>
