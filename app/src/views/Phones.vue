<template>
    <div>Телефоны</div>
    <header-nav :tabs="tabs"></header-nav>
    <div v-for="book in finishedBooks" :key="book.id">
        <h2>{{book.title}}</h2>
         <router-link :to="{name: 'items', params: {id: book.id}}">открыть</router-link>

    </div>
    <router-view/>
</template>

<script>
import HeaderNav from "@/components/HeaderNav";

// import Items from "@/components/Items";
// import HeaderNav from '../components/HeaderNav.vue';
// import HeaderNav from '../components/HeaderNav.vue';




export default {
    
    name: "Reading",
    
    components: {HeaderNav}, 
    data(){

               return {
            tabs: [ // Lists
                {name: 'cart', path: '/lists/registration'},
                {name: 'Items', path: '/phones/items'}
                
            ]
        }
    }
    
}
</script>

<style scoped>

</style>