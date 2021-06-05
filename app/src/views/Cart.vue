<template>
  
  <div v-for="phone in phonesInCart" :key="phone.id">
        <h2>{{phone.title}}</h2>
        <p>{{phone.description}}</p>
        <input type="button" value="remove item" v-on:click="removeItem(index)">
         <!-- <router-link :to="{name: 'phone', params: {id: phone.id}}">открыть</router-link> -->

    </div>
  <router-view/>
</template>

<script>
import { mapGetters } from 'vuex';
import {mapMutations} from 'vuex'
export default {
    name: "Phone",
    computed: {
        ...mapGetters(["phonesInCart"]),
        },
        methods: {
          ...mapMutations(["removeElement"]),
          removeItem(index) {
            this.removeElement(index)
          }
        }
    
};
</script>

<style scoped>

</style>