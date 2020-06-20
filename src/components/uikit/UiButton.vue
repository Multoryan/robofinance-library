<template>
<Component
    v-on="$listeners"
    v-bind="$attrs"
    :is="element"
    :class="[`ui-button--${view}`, 'ui-button']"
>
    <slot></slot>
</Component>
</template>

<script>
/**
 * @module UiButton - Кнопка или ссылка
 *
 * Параметры
 * @param {elementTypes} [element='button'] - Тэг определяющий кнопку (следует помнить, что для router-link нужно передать параметр to)
 *
 * Слоты
 * @param {any} default - Отображение контента внутри кнопки
 */

export const elementTypes = [
    'button', // Кнопка
    'router-link', // Внутренняя ссылка
    'a', // Внешняя ссылка
];

export const buttonTypes = [
    'wrapper',
    'primary',
];

export default {
    name: 'UiButton',

    props: {
        element: {
            type: String,
            default: elementTypes[0],
            validator: el => elementTypes.includes(el),
        },

        view: {
            type: String,
            default: buttonTypes[0],
            validator: el => buttonTypes.includes(el),
        },
    },
};
</script>

<style lang="scss">
.ui-button {
    cursor: pointer;
    background-color: inherit;
    color: inherit;
    border: inherit;
    height: 100%;
    padding: inherit;
    position: relative;

    &--primary {
        background-color: $colorWhite;
        padding: (2*$grid-gap-secondary - 1px);
        border-radius: $defaultBorderRadius;
        @include border();
    }
}
</style>
