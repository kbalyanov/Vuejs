<template>
<div class="items">
  <div v-for="phone in allPhones" :key="phone.id" >
        <h2>{{phone.title}}</h2>
        <p>{{phone.description}}</p>
        <img src="phone.img">
        </div>
        </div>
  <router-view/>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    

    name: "Items", //finishedBooks
    computed: {
        ...mapGetters(['allPhones'])
    }
}

</script>

<style scoped>
.items {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>