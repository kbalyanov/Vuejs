<template>
    <div :style="{backgroundColor: background}">
        Все права защищены 2021
        <!-- <router-link v-for="tab in tabs" :key="tab.path" :to="tab.path" 
        :style="{fontSize: size}">{{tab.name}}</router-link> -->
    </div>
    
</template>

<script>

export default {
    name: "FooterMain",
    props: {
        background: String,
        tabs: Array,
        size: String
    }
}
</script>


<style scoped>
div {
    display: flex;
    justify-content: space-around;
    padding: 20px;
    width: 100%;
    margin: 0;
}
</style>