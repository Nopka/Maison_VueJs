<template>
  <div class="home">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/cuisine">Cuisine</router-link> |
      <router-link to="/salon">Salon</router-link> |
      <router-link to="/grenier">Grenier</router-link> |
      <router-link to="/chambre">Chambre</router-link>
    </div>
    <div id="interrupteurs">
      <button @click="interragirLumiere('chambre')">Allumer dans la Chambre</button> <br>
      <button @click="interragirLumiere('salon')">Allumer dans le Salon</button>
    </div>
    <div id="infoObjet">
      <p v-if="$store.state.objet.interagit == true">
        {{message}}
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data(){
    return{
      message:"Vous avez cliquez sur le rubik's cube !"
    }
  },
  components: {
  },
  methods: {
    interragirLumiere(piece){
      this.$store.commit("setLumiere",piece);
    }
  }
}
</script>

