import VueRouter from "vue-router";

let routes = [
    {
        path: '/',
        component: require('./components/pages/Home')
    },
    {
        path: '/about',
        component: require('./components/pages/About')
    },
    {
        path: '/posts/:id',
        name: 'posts.show',
        component: require('./components/posts/Show')
    },
    {
        path: '/register',
        name: 'register',
        component: require('./components/registers/Register')
    },
    {
        path: '/login',
        name: 'login',
        component: require('./components/login/Login')
    },
    {
        path: '/confirm',
        name: 'confirm',
        component: require('./components/confirm/Email')
    }
];

export default new VueRouter({
    mode: 'history',
    routes
});
