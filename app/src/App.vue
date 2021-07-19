<template>
  <header-nav :background="background" :position="position" :tabs="tabs"></header-nav>
  <!-- <items></items> -->
  <router-view></router-view>
  <div>
    <Nav />
  <Chat />
  </div>
  <footer-main :background="background"></footer-main>

  
  
</template>

<script>

import HeaderNav from '@/components/HeaderNav';
import FooterMain from '@/components/FooterMain';
import Nav from '@/components/Nav.vue';
import Chat from '@/components/Chat.vue';



export default {
  components: {HeaderNav, FooterMain, Nav, Chat}, 
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
