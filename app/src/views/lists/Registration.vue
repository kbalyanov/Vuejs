<template>
    <div>hello
        <form action="submit">
        <div>
            <label for="name"></label>
            <input type="text" name="name">
        </div>            
        </form>
        <router-view/>
    </div>
    
</template>

<script>


export default {
    name: "cart",
    

    
}
</script>

<style scoped>

</style>