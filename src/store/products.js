import api from '../../api/products.js'

export default {
  state: {
    products: []
  },
  getters: {
    getProducts(state) {
      return state.products
    }
  },
  mutations: {
    updateProducts(state, data) {
      state.products = data
    }
  },
  actions: {
    loadProducts({ commit }) {

      api.getProductsList().then(res => {
        commit('updateProducts', res)
      })

    },
  }
}