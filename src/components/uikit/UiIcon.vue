<template lang="pug">
.ui-icon(
    v-on="$listeners"
    v-html="require(`@/assets/icons/icon-${name}.svg`)"
)
</template>

<script>
export default {
    name: 'UiIcon',

    props: {
        name: {
            type: String,
            required: true,
        },
    },
};
</script>
