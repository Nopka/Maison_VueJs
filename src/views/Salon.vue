<template>
  <div class="salon" :class="{'lumiere': $store.state.lumieres.salon}">
    <div id="nav">
      <router-link to="/">Home</router-link>
    </div>
    <h1>Voici le salon</h1>
    <img src="../assets/salon.jpg" alt="salon">
    <button @click="actionLumiere">Lumieres</button>
  </div>
</template>
<script>
export default {
     methods:{
          actionLumiere(){
              this.$store.commit("setLumiere","salon");
          }
     }
}
</script>
<style scoped>
     .salon{
          background-color: black;
     }
     .lumiere{
          background-color: whitesmoke;
     }
</style>