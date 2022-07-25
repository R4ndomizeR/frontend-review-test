<template>
  <div class="cart-list">
    <div v-for="item in spisok_dlya_rendera">
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cart: Array,
  },
  computed: {
      // название метода не соответствует стилю проекта
      spisok_dlya_rendera() {
          // Array.prototype.reverse() - модифицирует целевой массив
          // решение - создать копию массива (slice()) и работать уже с ней
          // this.cart.slice().reverse();
          return this.cart.reverse();
      },
  },
};
</script>

<style>

</style>
