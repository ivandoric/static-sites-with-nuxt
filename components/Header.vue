<template>
    <div class="container">
        <ul>
            <li>
                <nuxt-link to="/">Home</nuxt-link>
            </li>
            <li><nuxt-link to="/about">About</nuxt-link></li>
            <li><nuxt-link to="/contact">Contact</nuxt-link></li>
            <li>
                <nuxt-link to="/products">Products</nuxt-link>
                <ul>
                    <li>
                        <nuxt-link to="/products/umbrella">Umbrella</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/products/watch">Watch</nuxt-link>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>
