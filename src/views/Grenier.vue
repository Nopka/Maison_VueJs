<template>
  <div class="genier">
    <div id="nav">
      <router-link to="/">Home</router-link>
    </div>
    <h1>Voici le Grenier</h1>
    <img src="../assets/grenier.jpg" alt="salon"> <br>
    <img src="../assets/rubikscube.png" alt="rubikscube" class="objet" @click="actionObjet">
  </div>
</template>
<script>
export default {
  methods:{
    actionObjet(){
      this.$store.commit("changeObjet");
    }
  }
}
</script>
<style scoped>
.objet{
  width: 250px;
}
</style>