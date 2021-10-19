import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

export default new Vuex.Store ({
  state: {
    notes: []
  },
  mutations: {
    setMessage (state, payload) {
     state.notes.push(payload)
    }
  },
  actions: {
    setMessage ({commit}, payload) {
      commit('setMessage', payload)
    }
  },
  getters: {
    getNote (state) {
      return state.notes
    }
  }
})