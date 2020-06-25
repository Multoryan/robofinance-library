export const adaptiveGetters = {
    computed: {
        isMedium () {
            return this.$mq === 'medium';
        },

        isLarge () {
            return this.$mq === 'large';
        },
    },
};
