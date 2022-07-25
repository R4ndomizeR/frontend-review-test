
export default {
  state: {
    cart: []
  },
  getters: {
    cartItemsReversed(state) {
      return state.cart.slice().reverse()
    },
    cartPrice(state) {
      let val = 0
      state.cart.forEach((item) => {
        val += item.price * item.amount
      })
      return val.toFixed(2)
    },
  },
  mutations: {
    addToCart(state, data) {
      state.cart.push(data)
    }
  },
  actions: {

  }
}