require('./bootstrap');

window.Vue = require('vue');

import VueRouter from "vue-router";
import router from "./routers";

Vue.use(VueRouter);

// Vue.component('example', require('./components/Example.vue'));

const app = new Vue({
    el: '#app',
    router: router
});
