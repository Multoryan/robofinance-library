import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueMq from 'vue-mq';

Vue.config.productionTip = false;

Vue.use(VueMq, {
    breakpoints: {
        medium: 1023,
        large: Infinity,
    },
});

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
