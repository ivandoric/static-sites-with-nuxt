import pkg from './package'
import axios from 'axios'

export default {
    mode: 'universal',

    /*
    ** Headers of the page
    */
    head: {
        title: pkg.name,
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: pkg.description}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },

    /*
    ** Customize the progress-bar color
    */
    loading: {color: '#ffffff'},

    /*
    ** Global CSS
    */
    css: [
        '@/assets/scss/main.scss'
    ],

    /*
    ** Plugins to load before mounting the App
    */
    plugins: [],

    /*
    ** Nuxt.js modules
    */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/style-resources'
    ],
    /*
    ** Axios module configuration
    */
    axios: {
        // See https://github.com/nuxt-community/axios-module#options
    },

    styleResources: {
        scss: [
            'assets/scss/_variables.scss'
        ]
    },

    generate: {
        routes: () => {
            return axios.get('http://nuxt-wp.localhost/wp-json/wp/v2/posts').then((res) => {
                return res.data.map((post) => {
                    return {
                        route: 'blog/' + post.slug,
                        payload: post
                    }
                })
            })
        }
    },

    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        extractCSS: true,
        extend(config, ctx) {
        }
    }
}
