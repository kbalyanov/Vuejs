<template>
<div class="items">
  <div v-for="phone in myGoods" :key="phone.id" class="phone">
        <h2>{{phone.title}}</h2>
        <p>{{phone.description}}</p>
        <p>{{phone.price}}</p>
        <img src="phone.img">
        <!-- <router-link :to="{name: 'Book', params: {id: 1}}">Книга 25</router-link> --> 
        <input type="button" value="add to card" v-on:click="chooseCard(phone)">
  </div>
</div>
  <router-view/>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    name: "Items", //finishedBooks
    computed: {
      myGoods() {
           return this.$store.getters.goodByCategory(this.$route.params.category);

      }
    },
    methods: {
    ...mapMutations(['addToCart']),
    chooseCard(values) {
            this.addToCart(values)
            // console.log(values.amount);
        }
    }
};

</script>

<style scoped>
.items {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: beige
};
.phone {
  text-align: center;
}
input {
  padding: 10px;
}
</style>