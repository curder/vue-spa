require('./bootstrap');

window.Vue = require('vue');

import VueRouter from "vue-router";
import router from "./routers";
import App from "./components/App";

Vue.use(VueRouter);
Vue.component('App', App);

const app = new Vue({
    el: '#app',
    router: router
});
