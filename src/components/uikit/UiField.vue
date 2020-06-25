<template>
<div class="ui-field">
    <input
        v-bind="$attrs"
        class="ui-field__input"
        :value="value"
        :style="additionalStyles"
        @input="inputValue"
        @focus="$emit('focus')"
        @blur="$emit('blur')"
        @keydown="keydown"
    />

    <div
        v-if="$slots.append"
        class="ui-field__append"
    >
        <slot name="append" />
    </div>
</div>
</template>

<script>
/**
 * @module UiField - Поле ввода
 *
 * Параметры
 * @param {String} [value=''] - Значение в поле ввода
 * @param {String} [append=''] - Отступ справа внутри input с указанием единицы измерения или зарезервиванное слово
 *
 * Слоты
 * @param {any} [append] - Контент размещаемый в поле ввода после текса
 *
 * События
 * @emits {String} [input] - Возвращает измененное значение поля ввода
 */
export default {
    name: 'UiField',

    model: {
        prop: 'value',
        event: 'input',
    },

    props: {
        value: {
            type: String,
            default: '',
        },

        append: {
            type: String,
            default: '',
        },
    },

    computed: {
        additionalStyles () {
            const styles = {};

            /** Не применяем отступ справа, если нет слота */
            if (this.$slots.append) {
                styles.paddingRight = this.append;
            }

            return styles;
        },
    },

    methods: {
        inputValue (e) {
            this.$emit('input', e.target.value);
        },

        keydown (e) {
            this.$emit('keydown', e);
        },
    },
};
</script>

<style lang="scss">
@mixin inputFont () {
    font-size: 17px;
    line-height: 20px;
}

.ui-field {
    position: relative;
    border-radius: $defaultBorderRadius;

    @include border();
    @include blackShadow();

    &__input {
        box-sizing: border-box;
        width: 100%;
        border: none;
        border-radius: $defaultBorderRadius;

        /** -1px это border, на макете padding 12px включает в себя border */
        padding: (1.5*$grid-gap-main - 1px) (2*$grid-gap-main - 1px);

        @include inputFont();

        &::placeholder {
            color: $colorPlaceholder;
            @include inputFont();
        }
    }

    &__append {
        position: absolute;
        top: 2*$grid-gap-secondary - 1px;
        bottom: 2*$grid-gap-secondary - 1px;
        right: 2*$grid-gap-secondary;
    }
}
</style>
