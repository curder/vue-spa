require('./bootstrap');

window.Vue = require('vue');

import VueRouter from "vue-router";
import router from "./routers";
import App from "./components/App";
import VeeValidate from "vee-validate";

Vue.use(VueRouter);
Vue.use(VeeValidate);
Vue.component('App', App);

const app = new Vue({
    el: '#app',
    router: router
});
