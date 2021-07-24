<template>

    <p>Start Shopping</p>

    <div class="items">
      <div v-for="phone in phonesInCart" :key="phone.id">
        <h2>{{phone.title}}</h2>
        <img v-bind:src="require(`../assets/pics/${phone.img}`)">
        <p>{{phone.description}}</p>
        <input type="button" value="remove item" v-on:click="removeItem(index)">
      </div>
    </div>  
  <router-view/>
</template>

<script>
// import Items from "Items.vue"
import { mapGetters } from 'vuex';
import {mapMutations} from 'vuex';
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
.items {
  display: inline-grid;
  grid-template-columns: auto auto;
  grid-gap: 70px;
  background-color: beige;
  padding-top: 85px;
  padding-left: 30px;
  padding-right: 30px;
  text-align: center;
  width: 100%
}

@media(max-width: 700px) {
  .items {
    display: flex; 
    flex-direction: column
  }
};

</style>