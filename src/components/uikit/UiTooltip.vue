<template>
<div class="ui-tooltip">
    <slot></slot>
</div>
</template>

<script>
export default {
    name: 'UiTooltip',
};
</script>

<style lang="scss">
.ui-tooltip {
    border-radius: 4px;
    background-color: rgba(0, 0, 0, .7);
    padding: 5px 16px;
    position: absolute;
    bottom: calc(100% + 11px);
    transform: translateX(-50%);
    left: 50%;
    color: $colorWhite;

    &:after {
        content: '';
        position: absolute;
        border-top: 7px solid rgba(0, 0, 0, .7);
        border-left: 9px solid transparent;
        border-right: 9px solid transparent;
        left: calc(50% - 8px);
        top: 100%;
    }
}
</style>
