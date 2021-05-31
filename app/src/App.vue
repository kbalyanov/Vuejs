<template>
  <header-nav :background="background" :tabs="tabs"></header-nav>
  <router-view></router-view>

 
  
  
</template>

<script>

import HeaderNav from '@/components/HeaderNav';


export default {
  components: {HeaderNav}, 
    data(){
    return{
      tabs: [
        {name: 'Phones', path: '/phones'},
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
