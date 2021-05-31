<template>
  <div>{{$route.params.id}}  dvnhierfod</div>
  <router-view/>
</template>

<script>
export default {
    name: "items",
    computed: {
        book() {
            return this.$store.getters.bookById($this.$route);
        }
    }
}
</script>

<style scoped>

</style>