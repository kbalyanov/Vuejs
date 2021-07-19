<template>
  <header-nav :background="background" :position="position" :tabs="tabs"></header-nav>
  <div class="image"><img src="./assets/pics/OIP.jpg" alt="wef"></div>
  
  <router-view></router-view>
  <div class="chat">
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
  margin: 0 auto;
}
.chat{
  display: flex;
  flex-direction: column;
  width: 20%;
  flex-wrap: nowrap;
}

.image{
  display: flex;
  justify-content: center;
}


</style>
