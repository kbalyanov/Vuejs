<template>
  <div v-for="book in finishedBooks" :key="book.id">
        <h2>{{book.title}}</h2>
        <router-link :to="{name: 'Book', params: {id: book.id}}">открыть</router-link>
        </div>
  <router-view/>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    

    name: "Reading", //finishedBooks
    computed: {
        ...mapGetters(['finishedBooks'])
    }
}

</script>

<style scoped>

</style>