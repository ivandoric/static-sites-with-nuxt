<template>
    <div>
        <div class="container">
            <div class="post">
                <h2 class="mb-8">{{ post.title.rendered }}</h2>
                <div v-html="post.content.rendered"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                post: {}
            }
        },
        async asyncData({params, payload}) {
            if(payload) {
                return {
                    post: payload
                }
            } else {
                return axios.get('http://nuxt-wp.localhost/wp-json/wp/v2/posts/' + params.id)
                    .then((res) => {
                        return {
                            post: res.data
                        }
                    })
            }
        }
    }
</script>
