import Vue from 'vue'
import Vuex from 'vuex'
import busket from './modules/busket.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    busket
  }
})
