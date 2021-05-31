<template>
    <nav :style="{backgroundColor: background}">
        <router-link v-for="tab in tabs" :key="tab.path" :to="tab.path" 
        :style="{fontSize: size}">{{tab.name}}</router-link>
    </nav>
</template>

<script>

export default {
    name: "HeaderNav",
    props: {
        background: String,
        tabs: Array,
        size: String
    }
}
</script>


<style scoped>
nav {
    display: flex;
    justify-content: space-around;
    padding: 20px;
}
</style>