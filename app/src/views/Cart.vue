<template>
  <div>{{$route.params.id}}</div>
  <h2>{{phone.title.toUpperCase()}}</h2>
  <div>
      <img src="book.img" >
  </div>
  <p>{{phone.description}}</p>
  <router-view/>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: "Phone",
    computed: {
        ...mapGetters([cart]),
        }
    }
}
</script>

<style scoped>

</style>