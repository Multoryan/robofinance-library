<template lang="pug">
.ui-field
    input.ui-field__input(
        v-bind="$attrs"
        :value="value"
        :style="additionalStyles"
        @input="inputValue"
    )

    .ui-field__append(
        v-if="$slots.append"
    )
        slot(
            name="append"
        )
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

    &__input {
        box-sizing: border-box;
        width: 100%;
        border-radius: $defaultBorderRadius;

        /** -1px это border, на макете padding 12px включает в себя border */
        padding: (1.5*$grid-gap-main - 1px) (2*$grid-gap-main - 1px);

        @include blackShadow();
        @include border();
        @include inputFont();

        &::placeholder {
            color: $colorPlaceholder;
            @include inputFont();
        }
    }

    &__append {
        position: absolute;
        top: 2*$grid-gap-secondary;
        right: 2*$grid-gap-secondary;
    }
}
</style>
