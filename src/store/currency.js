export default {
  state: {
    currency: 'VGTB'
  },
  getters: {
    currency(state) {
      return state.currency
    },
  },
}