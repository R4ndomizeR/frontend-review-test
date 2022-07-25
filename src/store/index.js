import Vue from 'vue'
import Vuex from 'vuex'
import api from '../../api/products.js'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    getProductsList(ctx, data) {
      return api.getProductsList();
    },
  },
  modules: {
    // для удобного структурирования - вынести состояние сущностей в отдельные модули cart.js, products.js
  }
})
