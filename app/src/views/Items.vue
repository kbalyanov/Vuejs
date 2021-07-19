<template>

<div class="items">
  
  <div v-for="phone in myGoods" :key="phone.id" >
    <div class="phones" >
        <h2>{{phone.title}}</h2>
        <p>{{phone.price}}</p>
        <img src="{phone.image}">
        <p>{{phone.description}}</p>
        <!-- <router-link :to="{name: 'Book', params: {id: 1}}">Книга 25</router-link> --> 
        <input type="button" value="add to card" v-on:click="chooseCard(phone)">
      </div>
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
  display: inline-grid;
  grid-template-columns: auto auto;
  grid-gap: 70px;
  background-color: beige;
  padding-top: 85px;
  padding-left: 30px;
  padding-right: 30px;
  text-align: center;
};
.phones {
  
}
input {
  padding: 10px;
};
.text {
  width: 100%;
  text-align: center;
};
p {
  width: 30%;
};

</style>