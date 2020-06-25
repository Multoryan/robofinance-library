<template>
<UiButton
    v-if="!support"
    @click="customObserve"
>
    Загрузить больше
</UiButton>
</template>

<script>
import UiButton from '@/components/uikit/UiButton';

export default {
    name: 'UiObserver',

    components: {
        UiButton,
    },

    props: {
        isActive: {
            type: Boolean,
            default: true,
        },

        target: {
            required: true,
        },

        options: {
            type: Object,
            default: () => {},
        },
    },

    data () {
        return {
            observer: null,
            support: false,
        };
    },

    watch: {
        target: {
            handler (val) {
                if (val) {
                    this.setObserver();
                }
            },
            immediate: true,
        },
    },

    mounted () {
        this.setObserver();
    },

    beforeDestroy () {
        this.removeObserver();
    },

    methods: {
        setObserver () {
            if (!this.support) {
                this.support = 'IntersectionObserver' in window;
            }

            if (!this.support || !this.target) {
                return;
            }

            this.removeObserver();
            this.observer = new IntersectionObserver(this.callback, {
                ...this.options,
            });
            this.observer.observe(this.target);
        },

        removeObserver () {
            if (this.observer) {
                this.observer = null;
            }
        },

        customObserve () {
            this.$emit('observe');
        },

        callback (entries) {
            if (entries[0].isIntersecting && this.isActive) {
                this.customObserve();
            }
        },
    },
};
</script>
