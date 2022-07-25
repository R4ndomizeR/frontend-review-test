<template>
  <div class="card">
    <p class="card-title">{{ product.title }}</p>
    <img class="card-image" :src="publicPath + product.image" alt="">
    <p class="card-price">Цена: {{ product.price }} {{ currency }}</p>

    <div>
      <input type="number" v-model="amount" min="0">
      <span> кг</span>
    </div>

    <button @click="addToCart(product)"> В корзину </button>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: {
    product: Object,
    currency: String,
  },
  data() {
    return {
      amount: 0,
      publicPath: process.env.BASE_URL
    }
  },
  methods: {
    addToCart(product) {
      let _amount = +this.amount

      if (_amount <= 0) return

      let item = {
        amount: _amount,
        price: product.price,
        title: product.title,
      }

      this.$store.commit('addToCart', item)
    },
  },
}
</script>

<style scoped>
  .card {
    display: inline-block;
    /* width: 100%; */

    flex-grow: 1;
    flex-basis: 33%;

    border: 1px solid #908888;
    border-radius: 5px;
    text-align: center;
    padding: 10px;
  }

  @media (min-width: 420px) and (max-width: 840px) {
    .card {
      flex-grow: 0;
      flex-basis: 50%;
    }
  }

  @media (max-width: 420px) {
    .card {
      flex-basis: 100%;
    }
  }

  .card-image {
    width: 100%;
  }

  button {
    padding: 5px;
    margin: 5px;
  }
</style>