<template>
  
  <div v-for="item in phonesInCart" :key="item.id">
        <h2>{{item.title}}</h2>
        <p>{{item.description}}</p>
         <!-- <router-link :to="{name: 'phone', params: {id: phone.id}}">открыть</router-link> -->

    </div>
  <router-view/>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: "Phone",
    computed: {
        ...mapGetters(["phonesInCart"]),
        }
    
};
</script>

<style scoped>

</style>