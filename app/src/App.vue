<template>
  <header-nav :background="background" :position="position" :tabs="tabs"></header-nav>
  <!-- <items></items> -->
  <router-view></router-view>
  <footer-main :background="background"></footer-main>

 
  
  
</template>

<script>

import HeaderNav from '@/components/HeaderNav';
import FooterMain from '@/components/FooterMain';


export default {
  components: {HeaderNav, FooterMain}, 
    data(){
    return{
      tabs: [
        {name: 'ITEMS', path: '/items'},
        {name: 'REGISTRATION', path: '/tablets'},
        {name: 'CART', path: '/cart'}
      ],
      
      background: "grey"
    }
  },
  
 
  
}
</script>


<style>
#app {
  position: relative;
  color: #2c3e50;
  z-index: 100;
};
#header-nav {
  text-decoration: none;
  list-style-type: none;
}


</style>
