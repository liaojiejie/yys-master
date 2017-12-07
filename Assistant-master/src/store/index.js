/**
 * Created by user on 2017/9/27.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import slidehiddle from './pageslide/slidehiddle'
Vue.use(Vuex)
export default new Vuex.Store({
  state,
  getters,
  mutations,
  modules: {
    slidehiddle
  }
})
