<template>
  <div class="chambre" :class="{'lumiere': $store.state.lumieres.chambre}">
    <h1>Voici la Chambre</h1>
    <img src="../assets/chambre.jpg" alt="salon">
    <button @click="actionLumiere">Lumieres</button>
  </div>
</template>
<script>
export default {
     methods:{
          actionLumiere(){
               this.$store.commit("setLumiere","chambre");
          }
     }
}
</script>
<style scoped>
     .chambre{
          background-color: black;
     }
     .lumiere{
          background-color: whitesmoke;
     }
</style>