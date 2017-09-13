<template>
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">文章列表</div>

                <div class="list-group" v-for="post in posts" :key="post.id">
                    <router-link :to="{ name: 'posts.show' , params : {id : post.id} }" class="list-group-item">
                        <h4 class="list-group-item-heading">{{ post.name }}</h4>
                        <p class="list-group-item-text">{{ post.body }}</p>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            axios.get('/api/posts').then(response => {
                this.posts = response.data.data;
            });
        },
        data(){
            return {
                posts: [],
            }
        }
    }
</script>
