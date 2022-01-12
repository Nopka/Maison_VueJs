import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lumieres:{
      salon: false,
      chambre: false
    },
    objet:{
      interagit: false
    }
  },
  mutations: {
    setLumiere(state, piece){
      state.lumieres[piece] = !state.lumieres[piece];
    },
    changeObjet(state){
      state.objet[interagit] = !state.objet[interagit];
    }
  },
  actions: {
  },
  modules: {
  }
})
