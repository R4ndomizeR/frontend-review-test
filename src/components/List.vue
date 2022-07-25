<template>
  <div class="product-list">
    <Product v-for="product in products" :key="product.id" :product="product" />
    <!-- :style="{ width: cardsWidth + '%' }" -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Product from './Product.vue'

export default {
  name: 'List',
  data() {
    return {
      interval: null,
      // windowWidth: 0,
    }
  },
  computed: {
    ...mapGetters({ products: 'getProducts' }),
    // cardsWidth() {
    //   let width = this.windowWidth
    //   let count = 1
    //   if (width > 840) {
    //     count = 3
    //   }
    //   else if ((width > 420 && width < 840)) {
    //     count = 2
    //   }
    //   return 100 / count
    // },
  },
  methods: {
    startPricesMonitoring() {
      this.interval = setInterval(this.getList, 2000)
    },
    getList() {
      this.$store.dispatch("loadProducts")
    },
    // onWindowResize(event) {
    //   this.windowWidth = window.innerWidth
    // }
  },
  created() {
    this.startPricesMonitoring()
  },
  // mounted() {
  //   this.onWindowResize()
  //   window.addEventListener("resize", this.onWindowResize)
  // },
  beforeDestroy() {
    clearInterval(this.interval)
    // window.removeEventListener("resize", this.onWindowResize)
  },
  components: { Product }
}
</script>

<style scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;

  padding: 10px;
}
</style>
