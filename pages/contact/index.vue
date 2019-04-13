<template>
    <div>
        Contact page
    </div>
</template>

<script>
    export default {
        layout: 'contact-layout',
        head() {
            return {
                title: 'Contact page',
                meta: [
                    {hid: 'description', name: 'description', content: 'My description'},
                    {hid: 'ogtitle', property: 'og:title', content: 'Contact page'}
                ]
            }
        }
    }
</script>
