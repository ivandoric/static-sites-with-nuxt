export const state = () => ({
    posts: []
})

export const mutations = {
    frontPagePosts (state, posts) {
        state.posts = posts
    }
}
