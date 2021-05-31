<template>
    <div>Телефоны</div>
    <div>hello
        <form action="submit">
        <div>
            <label for="name"></label>
            <input type="text" name="name">
        </div>            
        </form>
    </div>
    <header-nav :tabs="tabs"></header-nav>
    <router-view/>
</template>

<script>
import HeaderNav from "@/components/HeaderNav";
// import HeaderNav from '../components/HeaderNav.vue';
// import HeaderNav from '../components/HeaderNav.vue';
export default {
    name: "Finished",
    components: {HeaderNav},
    data(){

               return {
            tabs: [ // Lists
                {name: 'registration', path: '/lists/registration'},
                
            ]
        }
    }
    
}
</script>

<style scoped>

</style>