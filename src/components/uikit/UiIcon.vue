<template>
<div
    v-on="$listeners"
    class="ui-icon"
    v-html="require(`@/assets/icons/icon-${name}.svg`)"
>
</div>
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
