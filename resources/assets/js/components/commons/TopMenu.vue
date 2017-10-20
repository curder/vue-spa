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
                    <router-link tag="li" to="/login"><a>登录</a></router-link>
                    <router-link tag="li" to="/register"><a>注册</a></router-link>
                </ul>
            </div><!-- /.navbar-collapse -->
        </div>
    </nav>
</template>
<script>
    export default {}
</script>
