<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-6" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <router-link class="navbar-brand" to="/">Vue-SPA</router-link>

            </div>

            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6">
                <ul class="nav navbar-nav">
                    <li><a href="/">Home</a></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <router-link v-if="!user.authenticated" tag="li" to="/login"><a>登录</a></router-link>
                    <router-link v-if="!user.authenticated" tag="li" to="/register"><a>注册</a></router-link>
                    <router-link v-if="user.authenticated" tag="li" to="/profile"><a>个人中心</a></router-link>
                    <li v-if="user.authenticated"><a href="#">退出登录</a></li>
                </ul>
            </div><!-- /.navbar-collapse -->
        </div>
    </nav>
</template>
<script>
    import {mapState} from 'vuex';
    export default {
        computed: {
            ...mapState({
                user: state => state.AuthUser
            })
        }
    }
</script>
