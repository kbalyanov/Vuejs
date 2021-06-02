<template>
  <header-nav :background="background" :tabs="tabs"></header-nav>
  <!-- <items></items> -->
  <router-view></router-view>

 
  
  
</template>

<script>

import HeaderNav from '@/components/HeaderNav';
// import Items from './components/Items.vue'


export default {
  components: {HeaderNav,}, 
    data(){
    return{
      tabs: [
        {name: 'Items', path: '/items'},
        {name: 'Registration', path: '/tablets'},
        
      ],
      
      background: "grey"
    }
  },
  
 
  
}
</script>


<style>
#app {
  
  color: #2c3e50;
}


</style>
