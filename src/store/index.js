import Vue from 'vue'
import Vuex from 'vuex'
import modul from './modules/modul'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
modules:{
   modul
} 
})
