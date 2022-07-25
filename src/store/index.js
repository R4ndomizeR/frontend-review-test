import Vue from 'vue'
import Vuex from 'vuex'
import cart from './cart'
import currency from './currency'
import products from './products'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    currency,
    products,
    cart
  }
})
