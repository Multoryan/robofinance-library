<template>
<div class="page-home">
    <div class="page-home__left">
        <router-view />
    </div>
    <div class="page-home__right">
        <keep-alive>
            <router-view name="side" />
        </keep-alive>
    </div>
    <div class="page-home__mobile">
        <keep-alive>
            <router-view name="mobile" />
        </keep-alive>
    </div>
</div>
</template>

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

    &__mobile {
        @include hide();
    }

    &__right {
        padding: 64px;
    }

    &__toolbar {
        margin-right: 24px;
    }

    @media (max-width: $max-width-mobile) {
        display: block;

        &__left {
            @include hide();
        }

        &__right {
            @include hide();
        }

        &__mobile {
            display: block;
        }
    }
}
</style>
