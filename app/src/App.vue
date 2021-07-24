<template>
  <header-nav :background="background" :position="position" :tabs="tabs"></header-nav>
  <div class="p">
    <h1>iPhones for sale</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
      Corrupti dolores sint voluptas ullam? Facere mollitia non, nostrum pariatur aliquid ratione.</p>
  </div>
  
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
*{
  box-sizing: border-box;
}
#app {
  position: relative;
  color: #2c3e50;
  z-index: 100;
};
#header-nav {
  text-decoration: none;
  list-style-type: none;
  
}
.chat{
  display: flex;
  flex-direction: column;
  width: 20%;
  flex-wrap: nowrap;
}

.p {
  padding-top: 80px;
  text-align: center;
  color: black;
}

.items{
  width: 100%;
}


@media(max-width: 1200px) {
 .chat{
  display: flex;
  flex-direction: column;
  width: 30%;
  flex-wrap: nowrap;
 }
};

@media(max-width: 700px) {
  .chat{
  display: flex;
  flex-direction: column;
  width: 80%;
  flex-wrap: nowrap;
}


  
};


</style>
