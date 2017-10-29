import VueRouter from "vue-router";
import Store from "./store/index";
import jwtToken from "./helpers/jwt";

let routes = [
    {
        path: '/',
        name: 'home',
        component: require('./components/pages/Home'),
        meta: {},
    },
    {
        path: '/about',
        component: require('./components/pages/About'),
        meta: {},
    },
    {
        path: '/posts/:id',
        name: 'posts.show',
        component: require('./components/posts/Show'),
        meta: {},
    },
    {
        path: '/register',
        name: 'register',
        component: require('./components/registers/Register'),
        meta: {requiresGuest: true}
    },
    {
        path: '/login',
        name: 'login',
        component: require('./components/login/Login'),
        meta: {requiresGuest: true}
    },
    {
        path: '/confirm',
        name: 'confirm',
        component: require('./components/confirm/Email'),
        meta: {},
    },
    {
        path: '/profile',
        name: 'profile',
        component: require('./components/user/Profile'),
        meta: {requiresAuth: true},
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) { // 检测路由是否需要验证
        if (Store.state.authenticated || jwtToken.getToken()) { // 检测是否有请求路由的权限
            return next();
        } else {
            return next({"name": "login"});
        }
    }
    if (to.meta.requiresGuest) {
        if (Store.state.authenticated || jwtToken.getToken()) {
            return next({'name': 'home'});
        } else {
            return next();
        }
    }
    next();
});

export default router;
