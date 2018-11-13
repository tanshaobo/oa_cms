import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  authToken: false
}

export default new Vuex.Store({
  state
})
